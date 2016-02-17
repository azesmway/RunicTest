<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>RUNIC CENTER</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.min.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
    <script src="js/jquery-1.11.3.min.js"></script>
	<script src="js/runic.js"></script>    
	
	<script>
	
		db.transaction(function (tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY ASC, fio TEXT, bdate TEXT, town TEXT)');
		});
		
	</script>	
	
  </head>
  <body>

<!--
<script>
	var $_GET = {};
	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
	    function decode(s) {
	        return decodeURIComponent(s.split("+").join(" "));
	    }
	
	    $_GET[decode(arguments[1])] = decode(arguments[2]);
	});
	if($_GET['fio']) {
		var fio = $_GET['fio'];
		var bd = $_GET['date'];
		var town = $_GET['town'];
		db.transaction(function (tx) {
			tx.executeSql('INSERT INTO users (fio, bdate, town) VALUES (?, ?, ?)', [fio, bd, town]);
		});	
	}
</script>		  	  
-->
	      
    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">RUNIC</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">Главная</a></li>
			   <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Работа с тестом <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="test.php">PHP</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="my.html">Личный кабинет</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

<div style="height: 70px;"></div>
<div class="container">

	<div class="panel panel-info">
		<div class="panel-heading"><b>Описание теста</b></div>
		<div class="panel-body">
			
В основе рунического теста лежит сравнительный анализ реакции человека на каждую из Рун Рунического Круга. Реакция на Руну формализуется в виде выбора человеком того или иного варианта Руны в следующих видах (частях) теста:
<UL>
<LI>Выбор цвета Руны
<LI>Выбор размера Руны
<LI>Выбор цвета и размера Руны
</UL>
При этом выбор осуществляется:
<UL>
<LI>
В режиме раздельной работы левого и правого полушария мозга и, соответственно,  раздельной работы правой руки и правого глаза и левой руки и левого глаза 
<LI>В виде выбора в двух вариантах:
<UL>
<LI>явном варианте (человек видит все варианты Рун, по которым он делает выбор, в цвете, в размере, и в цвете и размере) 
<LI>
ассоциативном варианте (человек ассоциирует Руну с тем или иным цветом, с размером, с  цветом и размером) 
</UL>
</UL>


В результате теста выводится листинг со следующей информацией:
<UL>

<LI>Диагностика по каждой из 24 рун Старшего Футарка:
<UL>
<LI>Возможная положительна активность или отрицательная активность (пассивность) по данной руне в различных планах:
<UL>
<LI>Ментальный план (высшее сознание)
<LI>Астральный план 
<LI>Интеллект (оперативное, или обычное сознание)
<LI>Энергетический (эфирный) план
<LI>Подсознание
<LI>Физический план
</UL>
<LI>Потенциал по данной руне и реальные (явленные) свойства
<LI>Возможные проблемы по данной руне в каждом из вышеуказанных планов:
<UL>
<LI>Наличие ауральной сущности (духа)
<LI>Влияние прошлой жизни (кармические проблемы)
<LI>Программа (в том числе наведенная программа – порча)
<LI>Эфирная сущность ( в том числе наведенная эфирная сущность – морок)
<LI>Инграмма (неосознанная подсознательная программа)
<LI>Органическая программа (органическая инграмма), как предрасположенность к органическому заболеванию 
</UL>
</UL>
<LI>Диагностика по свойствам (качествам) человека в виде сводной таблицы:
<UL>
<LI>Потенциал, скрытые возможности и способности
<LI>Явленные свойства, возможности и способности
</UL>
</UL>

При наличии той или иной проблемы человек проходит тест по созданию вибрационного рунического ряда для ликвидации выявленной проблемы. 			
			
			
			
		</div>
	</div>			
</div>

      
<!--
    <div class="container">      	    
		<div style="height: 35px;"></div>
		
       <form id="myform" class="form-signin" action="test.php" method="post">
        <h3 class="form-signin-heading">Регистрация нового пользователя</h3>

        <label for="inputEmail" class="sr-only">Фамилия, Имя, Отчество</label>
        <input name="fio" type="text" id="inputFIO" class="form-control" placeholder="Фамилия, Имя, Отчество" required autofocus>
		<div style="height: 5px;"></div>
        <label for="inputDate" class="sr-only">Дата рождения</label>
        <input name="date" type="date" id="inputDate" class="form-control" placeholder="Дата/месяц/год" required>        
		<div style="height: 5px;"></div>
        <label for="inputTown" class="sr-only">Место рождения</label>
        <input name="town" type="text" id="inputTown" class="form-control" placeholder="Место рождения" required>  
		<span class=nt>&nbsp;</span>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Зарегистравать</button>
      </form>

    </div>
-->


    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

	<script>	
/*
		db.transaction(function (tx) {
			tx.executeSql('SELECT * FROM users', [], function (tx, results) {
				var len = results.rows.length, i;
				for (i = 0; i < len; i++) {
					$('#list-group-users').html( $('#list-group-users').html() + '<a href="main.html?user_id=' + results.rows.item(i).id + '" class="list-group-item"><h4 class="list-group-item-heading">'+ results.rows.item(i).fio +'</h4><p class="list-group-item-text">Дата рождения: '+results.rows.item(i).bdate+', место рождения: '+results.rows.item(i).town+'</p></a>');
				}
			});
		});			
*/
		
		// Создать верхнее меню
/*
		var menubar = new gui.Menu({ type: 'menubar', title: 'RUNIC' });
		
		var submenu = new gui.Menu();
		submenu.append(new gui.MenuItem({ label: 'Выход', click: function() {
			win.close(true);
		} }));
*/
		
		// В качестве вложенных меню используем такой же код, как в примере c контекстным меню.
/*
		menubar.append(new gui.MenuItem({ label: 'Главное', submenu: submenu }));
		menubar.append(new gui.MenuItem({ label: 'О нас' }));
*/
		
		//Получить текущее окно и подключить к нему верхнее меню
// 		gui.Window.get().menu = menubar;
	
	/*
	$( "#myform" ).submit(function( event ) {
		var fio = $( "#inputFIO" ).val();
		var bd = $( "#inputDate" ).val().toString();
		var town = $( "#inputTown" ).val();
		db.transaction(function (tx) {
			tx.executeSql('INSERT INTO users (fio, bdate, town) VALUES (?, ?, ?)', [fio, bd, town]);
		});
		return;
	});
	*/
	
	/*
	
	db.transaction(function (tx) {
	  tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id unique, text)');
	  tx.executeSql('INSERT INTO foo (id, text) VALUES (1, "synergies")');
	  tx.executeSql('INSERT INTO foo (id, text) VALUES (2, "luyao")');
	});
	*/
	
	/*
	db.transaction(function (tx) {
	  tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
	    var len = results.rows.length, i;
	    for (i = 0; i < len; i++) {
	      alert(results.rows.item(i).text);
	    }
	  });
	});
	*/
	
	
/*
	var $_GET = {};
	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
	    function decode(s) {
	        return decodeURIComponent(s.split("+").join(" "));
	    }
	
	    $_GET[decode(arguments[1])] = decode(arguments[2]);
	});
*/


				
		/*
			db.transaction(function (tx) {
				tx.executeSql('SELECT * FROM users WHERE login = \'' + login + '\'', [], function (tx, results) {
					var len = results.rows.length, i;
					for (i = 0; i < len; i++) {
						$('#list-group-users').html( $('#list-group-users').html() + '<a href="main.html?user_id=' + results.rows.item(i).id + '" class="list-group-item"><h4 class="list-group-item-heading">'+ results.rows.item(i).fio +'</h4><p class="list-group-item-text">Дата рождения: '+results.rows.item(i).bdate+', место рождения: '+results.rows.item(i).town+'</p></a>');
					}
				});
			});	
		*/
	
	
	</script>


  </body>
</html>




<?php echo $foot; ?>  

<script>
	var login = 'azesm';
	var password = 'kukaJag0';	
	var fio = 'Золотарев Алексей Петрович';
	var bd = '24.10.1973';
	var town = 'Тамбов';
	db.transaction(function (tx) {
		tx.executeSql('INSERT INTO users (login, password, fio, bdate, town) VALUES (?, ?, ?, ?, ?)', [login, password, fio, bd, town]);
	});	
</script>	  
    
</body>
</html>