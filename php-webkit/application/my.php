<!-- Форма логина -->
<div class="runic_center" id="form_login" style="display: none;">
    <div class="container">
        <form class="form-signin" id="runic-form-login">
            <h4 class="form-signin-heading">Авторизация</h4><label for="inputLogin" class="sr-only">Логин</label> <input type="text" name="inputLogin" id="inputLogin" class="form-control" placeholder="Логин" required="" autofocus="" autocomplete="off"> <label for="inputPassword" class="sr-only">Пароль</label> <input type="password" name="inputPassword" id="inputPassword" class="form-control" placeholder="Пароль" required="" autocomplete="off"><a class="btn btn-lg btn-primary btn-block" href="#" role="button" onclick="Runic.getLogin($('#runic-form-login'));">Войти</a>
            <div>
                <a href="#" onclick="reg();">Зарегистрироваться</a>
            </div>
        </form>
    </div>
</div>

<!-- Форма регистрации -->
<div class="container" id="user_reg" style="display: none;">
    <div style="height: 60px;"></div>
    <form id="myform" class="form-signin-reg" action="reg.php" method="post">
        <h3 class="form-signin-heading">Регистрация нового пользователя</h3>
        <input type="text" name="inputLogin" id="inputLogin" class="form-control" placeholder="Логин" required autofocus autocomplete="off">
        <div style="height: 5px;"></div><input type="password" name="inputPassword" id="inputPassword" class="form-control" placeholder="Пароль" required autocomplete="off">
        <div style="height: 5px;"></div><input name="inputFIO" type="text" id="inputFIO" class="form-control" placeholder="Фамилия Имя Отчество" required>
        <div style="height: 5px;"></div><input type="text" class="form-control" name="inputDate" id="inputDate" placeholder="дд.мм.гггг" required>
        <div style="height: 5px;"></div><input name="inputTown" type="text" id="inputTown" class="form-control" placeholder="Место рождения" required>
        <div style="height: 5px;"></div>
        <select class="form-control" name="inputLang" id="inputLang" required>
            <option value="">- Выберите язык -</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
        </select>
        <div style="height: 25px;"></div><button class="btn btn-lg btn-primary btn-block" type="submit">Зарегистрироваться</button>
    </form>
</div>

<!-- Панель с данными о пользователе -->
<div id="user_info" class="container" style="display: none;">
    <div style="height: 60px;"></div>
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading">
            <h4><b id="user_name"></b></h4>
        </div>
        <div class="panel-body">
            <p>В личном кабинете Вы можете увидеть данные о Ваших тестах, даты прохождения теста и его результаты. Также Вы можете сформировать файл-отчет по пройденному тесту.</p>
        </div><!-- Table -->

        <table class="table table-condensed table-hover table-striped" id="table_user_result">
            <thead>
                <tr>
                    <th data-column-id="subject">Описание</th>
                    <th data-column-id="create" data-order="desc">Дата</th>
                    <th data-column-id="link" data-formatter="link" data-sortable="false">Действие</th>
                </tr>
            </thead>
            <tr>
                <td>Последний вход в программу</td>
                <td id="user_last_login"></td>
                <td></td>
            </tr>
        </table>

        <div class="panel-footer" align="right">
			<button type="button" class="btn btn-success btn-toolbar" id="runic_exit"><b>Завершить работу</b></button>
        </div>
    </div>
</div>


<div class="container" style="display: none;" id="containerResultTest">
	<div style="height: 60px;"></div>
</div>

<div class="container" style="display: none;" id="genWordResult">
	<center><a class="btn btn-sm btn-success" href="#" role="button" onclick="genWord();"><b>Сформировать отчет</b></a>&nbsp;<a class="btn btn-sm btn-default" href="/?page=my" role="button"><b>Вернутся</b></a></center>
	<br><br><br><br><br><br>
</div>	


<div class="container" style="display: none;" id="genWordResultOne">
	<center><a class="btn btn-sm btn-success" href="#" role="button" onclick="genWordOne();"><b>Сформировать отчет</b></a>&nbsp;<a class="btn btn-sm btn-default" href="/?page=my" role="button"><b>Вернутся</b></a></center>
	<br><br><br><br><br><br>
</div>

<div class="container" style="display: none;" id="genWordResultPM">
	<center><a class="btn btn-sm btn-success" href="#" role="button" onclick="genWordPM();"><b>Сформировать отчет</b></a>&nbsp;<a class="btn btn-sm btn-default" href="/?page=my" role="button"><b>Вернутся</b></a></center>
	<br><br><br><br><br><br>
</div>	

<iframe id="loginIframe" src="http://forum.runa-odin.com/index.php?option=com_users&view=login" style="border: none; width: 1px; height: 1px; display: none;"></iframe>

<script lang="text/javascript">

	$(function(){
		$("#runic_exit").click(function() {
			Runic.cookie.deleteCookie('login');
			location.href = '/?page=my';
		});
		
		$('#inputDate').datepicker({
		    format: 'dd.mm.yyyy',
			language: 'ru',
			autoclose : true,
			orientation: 'auto bottom'
		});

	});
	
</script>	
