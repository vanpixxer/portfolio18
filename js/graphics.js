( function() {
  'use-strict';

     function onGalleryImageClick() {
       var galleryImagesList = document.querySelectorAll(".graphics__gallery li");
         var galleryImages = Array.prototype.slice.call(galleryImagesList,0);

         galleryImagesList.forEach(function(image) {

           image.addEventListener("click", function(event) {
                 galleryImageOpen(event.target);
           })
         })
     }

     function galleryImageOpen(image) {
         var imageSrc = image.getAttribute("src");
         var openedImage = '<div class="graphics__backdrop"><img src="' + imageSrc + '" alt="" /><span class="graphics__backdrop-close">x</span></div>';

         document.body.insertAdjacentHTML("beforeend", openedImage);
         galleryImageClose();
     }

     function galleryImageClose() {
         var closeButton = document.querySelector(".graphics__backdrop-close");

         closeButton.addEventListener("click", function() {
           var backdrop = document.querySelector(".graphics__backdrop");
           backdrop.remove();
         })
     }



onGalleryImageClick();
}) ();
