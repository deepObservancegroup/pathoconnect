(function ($) {
  "use strict";
  $(document).ready(function () {
    /*-------------------------NAVBAR---------------------------- */
    $(window).on("scroll", function () {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("sticky");
      } else {
        $(".navbar-fixed-top").removeClass("sticky");
      }
    });

    // ---------------------------------------------//
    // Slick Slider
    // ---------------------------------------------//
    $(".slider").each(function () {
      var play = $(this).data("autoplay");
      var playSpeed = $(this).data("autoplay-speed");
      var nav = $(this).data("nav");
      var dot = $(this).data("dots");
      var slidesToshow = $(this).data("slides-to-show");
      var slidesToscroll = $(this).data("slides-to-scroll");
      var slideCenter = $(this).data("slick-center-mode");
      $(this).slick({
        arrows: nav,
        dots: dot,
        slidesToShow: slidesToshow,
        autoplay: play,
        autoplaySpeed: playSpeed,
        centerMode: slideCenter,
        slidesToScroll: slidesToscroll,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: slidesToshow < 2 ? slidesToshow : 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToshow < 2 ? slidesToshow : 3,
            },
          },
        ],
      });
      $(this).slickAnimation();
    });

    $(".slider-for").each(function () {
      var play = $(this).data("autoplay");
      var playSpeed = $(this).data("autoplay-speed");
      var nav = $(this).data("nav");
      var dot = $(this).data("dots");
      var slidesToshow = $(this).data("slides-to-show");
      var slidesToscroll = $(this).data("slides-to-scroll");
      var slideCenter = $(this).data("slick-center-mode");
      $(this).slick({
        arrows: nav,
        dots: dot,
        slidesToShow: slidesToshow,
        autoplay: play,
        autoplaySpeed: playSpeed,
        centerMode: slideCenter,
        slidesToScroll: slidesToscroll,
        asNavFor: ".slider-nav",
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: slidesToshow < 2 ? slidesToshow : 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: slidesToshow < 2 ? slidesToshow : 3,
            },
          },
        ],
      });
      $(this).slickAnimation();
    });

    $(".slider-nav").each(function () {
      var play = $(this).data("autoplay");
      var playSpeed = $(this).data("autoplay-speed");
      var nav = $(this).data("nav");
      var dot = $(this).data("dots");
      var slidesToshow = $(this).data("slides-to-show");
      var slidesToscroll = $(this).data("slides-to-scroll");
      var slideCenter = $(this).data("slick-center-mode");
      $(this).slick({
        arrows: nav,
        dots: dot,
        slidesToShow: slidesToshow,
        autoplay: play,
        autoplaySpeed: playSpeed,
        centerMode: slideCenter,
        slidesToScroll: slidesToscroll,
        asNavFor: ".slider-for",
        focusOnSelect: true,
      });
    });
  });

  $(window).on("load", function () {
    // ---------------------------------------------//
    //  Preloader
    //--------------------------------------------- //
    jQuery(".preloader").fadeOut(1000);
  });

  // ---------------------------------------------//
  //  Background
  //--------------------------------------------- //
  $("[data-background]").each(function () {
    $(this).attr(
      "style",
      "background-image:url(" + $(this).attr("data-background") + ")"
    );
  });
})(jQuery);
