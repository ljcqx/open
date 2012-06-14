$(function(){
 	$('.map li').click(function(){
 		$('.map_hide').hide();
 		$('#'+$(this).attr('rel')).show();
 		$('.map li').removeClass('active');
 		$(this).addClass('active');
 	});
 	
 	$('.map_show').hover(function(){
 		var j = $(this).attr('coords').split(',');
	 	var top=parseFloat(j[1])+parseFloat(26);
 		$('#port_'+$(this).attr('rel')).show()
 				.css('position','absolute')
 				.css('top',top+'px')
 				.css('left',j[0]+'px');
 	}).mouseout(function(){
 	 	$('#port_'+$(this).attr('rel')).hide();
 	});

});