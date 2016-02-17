<?php 

	$arr = array();
	$lang = $_COOKIE["lang"] ? $_COOKIE["lang"] : 'ru';
	$json_data = file_get_contents('./lang/'.$lang.'.json');
	$arr = json_decode($json_data, true);

?> 	 
<table width="100%" style="height: 100%; border: none; margin: 0; background-color: #29166f;"><tr align="center"><td valign="middle">

	<img src="img/rune_bg.jpg" alt="MYLOGO"  />

</td></tr></table>