<?php 

?>
<div class="container" id="startText">
    <div style="height: 60px;"></div>

    <div class="jumbotron" id="list-one-runa">
        <span style="font-size: 300%"> <b>Повышающая руническая коррекция<br>
        (повреждение со знаком "-")</b></span>

        <table bgcolor="#D3D3D3" cellpadding="5" width="100%" class="table">
            <tr>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Fehu','minus')"><span class="one_runa">F</span><br><b>Fehu</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Uruz','minus')"><span class="one_runa">U</span><br><b>Uruz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Thurisaz','minus')"><span class="one_runa">X</span><br><b>Thurisaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Ansuz','minus')"><span class="one_runa">A</span><br><b>Ansuz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Raidho','minus')"><span class="one_runa">R</span><br><b>Raidho</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Kenaz','minus')"><span class="one_runa">K</span><br><b>Kenaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Gebo','minus')"><span class="one_runa">G</span><br><b>Gebo</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Wunjo','minus')"><span class="one_runa">W</span><br><b>Wunjo</b></a></td>
            </tr>
            <tr>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Hagalaz','minus')"><span class="one_runa">H</span><br><b>Hagalaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Nauthiz','minus')"><span class="one_runa">N</span><br><b>Nauthiz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Isa','minus')"><span class="one_runa">I</span><br><b>Isa</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Jera','minus')"><span class="one_runa">J</span><br><b>Jera</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Eihwaz','minus')"><span class="one_runa">Y</span><br><b>Eihwaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Perthro','minus')"><span class="one_runa">P</span><br><b>Perthro</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Algiz','minus')"><span class="one_runa">Z</span><br><b>Algiz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Sowilo','minus')"><span class="one_runa">S</span><br><b>Sowilo</b></a></td>
            </tr>
            <tr>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Tiwaz','minus')"><span class="one_runa">T</span><br><b>Tiwaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Berkano','minus')"><span class="one_runa">B</span><br><b>Berkano</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Ehwaz','minus')"><span class="one_runa">E</span><br><b>Ehwaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Mannaz','minus')"><span class="one_runa">M</span><br><b>Mannaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Laguz','minus')"><span class="one_runa">L</span><br><b>Laguz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Ingwaz','minus')"><span class="one_runa">Q</span><br><b>Ingwaz</b></a></td>
				<td align="center"><a href="#" class="a_runa" onclick="startTestPM('Othala','minus')"><span class="one_runa">O</span><br><b>Othala</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTestPM('Dagaz','minus')"><span class="one_runa">D</span><br><b>Dagaz</b></a></td>
            </tr>
        </table>
    </div>
</div>

<div class="container" style="display: none;" id="beginTest">
<div style="height: 5px;"></div>
	<form id="runic-test-full">
					
	</form>
</div>

<div class="container" id="table_7" style="display: none;"> 
	<div class="jumbotron">
		<h2>ТЕСТ ЗАВЕРШЕН</h2>
		<p class="lead">Здесь нужно написать что-нибудь после завершения теста</p>
		<p><a class="btn btn-lg btn-success" href="#" role="button" onclick="genReportPM();">Получить результат</a></p>
	</div>
</div>

<div class="container" style="display: none;" id="containerResultTest">
	<div style="height: 60px;"></div>
</div>

<div class="container" style="display: none;" id="genWordResultPM">
	<center><a class="btn btn-lg btn-success" href="#" role="button" onclick="genWordPM();">Сформировать отчет</a></center>
	<br><br><br><br><br><br>
</div>	
