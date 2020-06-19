$(document).ready(function () {
  const mMenuBtm = $(".m-menu-button");
  const mMenu = $('.m-menu')
  const tab = $(".tab");

  mMenuBtm.on('click', function () {
    mMenu.toggleClass('active');
    $('body').toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".button-next",
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  })
});