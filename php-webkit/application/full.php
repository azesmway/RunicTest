<?php
?>
<div class="container" id="startText">
	<div style="height: 60px;"></div>
	<div class="jumbotron">
		<h2 style="font-size: 35px;">РУНИЧЕСКИЙ ТЕСТ</h2>
		<p style="font-size: 16px; text-align: left;">Необходимо строго соблюдать правила прохождения теста, в первую очередь – требования по использованию в выборе того или другого варианта нужной руки и нужного глаза, не нужно спешить и отвлекаться на что-либо. Поэтому постарайтесь закрыть программы связи и коммуникации на компьютере и отключить сотовый и городской телефон. Объясните окружающим, что в течении прохождения теста (полный тест проходится в среднем за 40 минут, а тест по одной руне за 5 минут) Вас никто не должен отвлекать.</p><p style="font-size: 16px; text-align: left;">Правила, которым Вы должны следовать, указаны в тесте. Вверху теста указано, какую руку и какой глаз должны Вы использовать в тот или другой этап прохождения теста (всего в тесте 12 этапов). На каждом этапе происходит чередование использования руки и глаза. Выбор производится путем нажатия на выбранном Вами варианте руны. При этом слева от выбранной руны должна появиться «галочка». После того, как выбор сделан, о чем свидетельствует «галочка», Вы должны перейти к следующему шагу теста, нажав кнопку «Вперед».</p><p style="font-size: 16px; text-align: left;">Делайте выбор без какого-либо анализа этого выбора. Вы просто выбираете то, чтo хотите выбрать. Ничего более.</p><p>&nbsp;</p>
		<p><a class="btn btn-lg btn-success" href="#" role="button" onclick="startTest();">Приступить к тесту</a></p>
	</div>
</div>
	  	  
<div class="container" style="display: none;" id="beginTest">
<div style="height: 5px;"></div>
	<form id="runic-test-full">
							
	</form>
</div>


<div class="container" id="table_13" style="display: none;"> 
	<div style="height: 60px;"></div>
	<div class="jumbotron">
		<h2>ТЕСТ ЗАВЕРШЕН</h2>
		<p class="lead">&nbsp;</p>
		<p><a class="btn btn-lg btn-success" href="#" role="button" onclick="genReport();">Получить результат</a></p>
	</div>
</div>


<div class="container" style="display: none;" id="containerResultTest">
	<div style="height: 60px;"></div>
</div>


<div class="container" style="display: none;" id="genWordResult">
	<center><a class="btn btn-lg btn-success" href="#" role="button" onclick="genWord();">Сформировать отчет</a></center>
	<br><br><br><br><br><br>
</div>	