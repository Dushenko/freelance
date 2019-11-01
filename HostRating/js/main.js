document.addEventListener("DOMContentLoaded", function() {
	var burger = document.querySelector('.burger-opener svg'),
			menu = document.querySelector('nav.nav');
	
			burger.addEventListener('click', function(){
				if (this.classList.contains('active')) {
					this.classList.remove('active');
					menu.classList.remove('nav_active');
				}
				else {
					this.classList.add('active');
					menu.classList.add('nav_active')
				}
			})

	// Accordion

	var animationDuration = 500;

	var closeBtn = document.querySelectorAll('.toTop-btn');

	for( var i = 0; i < closeBtn.length; i++) {
		var btn = closeBtn[i];
		btn.addEventListener('click', function(e){
			var parent1 = this.parentNode.parentNode.parentNode;
			var parent2 = this.parentNode.parentNode.parentNode.parentNode;
			var parent = parent1.className == "field" ? parent1 : parent2;

			parent.querySelectorAll('.readMore')[0].classList.remove('field__dropBtn_active');
			parent.querySelectorAll('.comments')[0].classList.remove('field__dropBtn_active');

			parent.querySelector('.commentsDrop').classList.remove('commentsDrop_active');
			parent.querySelector('.readmoreDrop').classList.remove('readmoreDrop_active');
		})
	}

	var comBTN = document.getElementsByClassName('comments');
	for( var i = 0; i < comBTN.length; i++) {
		var target = comBTN[i];

		target.addEventListener('click', function(e){
			var parent = this.parentNode.parentNode.parentNode.parentNode.parentNode;
			e.target.classList.contains('field__dropBtn_active') ? e.target.classList.remove('field__dropBtn_active') :  e.target.classList.add('field__dropBtn_active');
			parent.querySelector('.readMore').classList.remove('field__dropBtn_active');

			function anime(tar) {
				if (tar.className == "commetsDrop commentsDrop") {
					tar.classList.add('commentsDrop_active');
					
				}
				else if(tar.className == "commetsDrop commentsDrop commentsDrop_active") {
					tar.classList.remove('commentsDrop_active');

				}
			}

			for( var a = 0; a < parent.childNodes.length; a++) {
				if (parent.childNodes[a].className == "commetsDrop readmoreDrop readmoreDrop_active") {
					parent.childNodes[a].classList.remove('readmoreDrop_active');
					window.setTimeout(function(){
						for( var b = 0; b < parent.childNodes.length; b++) {
							anime(parent.childNodes[b]);
						}
					}, animationDuration)
				} else {
					for( var b = 0; b < parent.childNodes.length; b++) {
						anime(parent.childNodes[b]);
					}
				}
			}

		})
	}

	var readBTN = document.getElementsByClassName('readMore');
	for( var i = 0; i < readBTN.length; i++) {
		var target = readBTN[i];

		target.addEventListener('click', function(e){
			var parent = this.parentNode.parentNode.parentNode.parentNode.parentNode;
			e.target.classList.contains('field__dropBtn_active') ? e.target.classList.remove('field__dropBtn_active') :  e.target.classList.add('field__dropBtn_active');
			parent.querySelector('.comments').classList.remove('field__dropBtn_active');

			function anime(tar) {
				if (tar.className == "commetsDrop readmoreDrop") {
					tar.classList.add('readmoreDrop_active');
				}
				else if(tar.className == "commetsDrop readmoreDrop readmoreDrop_active") {
					tar.classList.remove('readmoreDrop_active');
				}
			}

			for( var a = 0; a < parent.childNodes.length; a++) {
				if (parent.childNodes[a].className == "commetsDrop commentsDrop commentsDrop_active") {
					parent.childNodes[a].classList.remove('commentsDrop_active');
					window.setTimeout(function(){
						for( var b = 0; b < parent.childNodes.length; b++) {
							anime(parent.childNodes[b]);
						}
					}, animationDuration)
				} else {
					for( var b = 0; b < parent.childNodes.length; b++) {
						anime(parent.childNodes[b]);
					}
				}
			}
		})
	}



})