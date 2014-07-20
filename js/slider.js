(function(){
	var buttonNext = document.querySelector('.carousel .nav-next');
	var buttonPrev = document.querySelector('.carousel .nav-prev');
	var carouselContainer = document.querySelector('.carousel-container');
	var bullets = document.querySelector('.lst-inline.nav-points');
	var cont=0;
	bullets.children[cont].children[0].classList.add('bullet_active');
	
	buttonNext.addEventListener(
		"click", function(evt){
 			evt.preventDefault();

 			//var carouselContainer = document.querySelector('.carousel-container');
 			var currentActive = carouselContainer.querySelector('.carousel-container .active');
 			currentActive.classList.remove('active');
 			bullets.children[cont].children[0].classList.remove('bullet_active');

 			if (currentActive.nextElementSibling) {
     			currentActive.nextElementSibling.classList.add('active');
     			cont++;
   			} else {
     			carouselContainer.children[0].classList.add('active');
     			cont = 0;
   			}
   			bullets.children[cont].children[0].classList.add('bullet_active');
	});

	buttonPrev.addEventListener(
		"click", function(evt){
 			evt.preventDefault();

 			//var carouselContainer = document.querySelector('.carousel-container');
 			var currentActive = carouselContainer.querySelector('.carousel-container .active');
 			currentActive.classList.remove('active');
 			bullets.children[cont].children[0].classList.remove('bullet_active');

 			if (currentActive.previousElementSibling) {
     			currentActive.previousElementSibling.classList.add('active');
     			cont--;
   			} else {
     			carouselContainer.children[carouselContainer.children.length -1].classList.add('active');
     			cont = carouselContainer.children.length -1;
   			}
   			bullets.children[cont].children[0].classList.add('bullet_active');
	});

	bullets.addEventListener(
		"click", function(evt){
			evt.preventDefault();

			var elemPress = event.target;
			//call the function to obtein the index of the bullet
			var  elemPressIndex= getChildrenIndex(elemPress.parentNode);
			//remove the style at the actual bullet and image
			bullets.children[cont].children[0].classList.remove('bullet_active');
			carouselContainer.children[cont].classList.remove('active');
			//add the style to the clicked bullet and show the new image
			bullets.children[elemPressIndex].children[0].classList.add('bullet_active');
			carouselContainer.children[elemPressIndex].classList.add('active');

			cont = elemPressIndex;
			/*console.log(elemPress);
			console.log(elemPressIndex);*/
	});

	//To get de index of the element that we press when it's inside the NodeList
	function getChildrenIndex(ele){
	    //IE is simplest and fastest
	    if(ele.sourceIndex){
	        return ele.sourceIndex - ele.parentNode.sourceIndex - 1;
	    }
	    //other browsers
	    var i=0;
	    while(ele = ele.previousElementSibling){
	        i++;
	    }
	    return i;
	}
///end of the function
})();