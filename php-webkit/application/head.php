<?php  ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>RUNIC TEST (Version 5.1)</title><!-- Bootstrap -->
    <link href="./css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="./css/jquery-ui.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="./css/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="./css/languages.min.css" />    
    
    <link href="./css/style.css" rel="stylesheet" type="text/css">
    
    <!--[if lt IE 9]>
      <script src="./js/html5shiv.min.js"></script>
      <script src="./js/respond.min.js"></script>
    <![endif]-->

    <script src="./js/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="./js/jquery-ui.min.js" type="text/javascript"></script>
    <script src="./js/bootstrap.js" type="text/javascript"></script> 
    <script src="./js/bootstrap-datepicker.min.js" type="text/javascript"></script> 
	<script src="./js/bootstrap-datepicker.ru.min.js" type="text/javascript"></script> 
	
<?php if($_GET['page']=='my'): ?>
	<script src="js/jquery.bootgrid.js" type="text/javascript"></script>
    <link href="css/jquery.bootgrid.min.css" rel="stylesheet" type="text/css">	
<?php endif; ?> 

    <script src="./js/runic.js" type="text/javascript"></script>
    <script type="text/javascript">
		Runic.init(); 					    
    </script>
    
<?php if($_GET['page']=='full' || $_GET['page']=='runa' || $_GET['page']=='my' || $_GET['page']=='plus' || $_GET['page']=='minus'): ?>
	<script src="js/FileSaver.js" type="text/javascript"></script> 
	<script src="js/html-docx.js" type="text/javascript"></script> 
	<script src="js/html2canvas.js" type="text/javascript"></script> 

	<script src="js/table_fehu.js" type="text/javascript"></script> 
	<script src="js/table_uruz.js" type="text/javascript"></script>
	<script src="js/table_thurisaz.js" type="text/javascript"></script>	 
	<script src="js/table_ansuz.js" type="text/javascript"></script>
	<script src="js/table_raidho.js" type="text/javascript"></script>
	<script src="js/table_kenaz.js" type="text/javascript"></script>
	<script src="js/table_gebo.js" type="text/javascript"></script>	
	<script src="js/table_wunjo.js" type="text/javascript"></script>
	<script src="js/table_hagalaz.js" type="text/javascript"></script>
	<script src="js/table_nauthiz.js" type="text/javascript"></script>
	<script src="js/table_isa.js" type="text/javascript"></script>	
	<script src="js/table_jera.js" type="text/javascript"></script>	
	<script src="js/table_eihwaz.js" type="text/javascript"></script>	
	<script src="js/table_perthro.js" type="text/javascript"></script>	
	<script src="js/table_algiz.js" type="text/javascript"></script>
	<script src="js/table_sowilo.js" type="text/javascript"></script>	
	<script src="js/table_tiwaz.js" type="text/javascript"></script>	
	<script src="js/table_berkano.js" type="text/javascript"></script>
	<script src="js/table_ehwaz.js" type="text/javascript"></script>	
	<script src="js/table_mannaz.js" type="text/javascript"></script>
	<script src="js/table_laguz.js" type="text/javascript"></script>
	<script src="js/table_ingwaz.js" type="text/javascript"></script>
	<script src="js/table_othala.js" type="text/javascript"></script>
	<script src="js/table_dagaz.js" type="text/javascript"></script>
	
	<script src="js/table_table.js" type="text/javascript"></script>
	<script src="js/table_table_null.js" type="text/javascript"></script>	
	<script src="js/table_table_one_null.js" type="text/javascript"></script>
	
	<script src="js/table_pm.js" type="text/javascript"></script>	
	<script src="js/table_all_pm.js" type="text/javascript"></script>																								 		
<?php endif; ?>    
    
</head>
<body>