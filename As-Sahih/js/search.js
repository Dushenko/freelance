$(document).ready(function(){
	$('#icon').on('click',function(){
		$('#search').addClass('search-active');
		$('#nav > ul').hide(300);
	})

	$('.close-search').on('click',function(){
		$('#search').removeClass('search-active');
		$('#nav > ul').show(300);
	})

	$('#iconF').on('click',function(){
		$('#searchF').addClass('search-active');
		$('#footer__nav > ul').hide(300);
	})

	$('.close-searchF').on('click',function(){
		$('#searchF').removeClass('search-active');
		$('#footer__nav > ul').show(300);
	})
})


// window.onload = function() { 
// 	const icon = document.querySelector('#icon'); 
// 	const nav = document.querySelector("#nav");
// 	const search = document.querySelector("#search");
// 	const searchInput = document.querySelector("#inputsearch");

// 	document.addEventListener('click', function (e) { 
// 		if (e.target == icon) {
// 			search.classList.add('search-active'); 
// 			nav.classList.add("dnone"); 
// 		} else 
// 		if (e.target != searchInput)
// 		{
// 			search.classList.remove('search-active'); 
// 			nav.classList.remove("dnone")
// 		}
// 	});

// 	// const iconFooter = document.querySelector('#icon'); 
// 	// const navFooter = document.querySelector("#footerNav");
// 	// const searchFooter = document.querySelector("#searchFooter");
// 	// const searchInput = document.querySelector("#inputsearchFooter");

// 	// document.addEventListener('click', function (e) { 
// 	// 	if (e.target == icon) {
// 	// 		searchFooter.classList.add('search-active'); 
// 	// 		navFooter.classList.add("dnone"); 
// 	// 	} else 
// 	// 	if (e.target != searchInput)
// 	// 	{
// 	// 		searchFooter.classList.remove('search-active'); 
// 	// 		navfooter.classList.remove("dnone")
// 	// 	}
// 	// });
// };