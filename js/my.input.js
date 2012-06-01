/**
* 

  
<script src="js/jquery.min.js"></script>
<script src="js/my.input.js"></script>
<script src="js/my.tab.js"></script>

<script>
$(function(){
	 $('#input').input({attr:'#input'}); 
	 $('.tab').tab();
});

</script>
 
 
	<input id='input'  rel='show'>

	<div id='show' >
		 <span>�����Ƽ�</span>
		 <div class='tab'><a rel='t0' href=''>����</a> &nbsp;&nbsp;<a rel='t1'  href=''>����</a></div>
		 <div id='t0' class='value'>
		 	<span>�Ϻ�</span>��<span>����</span>��<span>���</span>
		 </div>
		 <div id='t1'  class='value'>
		 	<span>����</span>��<span>��ɽ</span>
		 </div>
	</div>
	
 
 


* author: sun
* 2012.06.01
* qq: 68103403
* 
*/
 
(function($){

 	$.fn.extend({  
 		input: function(options) {  
			var defaults = { 
				tab:'.tab a', 
				val:'.value span', 
				event: 'click',
				hide:'input'
			};
			var opts = $.extend(defaults,options); 
			var tab = opts.tab; 
			var val = opts.val; 
			var val_key = opts.val_key; 
			var event = opts.event; 
			var hide = opts.hide; 
		 	var s = '#'+$(this).attr('rel');
		  	$(s).hide();
		  	var obj = $(this);
			obj.bind(event,function(){  
				 $(s).show();
			});
			$(val).bind('click',function(){
				obj.val($(this).html());
				$(s).hide();
			});
			 $(document).click(function(e) {
					var t = $(e.target); 
					var v1 = s+','+hide+','+tab+','+s+' div,'+s+'  span,'+s+ ' ul,'+s+ ' li'+s+' dd'+s+' dl';
					if (!t.is(v1)) {
						$(s).hide(); 
					 
					}
				 
			});

    	}
	});
	
})(jQuery); 