/**
*  
$(function(){
	 $('ul').tab(); 
	 //or 
	 
	  $('ul').tab({event:'hover'}); 
	 
}); 
*
* author: sun
* 2012.05.16 
* qq: 68103403
* 
*/
 
(function($){

	$.fn.extend({  
		tab: function(options) { 
			var defaults = {
				active:'active',
				event: 'click'
			};
			var opts = $.extend(defaults,options);  
			var obj = this;
			var at = opts.active; //actived class 
			var e = opts.event; // event,like click,hover
			var i = 0;
			var j = 0;
			$(this).find('li a').each(function(){ 
				selected(i,this);
				i++;
				$(this).attr('href','javascript:void(0);').attr('onclick',"return false");
			}).bind(e,function(){
				 var h = "#"+$(this).attr('rel'); 
				 $(obj).find('li a').each(function(){ 
					var current = "#"+$(this).attr('rel');  
					if(h ==  current ){  
						$(h).show();
						$(this).addClass(at);
					}else{
						$(current).hide();
						$(this).removeClass(at);
					}
				})

			});
			function selected(i,obj){ 
				var h = "#"+$(obj).attr('rel'); 
				if(i==0){
					$(obj).addClass(at);
					$(h).show();
				}else{
					$(h).hide();
				}

			}
		}

	});

})(jQuery); 