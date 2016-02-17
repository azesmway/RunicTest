<?php

function fMenu($menu) {
	
	$arr = array();
	$lang = $_COOKIE["lang"] ? $_COOKIE["lang"] : 'ru';
	$json_data = file_get_contents('./lang/'.$lang.'.json');
	$arr = json_decode($json_data, true);

	if(!$menu) $menu = 'main';
	$html = '';
// navbar-fixed-top
	$html = $html . '<nav class="navbar navbar-default " id="runic-nav"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="#" onclick="startRuna()">РУНЫ ОДИНА</a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav">';

	if($menu=='main'){$html = $html .  '<li class="active"><a href="#" class="lang_menu1">'.$arr['lang_menu1'].'</a></li>';} else { $html = $html .  '<li><a href="#" class="lang_menu1">'.$arr['lang_menu1'].'</a></li>';}


if(!empty($_COOKIE['login'])) {

	$html = $html . '<li class="dropdown"><a href="#" class="dropdown-toggle lang_menu2" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'.$arr['lang_menu2'].'</a><ul class="dropdown-menu">';
	if($menu=='full'){$html = $html .  '<li class="active"><a href="#" class="lang_menu21">'.$arr['lang_menu21'].'</a></li>';}else{$html = $html .  '<li><a href="#" class="lang_menu21">'.$arr['lang_menu21'].'</a></li>';}
	if($menu=='runa'){$html = $html .  '<li class="active"><a href="#" class="lang_menu22">'.$arr['lang_menu22'].'</a></li>';}else{$html = $html .  '<li><a href="#" class="lang_menu22">'.$arr['lang_menu22'].'</a></li>';}
	$html = $html . '</ul></li><li class="dropdown"><a href="#" class="dropdown-toggle lang_menu3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'.$arr['lang_menu3'].'</a><ul class="dropdown-menu">';
	if($menu=='minus'){$html = $html .  '<li class="active"><a href="#" class="lang_menu31">'.$arr['lang_menu31'].'</a></li>';}else{$html = $html .  '<li><a href="#" class="lang_menu31">'.$arr['lang_menu31'].'</a></li>';}
	if($menu=='plus'){$html = $html .  '<li class="active"><a href="#" class="lang_menu32">'.$arr['lang_menu32'].'</a></li>';}else{$html = $html .  '<li><a href="#" class="lang_menu32">'.$arr['lang_menu32'].'</a></li>';}
	$html = $html .  '</ul></li>';


} else {
	
	$html = $html . '<li class="dropdown" style="display: none;" id="menu2"><a href="#" class="dropdown-toggle lang_menu2" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'.$arr['lang_menu2'].'</a><ul class="dropdown-menu">';
	if($menu=='full'){$html = $html .  '<li class="active"><a href="/?page=full" class="lang_menu21">'.$arr['lang_menu21'].'</a></li>';}else{$html = $html .  '<li><a href="/?page=full" class="lang_menu21">'.$arr['lang_menu21'].'</a></li>';}
	if($menu=='runa'){$html = $html .  '<li class="active"><a href="/?page=runa" class="lang_menu22">'.$arr['lang_menu22'].'</a></li>';}else{$html = $html .  '<li><a href="/?page=runa" class="lang_menu22">'.$arr['lang_menu22'].'</a></li>';}
	$html = $html . '</ul></li><li class="dropdown" style="display: none;" id="menu3"><a href="#" class="dropdown-toggle lang_menu3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'.$arr['lang_menu3'].'</a><ul class="dropdown-menu">';
	if($menu=='minus'){$html = $html .  '<li class="active"><a href="/?page=minus" class="lang_menu31">'.$arr['lang_menu31'].'</a></li>';}else{$html = $html .  '<li><a href="/?page=minus" class="lang_menu31">'.$arr['lang_menu31'].'</a></li>';}
	if($menu=='plus'){$html = $html .  '<li class="active"><a href="/?page=plus" class="lang_menu32">'.$arr['lang_menu32'].'</a></li>';}else{$html = $html .  '<li><a href="/?page=plus" class="lang_menu32">'.$arr['lang_menu32'].'</a></li>';}
	$html = $html .  '</ul></li>';
	
	
}

	$html = $html .  '<li class="dropdown"><a href="#" class="dropdown-toggle lang_menu4" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'.$arr['lang_menu4'].'</a><ul class="dropdown-menu">';

	if($menu=='desc_full'){$html = $html .  '<li class="active"><a href="#" class="lang_menu41">'.$arr['lang_menu41'].'</a></li>';}else{$html = $html .  '<li><a href="#" class="lang_menu41">'.$arr['lang_menu41'].'</a></li>';}
	if($menu=='desc_test'){$html = $html .  '<li class="active"><a href="#" class="lang_menu42">'.$arr['lang_menu42'].'</a></li>';}else{$html = $html .  '<li><a href="#" class="lang_menu42">'.$arr['lang_menu42'].'</a></li>';}
// 	if($menu=='desc_instr'){$html = $html .  '<li class="active"><a href="/?page=desc_instr" class="lang_menu43">'.$arr['lang_menu43'].'</a></li>';}else{$html = $html .  '<li><a href="/?page=desc_instr" class="lang_menu43">'.$arr['lang_menu43'].'</a></li>';}

	$html = $html .  '</ul></li>';

	if($menu=='desc_instr'){$html = $html .  '<li class="active"><a href="#" class="lang_menu43">'.$arr['lang_menu43'].'</a></li>';} else { $html = $html .  '<li><a href="#" class="lang_menu43">'.$arr['lang_menu43'].'</a></li>';}

if(!empty($_COOKIE['login'])) {

	if($menu=='social'){$html = $html .  '<li class="active"><a href="http://forum.runa-odin.com/index.php/jomsocial" class="lang_menu44">'.$arr['lang_menu44'].'</a></li>';} else { $html = $html .  '<li><a href="http://forum.runa-odin.com/index.php/jomsocial" class="lang_menu44">'.$arr['lang_menu44'].'</a></li>';}

	if($menu=='forum'){$html = $html .  '<li class="active"><a href="/?page=forum" class="lang_menu45">'.$arr['lang_menu45'].'</a></li>';} else { $html = $html .  '<li><a href="/?page=forum" class="lang_menu45">'.$arr['lang_menu45'].'</a></li>';}

} else {
	
	$html = $html .  '<li style="display: none;" id="menu44"><a href="http://forum.runa-odin.com/index.php/jomsocial" class="lang_menu44">'.$arr['lang_menu44'].'</a></li>';
	$html = $html .  '<li style="display: none;" id="menu45"><a href="/?page=forum" class="lang_menu45">'.$arr['lang_menu45'].'</a></li>';	
	
}	


	$html = $html .  '</ul><ul class="nav navbar-nav navbar-right">';

	if($menu=='my'){
		if($_COOKIE['login']) {
			$html = $html .  '<li class="active"><a href="#" class="lang_menu6">'.$arr['lang_menu6'].'</a></li>';
		} else {
			$html = $html .  '<li class="active"><a href="/?page=my" class="lang_menu7">'.$arr['lang_menu7'].'</a></li>';
		}	
	} else {
		if($_COOKIE['login']) {
			$html = $html .  '<li><a href="#" class="lang_menu6">'.$arr['lang_menu6'].'</a></li>';
		} else {
			$html = $html .  '<li><a href="/?page=my" class="lang_menu7">'.$arr['lang_menu7'].'</a></li>';
		}
	}

//	$html = $html .  '<li><a href="#" class="language" rel="ru-RU" onclick="Runic.changeUserLang(\'ru\');"><span class="lang-sm" lang="ru"></span></a></li><li><a href="#" class="language" rel="en-US" onclick="Runic.changeUserLang(\'en\');"><span class="lang-sm" lang="en"></span></a></li>';
	
	$html = $html . '</ul></div></div></nav>';

	return $html;
}
