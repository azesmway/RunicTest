<?php
header('Content-Type: text/html; charset=utf8');
include_once('./menu.php');
include './head.php';

echo fMenu($_GET['page']); 

if(!$_GET['page']) $page = 'main';
	else $page = $_GET['page'];
	
include './'.$page.'.php';
		   
    
include './foot.php'; 

?>