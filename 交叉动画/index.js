$(document).ready(function(){
	$('.hamburgler').click(function(e){
		e.preventDefault();
		$(this).toggleClass('no-hamburgler');
	});
})

/* click the burger icon to see the animation */