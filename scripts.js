$(document).ready(function(e) {
    
	$('.nav a').click(function(){
		
		var page = $(this).attr('href');
		
		var params = {
			
			duration: 800,
			easing: 'swing'
			
			};
			
			$.scrollTo(page, params);
			
			return false;	
		
		});
	
});