<?php if($_GET['page']!='full' && $_GET['page']!='runa' && $_GET['page']!='plus' && $_GET['page']!='minus' && $_GET['page']!='social'): ?>
<div style="position: fixed; bottom: 0; width: 100%; background-color: #eaeaea; opacity: 0.6;" id="foot">
	<div style="padding: 7px;">
		<center style="color: #000000;">Copyright © 2011-2016, Shaposhnikov Oleg. http://runa-odin.org, E-mail: runa-odin@yandex.ru<br>
		Разработка программного обеспечения: Алексей Золотарев</center>
	</div>
</div> 
<?php endif; ?>

<div class="modal fade" tabindex="-1" role="dialog" id="questionExit">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">ВНИМАНИЕ!!!</h4>
      </div>
      <div class="modal-body">
        <p>Тест не завершен. Вы желаете выйти?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" id="runic-btn-location" onclick="Runic.jump(this);">Перейти</button>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
	$(function(){
		var l = location.href;
		if(l.indexOf('?page=full')!=0 || l.indexOf('?page=runa')!=0 || l.indexOf('?page=minus')!=0 || l.indexOf('?page=plus')!=0) {
			$('.lang_menu1').on('click', function() {
				Runic.changeLocation('lang_menu1');
			});
			$('.lang_menu21').on('click', function() {
				Runic.changeLocation('lang_menu21');
			});	
			$('.lang_menu22').on('click', function() {
				Runic.changeLocation('lang_menu22');
			});	
			$('.lang_menu31').on('click', function() {
				Runic.changeLocation('lang_menu31');
			});			
			$('.lang_menu32').on('click', function() {
				Runic.changeLocation('lang_menu32');
			});		
			$('.lang_menu41').on('click', function() {
				Runic.changeLocation('lang_menu41');
			});	
			$('.lang_menu42').on('click', function() {
				Runic.changeLocation('lang_menu42');
			});	
			$('.lang_menu43').on('click', function() {
				Runic.changeLocation('lang_menu43');
			});	
			$('.lang_menu6').on('click', function() {
				Runic.changeLocation('lang_menu6');
			});												
		}
	});	
</script> 


<?php if($_GET['page']=='full' || $_GET['page']=='runa' || $_GET['page']=='plus' || $_GET['page']=='minus'): ?>
<script type="text/javascript">
	$(function(){
		getWorkTable(Runic.cookie.getCookie('login'));
	});	
</script> 
<?php endif; ?>

<?php if($_GET['page']=='my'): ?>
	<script type="text/javascript">
		$(function(){
			$('#inputDate').datepicker({
			    format: "dd.mm.yyyy",
			    language: "ru",
			    autoclose: true,
			    orientation: "bottom auto"
			});			
			<?php if(empty($_COOKIE['login'])): ?>
			$('#form_login').show();
			<?php else: ?>		
			$('#form_login').hide();
			getWorkTable(Runic.cookie.getCookie('login'));
			getUserName('user_name');
			getLastLogin('user_last_login');
			getTestSuccess('table_user_result');
				<?php if($_GET['res']==''): ?>
				$('#user_info').show(function(){
					$("#table_user_result").bootgrid({
						navigation: 2,
						formatters: {
							"link": function(column, row)
							{
								if(row.link != '') return "<a href=\""+row.link+"\">Показать результаты</a>";
								return '';
							}
		    			}				
					});						
				});
				<?php elseif($_GET['res']=='full'): ?>
				genReport('<?=$_GET['table']?>','<?=$_GET['table_null']?>','<?=$_GET['id']?>');
				<?php elseif($_GET['res']=='one'): ?>
				genReportOne('<?=$_GET['table']?>','<?=$_GET['i']?>','<?=$_GET['id']?>','<?=$_GET['runa']?>');				
				<?php elseif($_GET['res']=='plus' || $_GET['res']=='minus'): ?>
				genReportPM('<?=$_GET['table']?>','<?=$_GET['i']?>','<?=$_GET['id']?>','<?=$_GET['runa']?>');	
				<?php endif; ?>	
			<?php endif; ?>	
		});	
	</script> 		
<?php endif; ?>

<?php if($_GET['page']=='desc_full'): ?>
	<script type="text/javascript">
		var cook = Runic.cookie.getCookie('lang');
		if(!cook) cook = 'ru';
		$('.nav-tabs a').click(function(e) {
			e.preventDefault();
						
			var url = $(this).attr("data-url");
			var href = this.hash;
			var pane = $(this);

			$(href).load(url+'_'+cook+'.html',function(result){      
				pane.tab('show');
			});
		});
		$('.nav-tabs a').on('shown.bs.tab', function(event){
		    var x = $(event.target)[0];         // active tab
		    var y = $(event.relatedTarget)[0];  // previous tab
		    $(y.hash).html('');
		});
		url = $('#home_tab').attr("data-url");
		$('#home').load(url+'_'+cook+'.html',function(result){
			$('.active a').tab('show');
		});
		
		function nextPageDesc(bt) {
			var next = $(bt).attr("data-next");
			var curr = $(bt).attr("data-curr");
			$('#'+next).load('/book/'+next+'_'+cook+'.html',function(result){      
				$('#'+curr).removeClass('active').removeClass('in').html('');
				$('#'+curr+'_tab').parent().removeClass('active');					
				$('#'+next).addClass('active').addClass('in');
				$('#'+next+'_tab').parent().addClass('active');				
			});			
		}			
	</script> 	
<?php endif; ?>

<?php if($_GET['page']=='desc_instr'): ?>
	<script type="text/javascript">
		$(function(){
			var cook = Runic.cookie.getCookie('lang');
			if(!cook) cook = 'ru';
			var url = '/book/desc_instr'
			$('#desc_instr').load(url+'_'+cook+'.html',function(result){      
				$('#desc_instr').show();
			});			
		});
	</script> 	
<?php endif; ?>	

<?php if($_GET['page']=='desc_test'): ?>
	<script type="text/javascript">
		$(function(){
			var cook = Runic.cookie.getCookie('lang');
			if(!cook) cook = 'ru';
			var url = '/book/desc_test'
			$('#desc_test').load(url+'_'+cook+'.html',function(result){      
				$('#desc_test').show();
			});			
		});
	</script> 	
<?php endif; ?>	
		
</body>
</html>
