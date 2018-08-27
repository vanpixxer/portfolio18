( function () {
  'use-srict';

var mobileWidth = 800;

// Nav scrolling
const onNavItemClick = () => {
   const navItemList = document.querySelectorAll(".section__link");
   const navItems = [...navItemList];

   navItems.forEach(item => {
     item.addEventListener("click", event => {
        event.preventDefault();

        const sectionId = event.target.getAttribute("href");

        scrollToSection(sectionId);
     })
   })
}
const scrollToSection = sectionId  => {
  let sectionPosition, sectionOffset;
  const navigationHeight = document.querySelector("nav").offsetHeight;
  const pageWidth = window.innerWidth;

  if(sectionId != "#") {
       sectionOffset = document.querySelector(sectionId).offsetTop;
       sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
  }else {
       sectionPosition = 0;
  }
  window.scrollTo ({
    'behaviour' : 'smooth',
    'left' : 0,
    'top' : sectionPosition
  })
}

// Navigation for Small Screens
 function reorderResponsiveMenu() {
  var pageWidth = window.innerWidth;
  var navContainer = document.querySelector("nav .nav__container");
  var navigation = document.querySelector("nav .nav__menu");
  var mobileNavigation = document.querySelector("body > .nav__menu");

      if(pageWidth <= mobileWidth && navigation) {
          document.body.insertAdjacentElement("afterbegin", navigation);
      } else if (pageWidth > mobileWidth && mobileNavigation) {
          navContainer.insertAdjacentElement("beforeend", mobileNavigation);
      }
}



  // Photo Gallery
  function onGalleryImageClick() {
    var galleryImagesList = document.querySelectorAll(".photo__gallery li");
      var galleryImages = Array.prototype.slice.call(galleryImagesList,0);

      galleryImagesList.forEach(function(image) {

        image.addEventListener("click", function(event) {
              galleryImageOpen(event.target);
        })
      })
  }

  function galleryImageOpen(image) {
      var imageSrc = image.getAttribute("src");
      var openedImage = '<div class="photo__backdrop"><img src="' + imageSrc + '" alt="" /><span class="photo__backdrop-close">x</span></div>';

      document.body.insertAdjacentHTML("beforeend", openedImage);
      galleryImageClose();
  }

  function galleryImageClose() {
      var closeButton = document.querySelector(".photo__backdrop-close");

      closeButton.addEventListener("click", function() {
        var backdrop = document.querySelector(".photo__backdrop");
        backdrop.remove();
      })
  }


  // GRAPHIC ART GALLERY








  window.addEventListener("resize", function() {
		reorderResponsiveMenu();
	});

  reorderResponsiveMenu();
  onNavItemClick();
  onGalleryImageClick();
//  onGraphicImageClick();
}) ();
