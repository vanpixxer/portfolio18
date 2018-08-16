( () => {
  'use-srict';

// Nav scrolling
const mobileWidth = 860;

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


  // Photo Gallery
  const onGalleryImageClick = () => {
    const galleryImageList = document.querySelectorAll(".photo__gallery li");
    const galleryImages = [...galleryImageList];
    galleryImages.forEach(image => {
         image.addEventListener("click", event => {
             galleryImageOpen(event.target);
      });
    });
  };
  const galleryImageOpen = image => {
       const imageSrc = image.getAttribute("src");
       const openedImage = `<div class='photo__backdrop'>img src='${imageSrc}' alt='' />
       <span class="photo__backdrop-close">X</span></div>`;

       document.body.insertAdjacentHTML("beforeend", openedImage);
   }
  onNavItemClick();
  onGalleryImageClick();
}) ();
