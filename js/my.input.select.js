/**
* $().input_select({});
$(function(){
	 $('#data').input_select({list:'muit',click:'click',inner:'div'}); 

});
*
* author: sun
* 2012.05.16 
* qq: 68103403
* 
*/
 
(function($){

 	$.fn.extend({  
 		input_select: function(options) { 
			var defaults = {
				list:'muit',
				click:'click',
				inner:'div',
			};
			var opts = $.extend(defaults,options); 
			var a = '.'+opts.list; 
			var b = '.'+opts.click;
			var c = '.'+opts.list+" "+opts.inner;    
			var obj = this;
			$(b).click(function(){   
				if($(a).css('display')=='block'){
					$(a).hide();
				}else{
					$(a).show();
				} 
			});
			$(c).click(function(){ 
				$(obj).val($(this).html());
				$(a).hide();
			 });

			 $(document).click(function(e) {
					var t = $(e.target);
					var v1 = a+','+b+','+c+',';
					if (!t.is(v1)) {
						$(a).hide(); 
					}
			});

    	}
	});
	
})(jQuery); 