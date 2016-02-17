var gui = require('nw.gui');
var win = gui.Window.get();

var os = require('os');

var dns = require('dns');

dns.resolve('google.com', function(err) {
  if (err)
     console.log(err);
  else        
	console.log('yes!!!!');
});


var openUrl = require("../node_modules/openurl/openurl.js");


var Runic = {};
Runic.init = {};
Runic.db = {};

function startRuna() {
	openUrl.open('http://runa-odin.org');
}

Runic.init = function() {
	Runic.speed = 500;
	Runic.runes = ['fehu','uruz','thurisaz','ansuz','raidho','kenaz','gebo','wunjo','hagalaz','nauthiz','isa','jera','eihwaz','perthro','algiz','sowilo','tiwaz','berkano','ehwaz','mannaz','laguz','ingwaz','othala','dagaz'];
	Runic.letters = ['F','U','X','A','R','K','G','W','H','N','I','J','Y','P','Z','S','T','B','E','M','L','Q','O','D'];
	Runic.correct = 
	[
		['asgard', 'alfheim', 'midgard', 'midgard2', 'svartalfheim', 'hell'], 
		['asgard1', 'alfheim1', 'midgard1', 'midgard3', 'svartalfheim1', 'hell1'], 
		['nifelheim', 'jotunheim', 'muspelheim', 'vanaheim'], 
		['nifelheim1', 'jotunheim1', 'muspelheim1', 'vanaheim1'], 
		['att1_', 'att2_', 'att3_'], 
		['att1_1', 'att2_1', 'att3_1']
	];
	Runic.correctVal = 
	[
		['zthurisaz#zansuz#zraidho#zkenaz', 'zgebo#zwunjo#zhagalaz#znauthiz', 'zfehu#zuruz#zothala#zdagaz', 'zisa#zjera#zeihwaz#zperthro', 'zalgiz#zsowilo#ztiwaz#zberkano', 'zehwaz#zmannaz#zlaguz#zingwaz'],
		['zthurisaz1#zansuz1#zraidho1#zkenaz1', 'zgebo1#zwunjo1#zhagalaz1#znauthiz1', 'zfehu1#zuruz1#zothala1#zdagaz1', 'zisa1#zjera1#zeihwaz1#zperthro1', 'zalgiz1##zsowilo1#ztiwaz1#zberkano1', 'zehwaz1#zmannaz1#zlaguz1#zingwaz1'],
		['zthurisaz2#zgebo2#zisa2#zothala2#zalgiz2#zehwaz2', 'zansuz2#zwunjo2#zjera2#zdagaz2#zsowilo2#zmannaz2', 'zraidho2#zhagalaz2#zfehu2#zeihwaz2#ztiwaz2#zlaguz2', 'zkenaz2#znauthiz2#zuruz2#zperthro2#zberkano2#zingwaz2'],
		['zthurisaz3#zgebo3#zisa3#zothala3#zalgiz3#zehwaz3', 'zansuz3#zwunjo3#zjera3#zdagaz3#zsowilo3#zmannaz3', 'zraidho3#zhagalaz3#zfehu3#zeihwaz3#ztiwaz3#zlaguz3', 'zkenaz3#znauthiz3#zuruz3#zperthro3#zberkano3#zingwaz3'],
		['zfehu4#zuruz4#zthurisaz4#zansuz4#zraidho4#zkenaz4#zgebo4#zwunjo4', 'zhagalaz4#znauthiz4#zisa4#zjera4#zeihwaz4#zperthro4#zalgiz4#zsowilo4', 'ztiwaz4#zberkano4#zehwaz4#zmannaz4#zlaguz4#zingwaz4#zothala4#zdagaz4'],
		['zfehu5#zuruz5#zthurisaz5#zansuz5#zraidho5#zkenaz5#zgebo5#zwunjo5', 'zhagalaz5#znauthiz5#zisa5#zjera5#zeihwaz5#zperthro5#zalgiz5#zsowilo5', 'ztiwaz5#zberkano5#zehwaz5#zmannaz5#zlaguz5#zingwaz5#zothala5#zdagaz5']
	],
	Runic.correctRuna = 
	[
		[
			['Thurisaz', 'Ansuz', 'Raidho', 'Kenaz'],
			['Gebo', 'Wunjo', 'Hagalaz', 'Nauthiz'],
			['Fehu', 'Uruz', 'Othala', 'Dagaz'],
			['Isa', 'Jera', 'Eihwaz', 'Perthro'],
			['Algiz', 'Sowilo', 'Tiwaz', 'Berkano'],
			['Ehwaz', 'Mannaz', 'Laguz', 'Ingwaz']
		], 
		[
			['Thurisaz', 'Ansuz', 'Raidho', 'Kenaz'],
			['Gebo', 'Wunjo', 'Hagalaz', 'Nauthiz'],
			['Fehu', 'Uruz', 'Othala', 'Dagaz'],
			['Isa', 'Jera', 'Eihwaz', 'Perthro'],
			['Algiz', 'Sowilo', 'Tiwaz', 'Berkano'],
			['Ehwaz', 'Mannaz', 'Laguz', 'Ingwaz']
		],
		[
			['Thurisaz', 'Gebo', 'Isa', 'Othala', 'Algiz', 'Ehwaz'],
			['Ansuz', 'Wunjo', 'Jera', 'Dagaz', 'Sowilo', 'Mannaz'],
			['Raidho', 'Hagalaz', 'Fehu', 'Eihwaz', 'Tiwaz', 'Laguz'],
			['Kenaz', 'Nauthiz', 'Uruz', 'Perthro', 'Berkano', 'Ingwaz']
		],
		[
			['Thurisaz', 'Gebo', 'Isa', 'Othala', 'Algiz', 'Ehwaz'],
			['Ansuz', 'Wunjo', 'Jera', 'Dagaz', 'Sowilo', 'Mannaz'],
			['Raidho', 'Hagalaz', 'Fehu', 'Eihwaz', 'Tiwaz', 'Laguz'],
			['Kenaz', 'Nauthiz', 'Uruz', 'Perthro', 'Berkano', 'Ingwaz']		
		],
		[
			['Fehu', 'Uruz', 'Thurisaz', 'Ansuz', 'Raidho', 'Kenaz', 'Gebo', 'Wunjo'],
			['Hagalaz', 'Nauthiz', 'Isa', 'Jera', 'Eihwaz', 'Perthro', 'Algiz', 'Sowilo'],
			['Tiwaz', 'Berkano', 'Ehwaz', 'Mannaz', 'Laguz', 'Ingwaz', 'Othala', 'Dagaz']
		],
		[
			['Fehu', 'Uruz', 'Thurisaz', 'Ansuz', 'Raidho', 'Kenaz', 'Gebo', 'Wunjo'],
			['Hagalaz', 'Nauthiz', 'Isa', 'Jera', 'Eihwaz', 'Perthro', 'Algiz', 'Sowilo'],
			['Tiwaz', 'Berkano', 'Ehwaz', 'Mannaz', 'Laguz', 'Ingwaz', 'Othala', 'Dagaz']		
		]
	];
	Runic.correctRunaLetterP = 
	[
		[
			['<td>@</td><td>X</td>', '<td>@</td><td>A</td>', '<td>@</td><td>R</td>', '<td>@</td><td>K</td>'],
			['<td>@</td><td>G</td>', '<td>@</td><td>W</td>', '<td>@</td><td>H</td>', '<td>@</td><td>N</td>'],
			['<td>@</td><td>F</td>', '<td>@</td><td>U</td>', '<td>@</td><td>O</td>', '<td>@</td><td>D</td>'],
			['<td>@</td><td>I</td>', '<td>@</td><td>J</td>', '<td>@</td><td>Y</td>', '<td>@</td><td>P</td>'],
			['<td>@</td><td>Z</td>', '<td>@</td><td>S</td>', '<td>@</td><td>T</td>', '<td>@</td><td>B</td>'],
			['<td>@</td><td>E</td>', '<td>@</td><td>M</td>', '<td>@</td><td>L</td>', '<td>@</td><td>Q</td>']
		], 
		[
			['<td>@</td><td>X</td>', '<td>@</td><td>A</td>', '<td>@</td><td>R</td>', '<td>@</td><td>K</td>'],
			['<td>@</td><td>G</td>', '<td>@</td><td>W</td>', '<td>@</td><td>H</td>', '<td>@</td><td>N</td>'],
			['<td>@</td><td>F</td>', '<td>@</td><td>U</td>', '<td>@</td><td>O</td>', '<td>@</td><td>D</td>'],
			['<td>@</td><td>I</td>', '<td>@</td><td>J</td>', '<td>@</td><td>Y</td>', '<td>@</td><td>P</td>'],
			['<td>@</td><td>Z</td>', '<td>@</td><td>S</td>', '<td>@</td><td>T</td>', '<td>@</td><td>B</td>'],
			['<td>@</td><td>E</td>', '<td>@</td><td>M</td>', '<td>@</td><td>L</td>', '<td>@</td><td>Q</td>']
		],
		[
			['<td>@</td><td>X</td>', '<td>@</td><td>G</td>', '<td>@</td><td>I</td>', '<td>@</td><td>O</td>', '<td>@</td><td>Z</td>', '<td>@</td><td>E</td>'],
			['<td>@</td><td>A</td>', '<td>@</td><td>W</td>', '<td>@</td><td>J</td>', '<td>@</td><td>D</td>', '<td>@</td><td>S</td>', '<td>@</td><td>M</td>'],
			['<td>@</td><td>R</td>', '<td>@</td><td>H</td>', '<td>@</td><td>F</td>', '<td>@</td><td>Y</td>', '<td>@</td><td>T</td>', '<td>@</td><td>L</td>'],
			['<td>@</td><td>K</td>', '<td>@</td><td>N</td>', '<td>@</td><td>U</td>', '<td>@</td><td>P</td>', '<td>@</td><td>B</td>', '<td>@</td><td>Q</td>']
		],
		[
			['<td>@</td><td>X</td>', '<td>@</td><td>G</td>', '<td>@</td><td>I</td>', '<td>@</td><td>O</td>', '<td>@</td><td>Z</td>', '<td>@</td><td>E</td>'],
			['<td>@</td><td>A</td>', '<td>@</td><td>W</td>', '<td>@</td><td>J</td>', '<td>@</td><td>D</td>', '<td>@</td><td>S</td>', '<td>@</td><td>M</td>'],
			['<td>@</td><td>R</td>', '<td>@</td><td>H</td>', '<td>@</td><td>F</td>', '<td>@</td><td>Y</td>', '<td>@</td><td>T</td>', '<td>@</td><td>L</td>'],
			['<td>@</td><td>K</td>', '<td>@</td><td>N</td>', '<td>@</td><td>U</td>', '<td>@</td><td>P</td>', '<td>@</td><td>B</td>', '<td>@</td><td>Q</td>']	
		],
		[
			['<td>@</td><td>F</td>', '<td>@</td><td>U</td>', '<td>@</td><td>X</td>', '<td>@</td><td>A</td>', '<td>@</td><td>R</td>', '<td>@</td><td>K</td>', '<td>@</td><td>G</td>', '<td>@</td><td>W</td>'],
			['<td>@</td><td>H</td>', '<td>@</td><td>N</td>', '<td>@</td><td>I</td>', '<td>@</td><td>J</td>', '<td>@</td><td>Y</td>', '<td>@</td><td>P</td>', '<td>@</td><td>Z</td>', '<td>@</td><td>S</td>'],
			['<td>@</td><td>T</td>', '<td>@</td><td>B</td>', '<td>@</td><td>E</td>', '<td>@</td><td>M</td>', '<td>@</td><td>L</td>', '<td>@</td><td>Q</td>', '<td>@</td><td>O</td>', '<td>@</td><td>D</td>']
		],
		[
			['<td>@</td><td>F</td>', '<td>@</td><td>U</td>', '<td>@</td><td>X</td>', '<td>@</td><td>A</td>', '<td>@</td><td>R</td>', '<td>@</td><td>K</td>', '<td>@</td><td>G</td>', '<td>@</td><td>W</td>'],
			['<td>@</td><td>H</td>', '<td>@</td><td>N</td>', '<td>@</td><td>I</td>', '<td>@</td><td>J</td>', '<td>@</td><td>Y</td>', '<td>@</td><td>P</td>', '<td>@</td><td>Z</td>', '<td>@</td><td>S</td>'],
			['<td>@</td><td>T</td>', '<td>@</td><td>B</td>', '<td>@</td><td>E</td>', '<td>@</td><td>M</td>', '<td>@</td><td>L</td>', '<td>@</td><td>Q</td>', '<td>@</td><td>O</td>', '<td>@</td><td>D</td>']	
		]
	];	
	Runic.correctRunaLetterM = 
	[
		[
			['<td>X</td><td>@</td>', '<td>A</td><td>@</td>', '<td>R</td><td>@</td>', '<td>K</td><td>@</td>'],
			['<td>G</td><td>@</td>', '<td>W</td><td>@</td>', '<td>H</td><td>@</td>', '<td>N</td><td>@</td>'],
			['<td>F</td><td>@</td>', '<td>U</td><td>@</td>', '<td>O</td><td>@</td>', '<td>D</td><td>@</td>'],
			['<td>I</td><td>@</td>', '<td>J</td><td>@</td>', '<td>Y</td><td>@</td>', '<td>P</td><td>@</td>'],
			['<td>Z</td><td>@</td>', '<td>S</td><td>@</td>', '<td>T</td><td>@</td>', '<td>B</td><td>@</td>'],
			['<td>E</td><td>@</td>', '<td>M</td><td>@</td>', '<td>L</td><td>@</td>', '<td>Q</td><td>@</td>']
		], 
		[
			['<td>X</td><td>@</td>', '<td>A</td><td>@</td>', '<td>R</td><td>@</td>', '<td>K</td><td>@</td>'],
			['<td>G</td><td>@</td>', '<td>W</td><td>@</td>', '<td>H</td><td>@</td>', '<td>N</td><td>@</td>'],
			['<td>F</td><td>@</td>', '<td>U</td><td>@</td>', '<td>O</td><td>@</td>', '<td>D</td><td>@</td>'],
			['<td>I</td><td>@</td>', '<td>J</td><td>@</td>', '<td>Y</td><td>@</td>', '<td>P</td><td>@</td>'],
			['<td>Z</td><td>@</td>', '<td>S</td><td>@</td>', '<td>T</td><td>@</td>', '<td>B</td><td>@</td>'],
			['<td>E</td><td>@</td>', '<td>M</td><td>@</td>', '<td>L</td><td>@</td>', '<td>Q</td><td>@</td>']
		],
		[
			['<td>X</td><td>@</td>', '<td>G</td><td>@</td>', '<td>I</td><td>@</td>', '<td>O</td><td>@</td>', '<td>Z</td><td>@</td>', '<td>E</td><td>@</td>'],
			['<td>A</td><td>@</td>', '<td>W</td><td>@</td>', '<td>J</td><td>@</td>', '<td>D</td><td>@</td>', '<td>S</td><td>@</td>', '<td>M</td><td>@</td>'],
			['<td>R</td><td>@</td>', '<td>H</td><td>@</td>', '<td>F</td><td>@</td>', '<td>Y</td><td>@</td>', '<td>T</td><td>@</td>', '<td>L</td><td>@</td>'],
			['<td>K</td><td>@</td>', '<td>N</td><td>@</td>', '<td>U</td><td>@</td>', '<td>P</td><td>@</td>', '<td>B</td><td>@</td>', '<td>Q</td><td>@</td>']
		],
		[
			['<td>X</td><td>@</td>', '<td>G</td><td>@</td>', '<td>I</td><td>@</td>', '<td>O</td><td>@</td>', '<td>Z</td><td>@</td>', '<td>E</td><td>@</td>'],
			['<td>A</td><td>@</td>', '<td>W</td><td>@</td>', '<td>J</td><td>@</td>', '<td>D</td><td>@</td>', '<td>S</td><td>@</td>', '<td>M</td><td>@</td>'],
			['<td>R</td><td>@</td>', '<td>H</td><td>@</td>', '<td>F</td><td>@</td>', '<td>Y</td><td>@</td>', '<td>T</td><td>@</td>', '<td>L</td><td>@</td>'],
			['<td>K</td><td>@</td>', '<td>N</td><td>@</td>', '<td>U</td><td>@</td>', '<td>P</td><td>@</td>', '<td>B</td><td>@</td>', '<td>Q</td><td>@</td>']	
		],
		[
			['<td>F</td><td>@</td>', '<td>U</td><td>@</td>', '<td>X</td><td>@</td>', '<td>A</td><td>@</td>', '<td>R</td><td>@</td>', '<td>K</td><td>@</td>', '<td>G</td><td>@</td>', '<td>W</td><td>@</td>'],
			['<td>H</td><td>@</td>', '<td>N</td><td>@</td>', '<td>I</td><td>@</td>', '<td>J</td><td>@</td>', '<td>Y</td><td>@</td>', '<td>P</td><td>@</td>', '<td>Z</td><td>@</td>', '<td>S</td><td>@</td>'],
			['<td>T</td><td>@</td>', '<td>B</td><td>@</td>', '<td>E</td><td>@</td>', '<td>M</td><td>@</td>', '<td>L</td><td>@</td>', '<td>Q</td><td>@</td>', '<td>O</td><td>@</td>', '<td>D</td><td>@</td>']
		],
		[
			['<td>F</td><td>@</td>', '<td>U</td><td>@</td>', '<td>X</td><td>@</td>', '<td>A</td><td>@</td>', '<td>R</td><td>@</td>', '<td>K</td><td>@</td>', '<td>G</td><td>@</td>', '<td>W</td><td>@</td>'],
			['<td>H</td><td>@</td>', '<td>N</td><td>@</td>', '<td>I</td><td>@</td>', '<td>J</td><td>@</td>', '<td>Y</td><td>@</td>', '<td>P</td><td>@</td>', '<td>Z</td><td>@</td>', '<td>S</td><td>@</td>'],
			['<td>T</td><td>@</td>', '<td>B</td><td>@</td>', '<td>E</td><td>@</td>', '<td>M</td><td>@</td>', '<td>L</td><td>@</td>', '<td>Q</td><td>@</td>', '<td>O</td><td>@</td>', '<td>D</td><td>@</td>']	
		]
	];		
	if(!Runic.tableTest) Runic.tableTest = 1;
	if(!Runic.columnTest) Runic.columnTest = 1;
	if(!Runic.tableName) Runic.tableName = '';
	zzruna = [];
	Runic.nullruna = [];
	Runic.nextSelect = true;
	Runic.nnn = 2;
	Runic.test = '';
	Runic.test_one_workId = 1;
	Runic.test_plus_workId = 1;	
	Runic.test_minus_workId = 1;	
	Runic.runa = '';
	Runic.workTableName = '';
	Runic.workTableNullName = '';
	Runic.workTableOneName = '';
	Runic.workTablePlusName = '';	
	Runic.workTableMinusName = '';	
	Runic.cookie = {
		setCookie: function(name, value, options) {
			options = options || {};
			var expires = options.expires;
			if (typeof expires == "number" && expires) {
				var d = new Date();
				d.setTime(d.getTime() + expires * 1000);
				expires = options.expires = d;
			}
			if (expires && expires.toUTCString) {
				options.expires = expires.toUTCString();
			}
			value = encodeURIComponent(value);
			var updatedCookie = name + "=" + value;
			for (var propName in options) {
				updatedCookie += "; " + propName;
				var propValue = options[propName];
				if (propValue !== true) {
					updatedCookie += "=" + propValue;
				}
			}
			document.cookie = updatedCookie;
		},
		getCookie: function(name) {
			var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
			return matches ? decodeURIComponent(matches[1]) : undefined;
		},
		deleteCookie: function(name) {
			document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	},
	Runic.changeUserLang = function(language) {
	    var db = Runic.db;
		db.transaction(function(tx) {
			tx.executeSql('UPDATE users SET lang = ? WHERE login = ? ', [ language, Runic.cookie.getCookie('login') ], function(){}, function(tx, error) {console.log(error);});
		});
		Runic.cookie.setCookie("lang", language);
		Runic.changeLang(language);
	},		
	Runic.changeLang = function(language) {
		if(!language) language = 'ru';	
		$.getJSON( "lang/"+language+".json", function( data ) {
			var items = [];
			$.each( data, function( key, val ) {
				$("." + key).html(val);
			});
		});		
	},
	Runic.openDB = function(){
		Runic.db = openDatabase("runic","1.0","RUNIC DB",1024*1024*5); // название БД, версия, описание, размер
	    Runic.db.transaction(function(tx){
	     	tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY ASC, login TEXT, password TEXT, fio TEXT, bdate TEXT, town TEXT, work_table TEXT, work_table_null TEXT, work_table_one TEXT, work_table_plus TEXT, work_table_minus TEXT, lang TEXT)',[], function(tx, results){}, function(tx, error) {console.log(error);});
			tx.executeSql('CREATE TABLE IF NOT EXISTS login (id INTEGER PRIMARY KEY ASC, login TEXT, date_login TEXT, date_login_last TEXT)',[], function(tx, results){}, function(tx, error) {console.log(error);});
	    });
	},
	Runic.removeSelectDiv = function(id) {
		$('#'+id).remove(); 		
	},
	Runic.getLogin = function(form) {
		var l = $(form).find('#inputLogin').val();
		var p = $(form).find('#inputPassword').val();
		if(l != '') {
			var db = Runic.db;		
			db.transaction(function (tx) {
				tx.executeSql('SELECT * FROM users WHERE login = ? AND password = ? ', [l, p], function (tx, results) {
					if(results.rows.length > 0) {
						Runic.cookie.setCookie("login", l);
						Runic.cookie.setCookie("lang", results.rows.item(0).lang);
						insertLogin(l, new Date().toString());
						$('#form_login').hide();
						$('#menu2').show();						
						$('#menu3').show();
						$('#menu44').show();
						$('#menu45').show();												
						getWorkTable(Runic.cookie.getCookie('login'));
						getUserName('user_name');
						getLastLogin('user_last_login');
						getTestSuccess('table_user_result');
						$('#user_info').show(function(){
							$("#table_user_result").bootgrid({
								navigation: 2,
								formatters: {
									"link": function(column, row)
									{
										if(row.link != '') return "<a href=\""+row.link+"\">Показать результаты</a>";
										return '';
									}
				    			}					    						
							});						
						});
				    	var f = $('#loginIframe');
				    	f.contents().find('input[name=username]').val(l);    
				    	f.contents().find('input[name=password]').val(p);
				    	f.contents().find('form').submit();												
					} else {
						Runic.cookie.deleteCookie('login');
						Runic.cookie.deleteCookie('lang');
						alert('Не верный логин или пароль!');
					}
				}, function(tx, error) {console.log(error);});
			});			
		}
	},
	Runic.changeLocation = function(loc) {
		var t = $('#beginTest');
		if($('#beginTest').is(':visible')) {
			if(loc == 'lang_menu1') {
				$('#runic-btn-location').attr('loc','/');
			} else if(loc == 'lang_menu21') {
				$('#runic-btn-location').attr('loc','/?page=full');
			} else if(loc == 'lang_menu22') {
				$('#runic-btn-location').attr('loc','/?page=runa');
			} else if(loc == 'lang_menu31') {
				$('#runic-btn-location').attr('loc','/?page=minus');
			} else if(loc == 'lang_menu32') {
				$('#runic-btn-location').attr('loc','/?page=plus');
			} else if(loc == 'lang_menu41') {
				$('#runic-btn-location').attr('loc','/?page=desc_full');
			} else if(loc == 'lang_menu42') {
				$('#runic-btn-location').attr('loc','/?page=desc_test');
			} else if(loc == 'lang_menu43') {
				$('#runic-btn-location').attr('loc','/?page=desc_instr');
			} else if(loc == 'lang_menu6') {
				$('#runic-btn-location').attr('loc','/?page=my');
			}
			$('#questionExit').modal();
		} else {
			if(loc == 'lang_menu1') {
				location.href = '/';
			} else if(loc == 'lang_menu21') {
				location.href = '/?page=full';
			} else if(loc == 'lang_menu22') {
				location.href = '/?page=runa';
			} else if(loc == 'lang_menu31') {
				location.href = '/?page=minus';
			} else if(loc == 'lang_menu32') {
				location.href = '/?page=plus';
			} else if(loc == 'lang_menu41') {
				location.href = '/?page=desc_full';
			} else if(loc == 'lang_menu42') {
				location.href = '/?page=desc_test';
			} else if(loc == 'lang_menu43') {
				location.href = '/?page=desc_instr';
			} else if(loc == 'lang_menu6') {
				location.href = '/?page=my';
			}			
		}
	},
	Runic.jump = function(bt) {
		location.href = $(bt).attr('loc');
	}	
	
	Runic.openDB();		
}

function getSelectRune() {
	var db = Runic.db;
	var r = Runic.runes[Runic.columnTest-1];
	var login = Runic.cookie.getCookie('login');
	if(Runic.tableTest == 1) { var sel = $('input[type=\'radio\'][name=\''+r+'\']:checked')[0]; }
		else { var sel = $('input[type=\'radio\'][name=\''+r+(Runic.tableTest - 1)+'\']:checked')[0]; }
	if(!sel) sel = 'null'; else sel = sel.value;
	var runa = Runic.runes[Runic.columnTest-1].charAt(0).toUpperCase() + Runic.runes[Runic.columnTest-1].substr(1).toLowerCase();
	if(sel != 'null') {
		for(var j=1; j<9; j++){
			if((runa + '_' + j) == sel) sel = sel + '#' + (j-1);
		}
	} else {
		if(Runic.test == 'full') {
			
			_fullTest();	// Не выбрана руна в полном тесте - фиксируем в базе пропуск								
			
		} else if(Runic.test == 'one') {
			
			_oneTest();     // Не выбрана руна в тесте по одной руне - фиксируем в базе пропуск

		}
		sel = sel + '#8';
		Runic.nullruna.push(Runic.columnTest);
	}
				
	function _fullTest() {
		db.transaction(function(tx) {
			tx.executeSql('SELECT * FROM ' + Runic.workTableNullName + ' WHERE id = ? ', [ Runic.tableTest ], function(tx, results) {
				var c = results.rows.item(0);
				var res = c[Runic.runes[Runic.columnTest-1]];	
				if(res === null) { var val = '1#8'; }
				else { 
					var num = res.substr(0, res.indexOf('#'));
					var val = ((num*1)+1)+'#8'; 
				}
				tx.executeSql('UPDATE ' + Runic.workTableNullName + ' SET ' + r + ' = ? WHERE id = ? ', [ val, Runic.tableTest ], function(){}, function(tx, error) {console.log(error);});
			});
		});			
	};
	
	function _oneTest() {
		db.transaction(function(tx) {
			tx.executeSql('SELECT * FROM ' + Runic.workTableOneName + ' WHERE id = ? ', [ Runic.test_one_workId ], function(tx, results) {
				var c = results.rows.item(0);
				var col = 'table' + Runic.tableTest + '_null';
				var res = c[col];
				if(res === null) { var val = '1#8'; }
				else { 
					var num = res.substr(0, res.indexOf('#'));
					var val = ((num*1)+1)+'#8'; 
				}				
				tx.executeSql('UPDATE ' + Runic.workTableOneName + ' SET ' + col + ' = ? WHERE id = ? ', [ val, Runic.test_one_workId ], function(){}, function(tx, error) {console.log(error);});				
			}, function(tx, error) {console.log(error);});
		});		
	};	
	
	return sel;
}

// Устанавливаем выбранное значение в базу
function updateDB() {

	var db = Runic.db;	
	var selRuna = getSelectRune();	

	db.transaction(function(tx) {	
		if(Runic.test=='full') {
			tx.executeSql('UPDATE ' + Runic.workTableName + ' SET ' + Runic.runes[Runic.columnTest-1] + ' = ? WHERE id = ? ', [ selRuna, Runic.tableTest ], function(tx, results){}, function(tx, error) {console.log(error);});
		} else if(Runic.test=='one') {
			var col = 'table' + Runic.tableTest;
			tx.executeSql('UPDATE ' + Runic.workTableOneName + ' SET ' + col + ' = ? WHERE id = ? ', [ selRuna, Runic.test_one_workId ], function(tx, results) {}, function(tx, error) {console.log(error);});					
		}	
	});		
}

function drawNextRune(next) {
	
	addDivColumn();
	var runa = Runic.runes[Runic.columnTest-1].charAt(0).toUpperCase() + Runic.runes[Runic.columnTest-1].substr(1).toLowerCase();
	addRunaColumn(Runic.runes[Runic.columnTest-1] + "_" + Runic.tableTest + "_" + Runic.columnTest, Runic.runes[Runic.columnTest-1], runa+'_');
	$("#table_" + Runic.tableTest + " #"+Runic.runes[Runic.columnTest - 1] + "_" + Runic.tableTest + "_" + Runic.columnTest ).fadeIn(Runic.speed, function(){
		$('#table_' + Runic.tableTest + ' button[name="next"]').prop('disabled', false);
		if(next) Runic.nextSelect = true;
			else Runic.nextSelect = false;
		$('#table_' + Runic.tableTest).effect('drop', {direction: 'right', mode: 'show'}, Runic.speed, function() {});			
	}); 

}

function nextRUNA(rn) {

	var db = Runic.db;	
	updateDB();

	$('#table_' + Runic.tableTest + ' button[name="next"]').prop('disabled', true);	
	if((Runic.columnTest + 1) <= 24 && Runic.nextSelect) { 	
		$('#table_' + Runic.tableTest + ' #'+Runic.runes[Runic.columnTest-1]+'_'+Runic.tableTest+'_' + Runic.columnTest ).fadeOut(Runic.speed, function() {
			Runic.removeSelectDiv(Runic.runes[Runic.columnTest-1]+'_'+Runic.tableTest+'_' + Runic.columnTest);		
			Runic.columnTest += 1;					
			drawNextRune(true);
		});
	} else {
		// Проверка на невыбранные руны		
		if(Runic.nullruna.length > 0) {
			$('#table_' + Runic.tableTest + ' #'+Runic.runes[Runic.columnTest-1]+'_'+Runic.tableTest+'_' + Runic.columnTest ).fadeOut(Runic.speed, function() {
				Runic.removeSelectDiv(Runic.runes[Runic.columnTest-1]+'_'+Runic.tableTest+'_' + Runic.columnTest);
				if(Runic.test=='full') Runic.columnTest = Runic.nullruna[0];
				Runic.nullruna.splice(0, 1);
				drawNextRune(false);		
				return;
			});			
			return;
		}
		// Переход на новую таблицу
		if((Runic.tableTest + 1) <= 13) {
			$('#table_' + Runic.tableTest).effect('drop', {direction: 'left', mode: 'hide'}, Runic.speed, function() {								
				if(Runic.test=='full') {
					db.transaction(function(tx) {
						Runic.removeSelectDiv('table_'+Runic.tableTest);
						Runic.columnTest = 1;
						Runic.tableTest += 1;
						// Тест завершен и устанавливаем новые данные
						if(Runic.tableTest == 13) {
							var login = Runic.cookie.getCookie('login');
							var table = Runic.workTableName;
							var num = table.substr(table.indexOf('full_')+5);
							num = (num*1)+1;
							createWorkTable(login, num);
							tx.executeSql('UPDATE '+ Runic.workTableName +' SET success = ? WHERE id = 1 ', [ 'yes' ], function(){}, function(tx, error) {console.log(error);});
							tx.executeSql('UPDATE '+ Runic.workTableNullName +' SET success = ? WHERE id = 1 ', [ 'yes' ], function(){}, function(tx, error) {console.log(error);});
							tx.executeSql('UPDATE users SET work_table = ?, work_table_null = ? WHERE login = ? ', [ login + '_full_' + num, login + '_full_null_' + num, login ], function(){}, function(tx, error) {console.log(error);});
							$('#table_' + Runic.tableTest).effect('drop', {direction: 'right', mode: 'show'}, Runic.speed);
							return;
						}
						tx.executeSql('INSERT INTO ' + Runic.workTableName + ' (fehu) VALUES (?) ', [ '+' ]);
						tx.executeSql('INSERT INTO ' + Runic.workTableNullName + ' (fehu) VALUES (?) ', [ '+' ]);
						addTable();
						drawNextRune(true);							
					});
				} else if(Runic.test=='one') {
					db.transaction(function(tx) {
						Runic.removeSelectDiv('table_'+Runic.tableTest);
						Runic.tableTest += 1;
						if(Runic.tableTest == 13) {							
							db.transaction(function(tx) {
								tx.executeSql('UPDATE '+ Runic.workTableOneName +' SET success = ? WHERE id = ? ', [ 'yes', Runic.test_one_workId ], function(){}, function(tx, error) {console.log(error);});
								tx.executeSql('UPDATE users SET work_table_one = ? WHERE login = ? ', [ ((Runic.test_one_workId * 1) + 1)+'', Runic.cookie.getCookie('login') ], function(){}, function(tx, error) {console.log(error);});
								tx.executeSql('INSERT INTO ' + Runic.workTableOneName + ' (date_test) VALUES (?)', ['create'], function(tx, results) {}, function(tx, error) {console.log(error)});									
							});
							$('#table_' + Runic.tableTest).effect('drop', {direction: 'right', mode: 'show'}, Runic.speed);
							return;
						}
						addTable();
						drawNextRune(false);
					});						
				}					
			});
		}
	}	
}

function prevRUNA() {
	if(Runic.test=='full') {
		$('#table_' + Runic.tableTest + ' button[name="prev"]').prop('disabled', true);	
		if((Runic.columnTest - 1) >= 1) {
			$("#table_" + Runic.tableTest + " #" + Runic.runes[Runic.columnTest - 1] + "_" + Runic.tableTest + "_" + Runic.columnTest ).fadeOut(Runic.speed, function() { 
				Runic.removeSelectDiv(Runic.runes[Runic.columnTest-1]+'_'+Runic.tableTest+'_' + Runic.columnTest);
				Runic.columnTest -= 1;			

				drawNextRune(true);

			});
		} else {
			$('#table_' + Runic.tableTest + ' button[name="prev"]').prop('disabled', false);
		}
	}
}

function prevRUNA_PM() { 
	
}

function getSelectRune_PM() {
	var db = Runic.db;
	var r = Runic.correct[Runic.tableTest-1][Runic.columnTest-1];
	var login = Runic.cookie.getCookie('login');
	var sel = $('input[type=\'radio\'][name=\''+r+'\']:checked')[0].value;
	return sel;
}

function updateDB_PM() {

	var db = Runic.db;	
	var selRuna = getSelectRune_PM();	
	
	db.transaction(function(tx) {	
		if(Runic.test=='plus') {
			tx.executeSql('UPDATE ' + Runic.workTablePlusName + ' SET ' + Runic.correct[Runic.tableTest-1][Runic.columnTest-1] + ' = ? WHERE id = ? ', [ selRuna, Runic.test_plus_workId], function(tx, results){}, function(tx, error) {console.log(error);});
		} else if(Runic.test=='minus') {
			tx.executeSql('UPDATE ' + Runic.workTableMinusName + ' SET ' + Runic.correct[Runic.tableTest-1][Runic.columnTest-1] + ' = ? WHERE id = ? ', [ selRuna, Runic.test_minus_workId ], function(tx, results) {}, function(tx, error) {console.log(error);});					
		}	
	});		
	
}

function nextRUNA_PM() {
	
	var db = Runic.db;	
	updateDB_PM();	
	
	if(Runic.columnTest < Runic.correct[Runic.tableTest-1].length) {
		$('#table_' + Runic.tableTest + ' button[name="next"]').prop('disabled', true);	
		$('#table_' + Runic.tableTest + ' #correct_' + Runic.correct[Runic.tableTest-1][Runic.columnTest-1]).fadeOut(Runic.speed, function(a,b,c,d,e) {
			Runic.removeSelectDiv('correct_'+Runic.correct[Runic.tableTest-1][Runic.columnTest-1]);
			Runic.columnTest += 1;					
			drawNextRunePM();				
		});	
	} else {
		$('#table_' + Runic.tableTest).effect('drop', {direction: 'left', mode: 'hide'}, Runic.speed, function() {
			Runic.removeSelectDiv('table_'+Runic.tableTest);
			Runic.columnTest = 1;
			Runic.tableTest += 1;
			if(Runic.tableTest == 7) {
				if(Runic.test=='plus') {
					var table = Runic.workTablePlusName;
					var col = 'work_table_plus';
					var id = Runic.test_plus_workId;
				} else if(Runic.test=='minus') {
					var table = Runic.workTableMinusName;
					var col = 'work_table_minus';					
					var id = Runic.test_minus_workId;
				}		
				$('#table_' + Runic.tableTest).effect('drop', {direction: 'right', mode: 'show'}, Runic.speed);
					db.transaction(function(tx) {
						tx.executeSql('UPDATE '+ table +' SET success = ?, runa = ? WHERE id = ? ', [ 'yes', Runic.runa, id ], function(){}, function(tx, error) {console.log(error);});
						tx.executeSql('UPDATE users SET ' + col + ' = ? WHERE login = ? ', [ ((id * 1) + 1)+'', Runic.cookie.getCookie('login') ], function(){}, function(tx, error) {console.log(error);});
						tx.executeSql('INSERT INTO ' + table + ' (date_test) VALUES (?)', ['create'], function(tx, results) {}, function(tx, error) {console.log(error)});									
					});				
				return;				
			}
			addTablePM();
			drawNextRunePM();
		});	
	}
}

function drawNextRunePM() {
	addDivColumnPM();
	addRunaColumnPM(Runic.correct[Runic.tableTest-1][Runic.columnTest-1]);
	$("#table_" + Runic.tableTest + " #correct_"+Runic.correct[Runic.tableTest-1][Runic.columnTest-1]).fadeIn(Runic.speed, function(){
		$('#table_' + Runic.tableTest).effect('drop', {direction: 'right', mode: 'show'}, Runic.speed, function() {});			
	}); 
}

function reg() {
	$('#form_login').hide();
	$('#user_reg').show();	
}

// При выборе руны - показываем див с галкой 
function selectRuna(btn, num, r) {
	if(!r) r = 'runa';
	for(var i=1; i<9; i++) {
		$('#'+r+'_'+i).hide();
	}
	if(btn.checked) $('#'+r+'_'+num).show();
		else $('#'+r+'_'+num).hide();
}

// При выборе руны - показываем див с галкой 
function selectRunaPM(btn, num, r) {
	if(!r) r = 'runa';
	for(var i=1; i<Runic.correctRuna[Runic.tableTest-1][Runic.columnTest-1].length+1; i++) {
		$('#'+r+'_pm_'+Runic.tableTest+'_'+i).hide();
	}
	if(btn.checked) $('#'+r+'_pm_'+Runic.tableTest+'_'+num).show();
		else $('#'+r+'_pm_'+Runic.tableTest+'_'+num).hide();
	$('#table_' + Runic.tableTest + ' button[name="next"]').prop('disabled', false);		
}


// Формируем начальное отображение первой руны
function addOneRune() {
	$('#startText').hide();
	addTable();
	addDivColumn();
	var runa = Runic.runes[Runic.columnTest-1].charAt(0).toUpperCase() + Runic.runes[Runic.columnTest-1].substr(1).toLowerCase();
	addRunaColumn(Runic.runes[Runic.columnTest-1] + "_" + Runic.tableTest + "_" + Runic.columnTest, Runic.runes[Runic.columnTest-1], runa+'_');
	$('#beginTest').show();
	$("#table_" + Runic.tableTest + " #"+Runic.runes[Runic.columnTest-1] + "_" + Runic.tableTest + "_" + Runic.columnTest ).fadeIn(Runic.speed, function(){
		$('#table_' + Runic.tableTest).effect('drop', {direction: 'right', mode: 'show'}, Runic.speed, function() {});
	});
	if(Runic.test == 'one') Runic.nextSelect = false;		
}

// Стартовая функция для полного теста и для по одной руне
function startTest(runa) {
	$('#runic-nav').hide();	
	var db = Runic.db;
	Runic.runa = runa;
	if(runa) {
		Runic.test = 'one';
		Runic.columnTest = Runic.runes.indexOf(runa) + 1;	
		var dt = new Date();
		db.transaction(function(tx) {
			tx.executeSql('UPDATE ' + Runic.workTableOneName + ' SET date_test = ?, success = null, table1 = null, table2 = null, table3 = null, table4 = null, table5 = null, table6 = null, table7 = null, table8 = null, table9 = null, table10 = null, table11 = null, table12 = null, table1_null = null, table2_null = null, table3_null = null, table4_null = null, table5_null = null, table6_null = null, table7_null = null, table8_null = null, table9_null = null, table10_null = null, table11_null = null, table12_null = null WHERE id = ? ', [dt, Runic.test_one_workId], function(tx, results) {
				addOneRune();
			}, function(tx, error) {
				console.log(error);
			});
		});				
	} else {
		Runic.test = 'full'
		db.transaction(function(tx) {
			tx.executeSql('DELETE FROM ' + Runic.workTableName, [], function(tx, results) {
				tx.executeSql('DELETE FROM ' + Runic.workTableNullName, [], function(tx, results) {});
				var dt = new Date();
				tx.executeSql('INSERT INTO ' + Runic.workTableName + ' (date_test) VALUES (?)', [dt], function(tx, results) {
					tx.executeSql('INSERT INTO ' + Runic.workTableNullName + ' (date_test) VALUES (?)', [dt], function(tx, results) {
						addOneRune();
					});
				});
			});
		});			
	}
}

function startTestPM(runa, test) {
	$('#runic-nav').hide();	
	Runic.runa = runa;
	Runic.test = test;
	$('#startText').hide();
	var db = Runic.db;
	
	if(Runic.test == 'plus') {
		var table = Runic.workTablePlusName;
		var id = Runic.test_plus_workId;
	} else if(Runic.test == 'minus') {
		var table = Runic.workTableMinusName;
		var id = Runic.test_minus_workId;
	}	

	var dt = new Date();
	db.transaction(function(tx) {
		tx.executeSql('UPDATE ' + table + ' SET date_test = ?, success = null, runa = null, asgard = null, alfheim = null, midgard = null, midgard2 = null, svartalfheim = null, hell = null, asgard1 = null, alfheim1 = null, midgard1 = null, midgard3 = null, svartalfheim1 = null, hell1 = null, nifelheim = null, jotunheim = null, muspelheim = null, vanaheim = null, nifelheim1 = null, jotunheim1 = null, muspelheim1 = null, vanaheim1 = null, att1_ = null, att2_ = null, att3_ = null, att1_1 = null, att2_1 = null, att3_1 = null WHERE id = ? ', [dt, id], function(tx, results) {
			addTablePM();
			addDivColumnPM();
			addRunaColumnPM(Runic.correct[Runic.tableTest-1][Runic.columnTest-1]);
			$('#beginTest').show();
			$("#table_"+Runic.tableTest+" #correct_"+Runic.correct[Runic.tableTest-1][Runic.columnTest-1]).fadeIn(Runic.speed, function(){
				$('#table_' + Runic.tableTest + ' button[name="next"]').prop('disabled', true);
				$('#table_'+Runic.tableTest).effect('drop', {direction: 'right', mode: 'show'}, Runic.speed, function() {});
			});									
		}, function(tx, error) {
			console.log(error);
		});
	});	

}

function addRunaColumnPM(idDiv) {
	var html = '';
	var word = '';
	var b = Runic.letters[Runic.runes.indexOf(Runic.runa.toLowerCase())];
	var len = Runic.correctRuna[Runic.tableTest-1][Runic.columnTest-1].length+1;
	for(var i=1; i<len; i++) {
		if(Runic.test=='plus') word = Runic.correctRunaLetterP[Runic.tableTest-1][Runic.columnTest-1][i-1];
			else word = Runic.correctRunaLetterM[Runic.tableTest-1][Runic.columnTest-1][i-1];
		word = word.replace('@', b);
		html += '<label class="btn btn-default runic_pm">';
		html += '<input type="radio" name="'+Runic.correct[Runic.tableTest-1][Runic.columnTest-1]+'" id="'+Runic.correct[Runic.tableTest-1][Runic.columnTest-1]+'" value="'+Runic.correctRuna[Runic.tableTest-1][Runic.columnTest-1][i-1]+'" autocomplete="off" onchange="selectRunaPM(this, \''+i+'\', \'runa\');"><table class="correct_runa"><tr>'+word+'</tr></table>';
		html += '</lable>';
		$('#correct_'+idDiv).append(html);
		html = '';
	}
	addSelectColumnPM(idDiv, len);		
}

// Добавляем див с отметкой о выбранной руне
function addSelectColumnPM(id, len) {
	for(var i=1; i<len; i++) { 
		$('#correct_'+id).append('<div id="runa_pm_'+Runic.tableTest+'_'+i+'"><img src="/img/tick.png"></div>');
	}	
}

// Добавляем колонку с руной для выбора
function addRunaColumn(idDiv, runa, value) {	
	var html = '';
	var css = '';
	var sel = '';
	if(Runic.tableTest>1) runa = runa+''+(Runic.tableTest-1);
	
	if(Runic.tableTest == 1 || Runic.tableTest == 2) { css = 't1'; sel = 'runa'; }
	if(Runic.tableTest == 3 || Runic.tableTest == 4) { css = 't2'; sel = 'runa'; }
	if(Runic.tableTest == 5 || Runic.tableTest == 6) { css = 't3'; sel = 'runa5'; }
	if(Runic.tableTest == 7 || Runic.tableTest == 8) { css = 't4'; sel = 'runa6'; }
	if(Runic.tableTest == 9 || Runic.tableTest == 10) { css = 't5'; sel = 'runa7'; }			
	if(Runic.tableTest == 11 || Runic.tableTest == 12) { css = 't6'; sel = 'runa8'; }	
			
	for(var i=1; i<9; i++) { 
		if(Runic.tableTest==7 || Runic.tableTest==8 || Runic.tableTest==11 || Runic.tableTest==12){
			html += '<label class="btn btn-default runic_'+css+'_1">';			
			html += '<table><tr><td>'
		} else {
			html += '<label class="btn btn-default runic_'+css+'_'+i+'">';
		}
		html += '<input type="radio" name="'+runa+'" id="'+runa+'" value="'+value+i+'" autocomplete="off" onchange="selectRuna(this, \''+i+'\', \''+sel+'\');">'+Runic.letters[Runic.columnTest-1];
		if(Runic.tableTest==7 || Runic.tableTest==8){
			html += '</td><td style="padding-left: 10px;"><img src="img/'+(i-1)+'.gif"></td></tr></table>';
		} else if(Runic.tableTest==11 || Runic.tableTest==12) {
			html += '</td><td style="padding-left: 10px;"><img src="img/'+(i-1)+'_1.gif"></td></tr></table>';			
		}
		html += '</label>';
	}		
	$('#'+idDiv).append(html);
	addSelectColumn(sel, Runic.runes[Runic.columnTest-1]+'_'+Runic.tableTest+'_'+Runic.columnTest);	
}

// Добавляем див с отметкой о выбранной руне
function addSelectColumn(rn, id) {
	for(var i=1; i<9; i++) { 
		$('#'+id).append('<div id="'+rn+'_'+i+'"><img src="/img/tick.png"></div>');
	}	
}

function addTable() {
	var html = '';
	var runa = 'runa';
	if(Runic.tableTest == 1 || Runic.tableTest == 3 || Runic.tableTest == 5 || Runic.tableTest == 7 || Runic.tableTest == 9 || Runic.tableTest == 11) var txt = 'Закройте левый глаз левой рукой, возьмите мышку в правую руку';
		else var txt = 'Закройте правый глаз правой рукой, возьмите мышку в левую руку';

	if(Runic.tableTest==4 || Runic.tableTest==5) runa = 'runa5';
	if(Runic.tableTest==6 || Runic.tableTest==7) runa = 'runa6';	
	if(Runic.tableTest==8 || Runic.tableTest==9) runa = 'runa7';		
	if(Runic.tableTest==10 || Runic.tableTest==11) runa = 'runa8';		
	html += '<div class="panel panel-default" id="table_'+Runic.tableTest+'" style="display: none;"><div class="panel-heading" align="center"><b>'+txt+'</b></div><div class="panel-body"><table width="100%"><tr><td width="100" valign="middle">&nbsp;</td><td align="center" id="body-runic-panel"></td><td width="100" valign="middle"><button name="next" type="button" class="btn btn-default" aria-label="Left Align" onclick="nextRUNA(\''+runa+'\');"><b>Вперед</b>&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></button></td></tr></table></div></div>';	

// <button name="prev" type="button" class="btn btn-default" aria-label="Left Align" onclick="prevRUNA();"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>&nbsp;&nbsp;<b>Назад</b></button>

	$('#runic-test-full').append(html);
}

function addTablePM() {
	var html = '';
	if(Runic.tableTest == 1 || Runic.tableTest == 3 || Runic.tableTest == 5) var txt = 'Закройте левый глаз левой рукой, возьмите мышку в правую руку';
		else var txt = 'Закройте правый глаз правой рукой, возьмите мышку в левую руку';

	html += '<div class="panel panel-default" id="table_'+Runic.tableTest+'" style="display: none;"><div class="panel-heading" align="center"><b>'+txt+'</b></div><div class="panel-body"><table width="100%"><tr><td width="100" valign="middle">&nbsp;</td><td align="center" id="body-runic-panel"></td><td width="100" valign="middle"><button name="next" type="button" class="btn btn-default" aria-label="Left Align" onclick="nextRUNA_PM();"><b>Вперед</b>&nbsp;&nbsp;<span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span></button></td></tr></table></div></div>';	

// <button name="prev" type="button" class="btn btn-default" aria-label="Left Align" onclick="prevRUNA_PM();"><span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>&nbsp;&nbsp;<b>Назад</b></button>

	$('#runic-test-full').append(html);
}

function addDivColumn() {
	var html = '';
	html += '<div class="btn-group-vertical" data-toggle="buttons" aria-label="runic" id="'+Runic.runes[Runic.columnTest-1]+'_'+Runic.tableTest+'_'+Runic.columnTest+'" style="display: none;"></div>';
	$('#body-runic-panel').append(html);
}

function addDivColumnPM() {
	var html = '';
	html += '<div class="btn-group-vertical" data-toggle="buttons" aria-label="runic" id="correct_'+Runic.correct[Runic.tableTest-1][Runic.columnTest-1]+'" style="display: none;"></div>';
	$('#body-runic-panel').append(html);
}

// Пользователь вошел - обновляем данные входа
function insertLogin(login, dt) {
	var db = Runic.db;
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM login WHERE login = \'' + login + '\'', [], function(tx, results) {
			if(results.rows.length == 1) {
				var last = results.rows.item(0).date_login;
				tx.executeSql('UPDATE login SET date_login = ?, date_login_last = ? WHERE login = ?', [ dt, last, login ], function(tx, results) {createWorkTable(login, 1);}, function(tx, error) {console.log(error)});
			} else {
				tx.executeSql('INSERT INTO login (login, date_login, date_login_last) VALUES (?, ?, ?)', [login, dt, dt], function(tx, results) {createWorkTable(login, 1);}, function(tx, error) {console.log(error)});
			}
		});
	});
}

// ФИО пользователя для ЛК
function getUserName(id) {
	var db = Runic.db;
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM users WHERE login = \'' + Runic.cookie.getCookie('login') + '\'', [], function(tx, results) {
			$('#'+id).html(results.rows.item(0).fio.toUpperCase());
		});
	});	
}

// Получаем рабочие таблицы пользователя
function getWorkTable(login) {
	var db = Runic.db;
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM users WHERE login = ? ', [ login ], function(tx, results) {
			Runic.workTableName = results.rows.item(0).work_table;
			Runic.workTableNullName = results.rows.item(0).work_table_null;
			Runic.workTablePlusName = Runic.cookie.getCookie('login') + '_plus';
			Runic.workTableMinusName = Runic.cookie.getCookie('login') + '_minus';
 			Runic.workTableOneName = Runic.cookie.getCookie('login') + '_one';
			Runic.test_one_workId = (results.rows.item(0).work_table_one * 1);						
			Runic.test_plus_workId = (results.rows.item(0).work_table_plus * 1);						
			Runic.test_minus_workId = (results.rows.item(0).work_table_minus * 1);												
		});
	});	
}

// Создание начальных таблиц при регистрации пользователя или пересоздание если стерты
function createWorkTable(login, num) {
	var db = Runic.db;
	var login = Runic.cookie.getCookie('login');
	db.transaction(function(tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS ' + login + '_full_' + num + ' (id INTEGER PRIMARY KEY ASC, date_test TEXT, success TEXT, fehu TEXT, uruz TEXT, thurisaz TEXT, ansuz TEXT, raidho TEXT, kenaz TEXT, gebo TEXT, wunjo TEXT, hagalaz TEXT, nauthiz TEXT, isa TEXT, jera TEXT, eihwaz TEXT, perthro TEXT, algiz TEXT, sowilo TEXT, tiwaz TEXT, berkano TEXT, ehwaz TEXT, mannaz TEXT, laguz TEXT, ingwaz TEXT, othala TEXT, dagaz TEXT)', [], function(tx, results) {console.log(results);}, function(tx, error) {console.log(error);});

		tx.executeSql('CREATE TABLE IF NOT EXISTS ' + login + '_full_null_' + num + ' (id INTEGER PRIMARY KEY ASC, date_test TEXT, success TEXT, fehu TEXT, uruz TEXT, thurisaz TEXT, ansuz TEXT, raidho TEXT, kenaz TEXT, gebo TEXT, wunjo TEXT, hagalaz TEXT, nauthiz TEXT, isa TEXT, jera TEXT, eihwaz TEXT, perthro TEXT, algiz TEXT, sowilo TEXT, tiwaz TEXT, berkano TEXT, ehwaz TEXT, mannaz TEXT, laguz TEXT, ingwaz TEXT, othala TEXT, dagaz TEXT)', [], function(tx, results) {console.log(results);}, function(tx, error) {console.log(error);});

		tx.executeSql('CREATE TABLE IF NOT EXISTS ' + login + '_one (id INTEGER PRIMARY KEY ASC, date_test TEXT, success TEXT, table1 TEXT, table2 TEXT, table3 TEXT, table4 TEXT, table5 TEXT, table6 TEXT, table7 TEXT, table8 TEXT, table9 TEXT, table10 TEXT, table11 TEXT, table12 TEXT, table1_null TEXT, table2_null TEXT, table3_null TEXT, table4_null TEXT, table5_null TEXT, table6_null TEXT, table7_null TEXT, table8_null TEXT, table9_null TEXT, table10_null TEXT, table11_null TEXT, table12_null TEXT)', [], function(tx, results) {
			tx.executeSql('SELECT * FROM ' + login + '_one ', [], function(tx, results) {
				if(results.rows.length == 0) tx.executeSql('INSERT INTO ' + login + '_one (date_test) VALUES (?)', ['create'], function(tx, results) {console.log(results);}, function(tx, error) {console.log(error)});
			});
		}, function(tx, error) {console.log(error);});
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS ' + login + '_plus (id INTEGER PRIMARY KEY ASC, date_test TEXT, success TEXT, runa TEXT, asgard TEXT, alfheim TEXT, midgard TEXT, midgard2 TEXT, svartalfheim TEXT, hell TEXT, asgard1 TEXT, alfheim1 TEXT, midgard1 TEXT, midgard3 TEXT, svartalfheim1 TEXT, hell1 TEXT, nifelheim TEXT, jotunheim TEXT, muspelheim TEXT, vanaheim TEXT, nifelheim1 TEXT, jotunheim1 TEXT, muspelheim1 TEXT, vanaheim1 TEXT, att1_ TEXT, att2_ TEXT, att3_ TEXT, att1_1 TEXT, att2_1 TEXT, att3_1 TEXT)', [], function(tx, results) {
			tx.executeSql('SELECT * FROM ' + login + '_plus ', [], function(tx, results) {
				if(results.rows.length == 0) tx.executeSql('INSERT INTO ' + login + '_plus (date_test) VALUES (?)', ['create'], function(tx, results) {console.log(results);}, function(tx, error) {console.log(error)});
			});	
		}, function(tx, error) {console.log(error);});	
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS ' + login + '_minus (id INTEGER PRIMARY KEY ASC, date_test TEXT, success TEXT, runa TEXT, asgard TEXT, alfheim TEXT, midgard TEXT, midgard2 TEXT, svartalfheim TEXT, hell TEXT, asgard1 TEXT, alfheim1 TEXT, midgard1 TEXT, midgard3 TEXT, svartalfheim1 TEXT, hell1 TEXT, nifelheim TEXT, jotunheim TEXT, muspelheim TEXT, vanaheim TEXT, nifelheim1 TEXT, jotunheim1 TEXT, muspelheim1 TEXT, vanaheim1 TEXT, att1_ TEXT, att2_ TEXT, att3_ TEXT, att1_1 TEXT, att2_1 TEXT, att3_1 TEXT)', [], function(tx, results) {
			tx.executeSql('SELECT * FROM ' + login + '_minus ', [], function(tx, results) {
				if(results.rows.length == 0) tx.executeSql('INSERT INTO ' + login + '_minus (date_test) VALUES (?)', ['create'], function(tx, results) {console.log(results);}, function(tx, error) {console.log(error)});
			});	
		}, function(tx, error) {console.log(error);});						
	});				
		
}

function genReport(table, table_null, id) {
	$('#runic-nav').show();
	var db = Runic.db;
	if(!table && !table_null) {
		var table = Runic.workTableName;
		var table_null = Runic.workTableNullName;		
	}
	if(id) $('#'+id).hide();
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM ' + table + ' ', [], function(tx, results) {
			tx.executeSql('SELECT * FROM ' + table_null + ' ', [], function(tx, results_null) {
				var len = results.rows.length;
				for(var j=0; j<24; j++) {
					for(var i=0; i<12; i++) {
						if(len >= i+1) {
							var c = results.rows.item(i);
							var r = c[Runic.runes[j]];
							if(r) r = r;
								else r = 'null#8';
							if(i==0) zzruna['zz'+Runic.runes[j]] = r.substr(r.indexOf('#')+1) * 1;
								else zzruna['zz'+Runic.runes[j]+i] = r.substr(r.indexOf('#')+1) * 1;
								
							c = results_null.rows.item(i);
							r = c[Runic.runes[j]];
							if(r) r = r.substr(0, r.indexOf('#'));
								else r = '';
							if(i==0) Runic.nullruna[Runic.runes[j]] = r;
								else Runic.nullruna[Runic.runes[j]+i] = r;								
						} else {
							var r = 'null#8';
							if(i==0) zzruna['zz'+Runic.runes[j]] = r.substr(r.indexOf('#')+1) * 1;
								else zzruna['zz'+Runic.runes[j]+i] = r.substr(r.indexOf('#')+1) * 1;
								
							if(i==0) Runic.nullruna[Runic.runes[j]] = '';
								else Runic.nullruna[Runic.runes[j]+i] = '';																
						}
					}
				}
				var div = $('#containerResultTest');
				var html = '';
				
				for(var i=0; i<Runic.runes.length; i++) {
					html += window['table_'+Runic.runes[i]](); 
				}

				html += table_table();	
				html += table_table_null();
	
				div.append('<div class="panel panel-default"><div class="panel-heading"><b>РЕЗУЛЬТАТЫ ТЕСТА</b></div><div class="panel-body" id="panel-body-result">' + html + '</div></div>');
	
				$('#beginTest').hide();
				$('#table_13').hide();
			
				$('#containerResultTest').show();
				$('#genWordResult').show();			
			});
		});
	});	

}

function genReportOne(table, num, id, runa) {
	$('#runic-nav').show();
	var db = Runic.db;
	if(!table) table = Runic.workTableOneName;
	if(!num) num = Runic.test_one_workId;
	if(!runa) runa = Runic.runa;
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM ' + table + ' WHERE id = ? ', [ (num * 1) ], function(tx, results) {
			var c = results.rows.item(0);
			for(var i=0; i<12; i++) {
				var r = c['table'+(i+1)];
				if(r) r = r;
					else r = 'null#8';				
				if(i==0) zzruna['zz'+runa] = r.substr(r.indexOf('#')+1) * 1;
					else zzruna['zz'+runa+i] = r.substr(r.indexOf('#')+1) * 1;				
			}
			for(var i=0; i<12; i++) {
				var r = c['table'+(i+1)+'_null'];
				if(r) r = r.substr(0, r.indexOf('#'));
					else r = '';				
				if(i==0) Runic.nullruna[runa] = r;
					else Runic.nullruna[runa+i] = r;				
			}	
			var div = $('#containerResultTest');
			var html = '';
			
			html += window['table_'+runa](); 

			html += table_table_one_null(Runic.runes.indexOf(runa));
			
			div.append('<div class="panel panel-default"><div class="panel-heading"><b>РЕЗУЛЬТАТЫ ТЕСТА</b></div><div class="panel-body" id="panel-body-result">' + html + '</div></div>');

			$('#beginTest').hide();
			$('#table_13').hide();
		
			$('#containerResultTest').show();
			$('#genWordResultOne').show();				
			
		}, function(tx, error) {console.log(error);});
	});
}

function genReportPM(table, num, id, runa) {
	$('#runic-nav').show();
	var db = Runic.db;
	if(!runa) runa = Runic.runa;
	if(Runic.test == 'plus') {
		if(!table) table = Runic.workTablePlusName;
		if(!num) num = Runic.test_plus_workId;
	} else if(Runic.test == 'minus') {
		if(!table) table = Runic.workTableMinusName;
		if(!num) num = Runic.test_minus_workId;
	}	
	
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM ' + table + ' WHERE id = ? ', [ (num * 1) ], function(tx, results) {

			var m = {};
			for(var i=0; i<Runic.correct.length; i++) {
				for(var j=0; j<Runic.correct[i].length; j++) {	
					var v = Runic.correctVal[i][j].split('#');
					for(var z=0; z<v.length; z++) {		
						m[v[z]] = 0;
					}
				}			
			}
			for(var i=0; i<Runic.correct.length; i++) {
				for(var j=0; j<Runic.correct[i].length; j++) {				
					var f = Runic.correct[i][j];
					var c = results.rows.item(0);
					var r = 'z' +c[f].toLowerCase();
					var v = Runic.correctVal[i][j].split('#');
					for(var z=0; z<v.length; z++) {		
						if(v[z].indexOf(r) >= 0) {
							if(m[v[z]] == 0) m[v[z]] = 1; else m[v[z]] += 1;
						}
					}	
				}
			}
			var sum = 0;
			for(var j=0; j<Runic.runes.length; j++) {
				for(var i=0; i<6; i++) {
					if(i==0) sum += m['z'+Runic.runes[j]];
						else sum += m['z'+Runic.runes[j]+i];
				}
				m['zz'+Runic.runes[j]] = sum;
				sum = 0;
			}

			var div = $('#containerResultTest');
			var html = '';
 			html += table_all_pm(runa.toLowerCase());
 			html += table_pm(m, runa.toUpperCase());
			
			div.append('<div class="panel panel-default"><div class="panel-heading"><b>КОРРЕКЦИОННЫЙ РЯД</b></div><div class="panel-body" id="panel-body-result">' + html + '</div></div>');

			$('#beginTest').hide();
			$('#table_7').hide();
		
			$('#containerResultTest').show();
			$('#genWordResultPM').show();				

		}, function(tx, error) {console.log(error);});
	});	
}

function getDateTimeRunic(date, type) {
	
	if(date == '') var d = new Date();
		else var d = new Date(date);
	var dd, m, h, mm, s;
	if((d.getDate()) < 10) dd = '0' + d.getDate();
		else dd = d.getDate();
	if((d.getMonth()+1) < 10) m = '0' + (d.getMonth()+1);
		else m = (d.getMonth()+1);
	if((d.getHours()) < 10) h = '0' + d.getHours();
		else h = d.getHours();
	if((d.getMinutes()) < 10) mm = '0' + d.getMinutes();
		else mm = d.getMinutes();
	if((d.getSeconds()) < 10) s = '0' + d.getSeconds();
		else s = d.getSeconds();
	if(type='full') {															
		return (dd +'.'+ m +'.'+d.getFullYear()+' '+h+':'+mm+':'+s);	
	} else {
		return (dd +'.'+ m +'.'+d.getFullYear());			
	}
	
}

// Получаем дату последнего входа в программу
function getLastLogin(id) {
	var db = Runic.db;
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM login WHERE login = \'' + Runic.cookie.getCookie('login') + '\'', [], function(tx, results) {
			if(results.rows.length > 0) {
				$('#'+id).html(getDateTimeRunic(results.rows.item(0).date_login_last, 'full'));
			}
		});
	});	
}


// Получаем таблицу действий пользователя в программе
function getTestSuccess(id) {
	var db = Runic.db;
	var login = Runic.cookie.getCookie('login');
	db.transaction(function(tx) {
		tx.executeSql('SELECT * FROM users WHERE login = ? ', [login], function(tx, results) {
			var r = results.rows.item(0).work_table;
			var work_table_num = (r.substr(r.indexOf('full_')+5))*1;
			for(var i=1; i<work_table_num+1; i++) {
				var table = login + '_full_' + i;
				_genTR(id, table, login, i);
			}		
		}, function(tx, error) {console.log(error);});
		tx.executeSql('SELECT * FROM ' + Runic.workTableOneName + ' WHERE success not null ', [], function(tx, results2) { 
			var len = results2.rows.length;
			if(len > 0) {
				var table = Runic.workTableOneName;
				for(var i=1; i<len+1; i++) {
					_genTROne(id, table, login, i, results2.rows.item(i-1));
				}	
			}
		}, function(tx, error) {console.log(error);});
		tx.executeSql('SELECT * FROM ' + Runic.workTablePlusName + ' WHERE success not null ', [], function(tx, results3) { 
			var len = results3.rows.length;
			if(len > 0) {
				var table = Runic.workTablePlusName;
				for(var i=1; i<len+1; i++) {
					_genTRPlus(id, table, login, i, results3.rows.item(i-1));
				}	
			}
		}, function(tx, error) {console.log(error);});	
		tx.executeSql('SELECT * FROM ' + Runic.workTableMinusName + ' WHERE success not null ', [], function(tx, results4) { 
			var len = results4.rows.length;
			if(len > 0) {
				var table = Runic.workTableMinusName;
				for(var i=1; i<len+1; i++) {
					_genTRMinus(id, table, login, i, results4.rows.item(i-1));
				}	
			}
		}, function(tx, error) {console.log(error);});				
					
	});
	
	function _genTR(id, table, login, i) {
		var db = Runic.db;
		db.transaction(function(tx) {
			tx.executeSql('SELECT * FROM '+table+' WHERE id = 1 AND success not null ', [], function(tx, results2) {
				if(results2.rows.length > 0) {
					$('#'+id).append('<tr><td valign="middle">Пройден полный тест</td><td>'+getDateTimeRunic(results2.rows.item(0).date_test, '')+'</td><td>/?page=my&res=full&table='+login+'_full_'+i+'&table_null='+login+'_full_null_'+i+'&i='+i+'&id=user_info</td></tr>');			
				}	
			}, function(tx, error) {console.log(error);});		
		});
	}
	
	function _genTROne(id, table, login, i, row) {
		var runa = row['table1'].substr(0, row['table1'].indexOf('_'));
		$('#'+id).append('<tr><td valign="middle">Пройден тест по руне '+runa+'</td><td>'+getDateTimeRunic(row['date_test'], '')+'</td><td>/?page=my&res=one&table='+login+'_one&i='+row['id']+'&id=user_info&runa='+runa.toLowerCase() +'</td></tr>');
	}
	
	function _genTRPlus(id, table, login, i, row) {
		var runa = row['runa'];
		$('#'+id).append('<tr><td valign="middle">Распределяющая коррекция по руне '+runa+'</td><td>'+getDateTimeRunic(row['date_test'], '')+'</td><td>/?page=my&res=plus&table='+login+'_plus&i='+row['id']+'&id=user_info&runa='+runa.toLowerCase() +'</td></tr>');
	}	
	
	function _genTRMinus(id, table, login, i, row) {
		var runa = row['runa'];
		$('#'+id).append('<tr><td valign="middle">Повышающая коррекция по руне '+runa+'</td><td>'+getDateTimeRunic(row['date_test'], '')+'</td><td>/?page=my&res=minus&table='+login+'_minus&i='+row['id']+'&id=user_info&runa='+runa.toLowerCase() +'</td></tr>');
	}		
		
}

function genWord() {	
	function convertText() {
		html2canvas($('#runic_table'), {
			onrendered: function(canvas) {
				var img = canvas.toDataURL("image/png");
				$('#panel-body-result').append('<img src="'+img+'" />');
				$('#runic_table').remove();
				
				html2canvas($('#runic_table_null'), {
					onrendered: function(canvas) {
						var img = canvas.toDataURL("image/png");
						$('#panel-body-result').append('<img src="'+img+'" />');
						$('#runic_table_null').remove();
						
						convertImagesToBase64();
						var content = $('#containerResultTest').html();
						var converted = htmlDocx.asBlob(content);
						var d = new Date();
						var dd, m;
						if((d.getDate()) < 10) dd = '0' + d.getDate();
							else dd = d.getDate();
						if((d.getMonth()+1) < 10) m = '0' + (d.getMonth()+1);
							else m = (d.getMonth()+1);
						var dataTest = (dd +'_'+ m +'_'+d.getFullYear());			
						saveAs(converted, Runic.cookie.getCookie('login')+'_'+dataTest+'.docx');									
						
					}
				});										
			}
		});
	}
	
	function convertImagesToBase64 () {
		var regularImages = $('#containerResultTest').find('img')
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		[].forEach.call(regularImages, function (imgElement) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			canvas.width = imgElement.width;
			canvas.height = imgElement.height;
			ctx.drawImage(imgElement, 0, 0);
			var dataURL = canvas.toDataURL();
			imgElement.setAttribute('src', dataURL);
		})
		canvas.remove();      
	}
	convertText();
}	

function genWordOne() {	
	function convertText() {
		html2canvas($('#runic_table_null'), {
			onrendered: function(canvas) {
				var img = canvas.toDataURL("image/png");
				$('#panel-body-result').append('<img src="'+img+'" />');
				$('#runic_table_null').remove();
				convertImagesToBase64();
				var content = $('#containerResultTest').html();
				var converted = htmlDocx.asBlob(content);
				var d = new Date();
				var dd, m;
				if((d.getDate()) < 10) dd = '0' + d.getDate();
					else dd = d.getDate();
				if((d.getMonth()+1) < 10) m = '0' + (d.getMonth()+1);
					else m = (d.getMonth()+1);
				var dataTest = (dd +'_'+ m +'_'+d.getFullYear());			
				saveAs(converted, Runic.cookie.getCookie('login')+'_'+dataTest+'.docx');					
			}
		});			
	}
	function convertImagesToBase64 () {
		var regularImages = $('#containerResultTest').find('img')
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		[].forEach.call(regularImages, function (imgElement) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			canvas.width = imgElement.width;
			canvas.height = imgElement.height;
			ctx.drawImage(imgElement, 0, 0);
			var dataURL = canvas.toDataURL();
			imgElement.setAttribute('src', dataURL);
		})
		canvas.remove();      
	}	
	var t = $('#runic_table_null')[0];
	if(t) { convertText(); }
		else {	
			convertImagesToBase64();
			var content = $('#containerResultTest').html();
			var converted = htmlDocx.asBlob(content);
			var d = new Date();
			var dd, m;
			if((d.getDate()) < 10) dd = '0' + d.getDate();
				else dd = d.getDate();
			if((d.getMonth()+1) < 10) m = '0' + (d.getMonth()+1);
				else m = (d.getMonth()+1);
			var dataTest = (dd +'_'+ m +'_'+d.getFullYear());			
			saveAs(converted, Runic.cookie.getCookie('login')+'_'+dataTest+'.docx');		
		}
}

function genWordPM() {	
	function convertText() {
		html2canvas($('#runic_table_pm')[0], {
			onrendered: function(canvas) {
				var img = canvas.toDataURL("image/png");
				$('#panel-body-result').append('<img src="'+img+'" />');
				$('#runic_table_pm').remove();
				convertImagesToBase64();
				var content = $('#containerResultTest').html();
				var converted = htmlDocx.asBlob(content);
				var d = new Date();
				var dd, m;
				if((d.getDate()) < 10) dd = '0' + d.getDate();
					else dd = d.getDate();
				if((d.getMonth()+1) < 10) m = '0' + (d.getMonth()+1);
					else m = (d.getMonth()+1);
				var dataTest = (dd +'_'+ m +'_'+d.getFullYear());			
				saveAs(converted, Runic.cookie.getCookie('login')+'_'+dataTest+'.docx');					
			}
		});			
	}
	function convertImagesToBase64 () {
		var regularImages = $('#containerResultTest').find('img')
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		[].forEach.call(regularImages, function (imgElement) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			canvas.width = imgElement.width;
			canvas.height = imgElement.height;
			ctx.drawImage(imgElement, 0, 0);
			var dataURL = canvas.toDataURL();
			imgElement.setAttribute('src', dataURL);
		})
		canvas.remove();      
	}
	var t = $('#runic_table_pm')[0];
	if(t) { convertText(); }
		else {
			convertImagesToBase64();
			var content = $('#containerResultTest').html();
			var converted = htmlDocx.asBlob(content);
			var d = new Date();
			var dd, m;
			if((d.getDate()) < 10) dd = '0' + d.getDate();
				else dd = d.getDate();
			if((d.getMonth()+1) < 10) m = '0' + (d.getMonth()+1);
				else m = (d.getMonth()+1);
			var dataTest = (dd +'_'+ m +'_'+d.getFullYear());			
			saveAs(converted, Runic.cookie.getCookie('login')+'_'+dataTest+'.docx');				
		}

}