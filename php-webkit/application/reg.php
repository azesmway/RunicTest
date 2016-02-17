<?php

header('Content-Type: text/html; charset=utf8');
include './head.php';

?>

<script>

	var login = '<?php echo($_POST['inputLogin']); ?>';
	var pass = '<?php echo($_POST['inputPassword']); ?>';
	var fio = '<?php echo($_POST['inputFIO']); ?>';
	var bd = '<?php echo($_POST['inputDate']); ?>';
	var town = '<?php echo($_POST['inputTown']); ?>';
	var lang = '<?php echo($_POST['inputLang']); ?>';

	var db = Runic.db;
	db.transaction(function (tx) {
		tx.executeSql('SELECT * FROM users WHERE login = ? AND password = ? ', [login, pass], function (tx, results) {
			if(results.rows.length == 0) {				
				var tbl = login + '_full_1';
				var tbl_null = login + '_full_null_1';
				tx.executeSql('INSERT INTO users (login, password, fio, bdate, town, work_table, work_table_null, work_table_one, work_table_plus, work_table_minus, lang) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [login, pass, fio, bd, town, tbl, tbl_null, '1', '1', '1', lang], function (tx, results) {
					Runic.cookie.setCookie("login", login);
					Runic.cookie.setCookie("lang", lang);
					insertLogin(login, new Date().toString());
					createWorkTable(login, 1);						
					location.href = '/?page=my';	
					
				}, function(tx, error) {console.log(error)});
			} else {
				alert('Пользователь с таким логином уже существует!');
				location.href = '/?page=my';
			}
		}, function(tx, error) {console.log(error)});
	});			

	
</script>	

</body>
</html>