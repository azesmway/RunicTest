<?php 
    
?>

<div class="container" id="startText">
    <div style="height: 60px;"></div>

    <div class="jumbotron" id="list-one-runa">
        <span style="font-size: 300%"><b>Диагностика по отдельным рунам</b></span>

        <table bgcolor="#D3D3D3" cellpadding="5" width="100%" class="table">
            <tr>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('fehu');"><span class="one_runa">F</span><br><b>Fehu</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('uruz');"><span class="one_runa">U</span><br><b>Uruz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('thurisaz');"><span class="one_runa">X</span><br><b>Thurisaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('ansuz');"><span class="one_runa">A</span><br><b>Ansuz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('raidho');"><span class="one_runa">R</span><br><b>Raidho</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('kenaz');"><span class="one_runa">K</span><br><b>Kenaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('gebo');"><span class="one_runa">G</span><br><b>Gebo</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('wunjo');"><span class="one_runa">W</span><br><b>Wunjo</b></a></td>
            </tr>
            <tr>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('hagalaz');"><span class="one_runa">H</span><br><b>Hagalaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('nauthiz');"><span class="one_runa">N</span><br><b>Nauthiz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('isa');"><span class="one_runa">I</span><br><b>Isa</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('jera');"><span class="one_runa">J</span><br><b>Jera</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('eihwaz');"><span class="one_runa">Y</span><br><b>Eihwaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('perthro');"><span class="one_runa">P</span><br><b>Perthro</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('algiz');"><span class="one_runa">Z</span><br><b>Algiz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('sowilo');"><span class="one_runa">S</span><br><b>Sowilo</b></a></td>
            </tr>
            <tr>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('tiwaz');"><span class="one_runa">T</span><br><b>Tiwaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('berkano');"><span class="one_runa">B</span><br><b>Berkano</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('ehwaz');"><span class="one_runa">E</span><br><b>Ehwaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('mannaz');"><span class="one_runa">M</span><br><b>Mannaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('laguz');"><span class="one_runa">L</span><br><b>Laguz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('ingwaz');"><span class="one_runa">Q</span><br><b>Ingwaz</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('othala');"><span class="one_runa">O</span><br><b>Othala</b></a></td>
                <td align="center"><a href="#" class="a_runa" onclick="startTest('dagaz');"><span class="one_runa">D</span><br><b>Dagaz</b></a></td>
            </tr>
        </table>
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
		<p class="lead">Здесь нужно написать что-нибудь после завершения теста</p>
		<p><a class="btn btn-lg btn-success" href="#" role="button" onclick="genReportOne();">Получить результат</a></p>
	</div>
</div>



<div class="container" style="display: none;" id="containerResultTest">
	<div style="height: 60px;"></div>
</div>


<div class="container" style="display: none;" id="genWordResultOne">
	<center><a class="btn btn-lg btn-success" href="#" role="button" onclick="genWordOne();">Сформировать отчет</a></center>
	<br><br><br><br><br><br>
</div>	
