jQuery(document).ready(function (){


	    var galleryTop = new Swiper('.gallery-top', {
	    	slidesPerView: 1,
	    	slideToClickedSlide: true,
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	    });
	    var galleryThumbs = new Swiper('.gallery-thumbs', {
	    	direction: 'vertical',
	        spaceBetween: 10,
	        centeredSlides: false,
	        slidesPerView: 'auto',
	        touchRatio: 0.2,
	        slideToClickedSlide: true
	    });
	    galleryTop.params.control = galleryThumbs;
	    galleryThumbs.params.control = galleryTop;
    


});

// https://codepen.io/hagiang1305/pen/apxvEZ

// https://codepen.io/Grawl/pen/jmbway
// https://github.com/nolimits4web/Swiper/blob/master/demos/19-keyboard-control.html
// https://github.com/nolimits4web/Swiper/blob/master/demos/23-thumbs-gallery.html

// https://codepen.io/vcelim/pen/GvZGJR?editors=1010

// https://codepen.io/hagiang1305/pen/apxvEZ