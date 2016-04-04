//-----------------------
// DOCUMENT READY
//-----------------------

$(document).ready(function(){
	//on click event that causes blinking 
	$('.js-like').on('click', function(event){
		event.preventDefault();
		$(this).text('Liked')
			.closest('.news-item')
			.addClass('is-liked');
	});

	$('.js-add-link').on('click', function(event){
		event.preventDefault();
		$('.js-form').toggleClass('is-visible');
	});
});