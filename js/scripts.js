$(document).ready(function() {	
	// Scroll to Top
	jQuery('.scrolltotop').click(function(){
		jQuery('html').animate({'scrollTop' : '0px'}, 550);
		return false;
	});
	
	jQuery(window).scroll(function(){
		var upto = jQuery(window).scrollTop();
		if(upto > 500) {
			jQuery('.scrolltotop').fadeIn();
		} else {
			jQuery('.scrolltotop').fadeOut();
		}
	});
	
	// Smooth Scrolling for Navigation Links
	$('.nav-link, .mobile-nav-link').click(function(e) {
		e.preventDefault();
		
		var target = $(this).attr('href');
		var targetSection = $(target);
		
		if (targetSection.length) {
			$('html, body').animate({
				scrollTop: targetSection.offset().top - 100
			}, 800);
		}
	});
	
	// Close mobile menu when navigation link is clicked
	$('.mobile-nav-link').click(function() {
		const offcanvas = document.getElementById('offcanvas');
		const overlay = document.getElementById('overlay');
		
		offcanvas.classList.add('translate-x-full');
		overlay.classList.add('hidden');
	});
	
	// Sticky Header Scroll Effect
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('header').addClass('shadow-lg bg-[#161616]/95 backdrop-blur-sm');
		} else {
			$('header').removeClass('shadow-lg bg-[#161616]/95 backdrop-blur-sm');
		}
	});
});

// offcanvas menu 
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const offcanvas = document.getElementById('offcanvas');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  offcanvas.classList.remove('translate-x-full');
  overlay.classList.remove('hidden');
});

const closeMenu = () => {
  offcanvas.classList.add('translate-x-full');
  overlay.classList.add('hidden');
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Working Video Player Functionality
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("heroVideo");
  const playButtonWrapper = document.getElementById("playButtonWrapper");
  const videoHeading = document.getElementById("videoHeading");

  if (video && playButtonWrapper && videoHeading) {
    // Handle play button click
    playButtonWrapper.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent video click event
      if (video.paused) {
        video.play();
        // Hide play button and text using style.display for immediate effect
        playButtonWrapper.style.display = "none";
        videoHeading.style.display = "none";
      }
    });

    // Handle video click (when playing) - Pause functionality
    video.addEventListener('click', function() {
      if (!video.paused) {
        video.pause();
        // Show play button and text
        playButtonWrapper.style.display = "block";
        videoHeading.style.display = "block";
      }
    });

    // Show elements again when video ends
    video.addEventListener("ended", function () {
      playButtonWrapper.style.display = "block";
      videoHeading.style.display = "block";
    });
  }
});