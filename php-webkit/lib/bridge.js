var url = require("url");
var child = require("child_process");
var path = require("path");
var fs = require("fs");

function runPHP(req, response, next, phpinfo){

  var phpdir = phpinfo.path;
  var parts = url.parse(req.url);
  var query = parts.query;

  var file = path.join(phpdir, parts.pathname);

  if(!fs.existsSync(file)){
    file = path.join(phpdir, "index.php");
  } else if(fs.statSync(file).isDirectory()){
    file = path.join(file, "index.php");
  }

  var pathinfo = "";
  var i = req.url.indexOf(".php");

  if(i > 0) {
    pathinfo = parts.pathname.substring(i+4);
  } else {
    pathinfo = parts.pathname;
  }

  var env = {
    SERVER_SIGNATURE: "php-webkit",
    PW_BIN_PATH: path.dirname(process.execPath),
    PW_BIN_FILE: process.execPath,
    PW_ARGUMENTS: phpinfo.arguments,
    PW_MANIFEST: phpinfo.manifest,
    PW_APP_PATH: process.cwd(),
    PW_SERVER_HOST: phpinfo.host,
    PW_SERVER_PORT: (phpinfo.port == 0 ? req.connection.localPort : phpinfo.port),
    PATH_INFO: pathinfo, //The extra path information, as given in the requested URL. In fact, scripts can be accessed by their virtual path, followed by extra information at the end of this path. The extra information is sent in PATH_INFO.
    PATH_TRANSLATED: "", //The virtual-to-real mapped version of PATH_INFO.
    SCRIPT_NAME: parts.pathname, //The virtual path of the script being executed.
    SCRIPT_FILENAME: file,
    REQUEST_FILENAME: file, //The real path of the script being executed.
    SCRIPT_URI: req.url, //The full URL to the current object requested by the client.
    URL: req.url, //The full URI of the current request. It is made of the concatenation of SCRIPT_NAME and PATH_INFO (if available.)
    SCRIPT_URL: req.url,
    REQUEST_URI: req.url, //The original request URI sent by the client.
    REQUEST_METHOD: req.method, //The method used by the current request; usually set to GET or POST.
    QUERY_STRING: parts.query||"", //The information which follows the ? character in the requested URL.
    CONTENT_TYPE: req.get("Content-type")||"", //"multipart/form-data", //"application/x-www-form-urlencoded", //The MIME type of the request body; set only for POST or PUT requests.
    CONTENT_LENGTH: req.rawBody.length||0, //The length in bytes of the request body; set only for POST or PUT requests.
    AUTH_TYPE: "", //The authentication type if the client has authenticated itself to access the script.
    AUTH_USER: "",
    REMOTE_USER: "", //The name of the user as issued by the client when authenticating itself to access the script.
    ALL_HTTP: Object.keys(req.headers).map(function(x){return "HTTP_"+x.toUpperCase().replace("-", "_")+": "+req.headers[x];}).reduce(function(a, b){return a+b+"\n";}, ""), //All HTTP headers sent by the client. Headers are separated by carriage return characters (ASCII 13 - \n) and each header name is prefixed by HTTP_, transformed to upper cases, and - characters it contains are replaced by _ characters.
    ALL_RAW: Object.keys(req.headers).map(function(x){return x+": "+req.headers[x];}).reduce(function(a, b){return a+b+"\n";}, ""), //All HTTP headers as sent by the client in raw form. No transformation on the header names is applied.
    SERVER_SOFTWARE: "php-webkit", //The web server's software identity.
    SERVER_NAME: phpinfo.host, //The host name or the IP address of the computer running the web server as given in the requested URL.
    SERVER_ADDR: req.connection.localAddress || req.socket.localAddress || req.connection.socket.localAddress || "", //The IP address of the computer running the web server.
    SERVER_PORT: (phpinfo.port == 0 ? req.connection.localPort : phpinfo.port), //The port to which the request was sent.
    GATEWAY_INTERFACE: "CGI/1.1", //The CGI Specification version supported by the web server; always set to CGI/1.1.
    SERVER_PROTOCOL: "", //The HTTP protocol version used by the current request.
    REMOTE_ADDR: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress || "", //The IP address of the computer that sent the request.
    REMOTE_PORT: req.connection.remotePort, //The port from which the request was sent.
    DOCUMENT_ROOT: "", //The absolute path of the web site files. It has the same value as Documents Path.
    INSTANCE_ID: "", //The numerical identifier of the host which served the request. On Abyss Web Server X1, it is always set to 1 since there is only a single host.
    APPL_MD_PATH: "", //The virtual path of the deepest alias which contains the request URI. If no alias contains the request URI, the variable is set to /.
    APPL_PHYSICAL_PATH: "", //The real path of the deepest alias which contains the request URI. If no alias contains the request URI, the variable is set to the same value as DOCUMENT_ROOT.
    IS_SUBREQ: "", //It is set to true if the current request is a subrequest, i.e. a request not directly invoked by a client. Otherwise, it is set to true. Subrequests are generated by the server for internal processing. XSSI includes for example result in subrequests.
    REDIRECT_STATUS: 1
  };

  Object.keys(req.headers).map(function(x){env["HTTP_"+x.toUpperCase().replace("-", "_")] = req.headers[x];});

  if(/.*?\.php$/.test(file)){
    var res = "", err = "";

    var php = child.spawn(phpinfo.bin, [], {
      env: env
    });

    //php.stdin.resume();
    //console.log(req.rawBody);
    //(new Stream(req.rawBody)).pipe(php.stdin);
    /*.on("error", function(){}); */
    php.stdin.write(req.rawBody);
    //php.stdin.write("\n");

    //php.stdin.end();


    php.stdout.on("data", function(data){
      //console.log(data.toString());
      res += data.toString();
    });
    php.stderr.on("data", function(data){
      err += err.toString();
    });
    php.on("error", function(err){
      console.error(err);
    });
    php.on("exit", function(){
      // extract headers
      php.stdin.end();

      var lines = res.split("\r\n");
      var line = 0;
      var html = "";
      if(lines.length){
        do {
          var m = lines[line].split(": ");
          if(m[0] === "") { break; }

          //console.log("HEADER: "+m[0]+": "+m[1]);
          if(m[0] == "Status"){
            response.statusCode = parseInt(m[1]);
          }
          if(m.length == 2){
            response.setHeader(m[0], m[1]);
          }
          line++;
        } while(lines[line] !== "");

        html = lines.splice(line+1).join("\n");
      } else {
        html = res;
      }
      //console.log("STATUS: "+response.statusCode);
      //console.log(html);
      response.send(html, response.statusCode);
//      response.status(response.statusCode).send(html);
      response.end();
    });

  } else {
    response.sendfile(file);
//     response.sendFile(file);
//    response.end();
//    next();
  }
}

exports.cgi = function(phpinfo){
  return function(req, res, next){
    var data = null;

    //req.setEncoding('utf8');
    req.on('data', function(chunk) {
      //data.write(chunk.toString('binary'), data.length, chunk.length, 'binary');
      //console.log(chunk);
      if(!data) {
        data = chunk;
      } else {
       data = data+chunk;
      }
      //data = data.concat(chunk);
    });
    req.on('end', function() {
      req.rawBody = data||"";
      //console.log(req.rawBody);
      //console.log("ENCODING: "+req.get("Content-type")+", len: "+req.rawBody.length);
      runPHP(req, res, next, phpinfo);
    });
  };
};
