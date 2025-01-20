(function ($) {
  "use strict";

  var Medi = {
    init: function () {
      this.Basic.init();
    },

    Basic: {
      init: function () {
        this.preloader();
        this.scrollTop();
        this.BackgroundImage();
        this.Animation();
        this.MobileMenu();
        this.SidebarMenu();
        this.Counter();
        this.HomeServiceSlider();
        this.HomeProjectSlider();
        this.HomeBlogSlider();
        this.HomeAwardSlider();
        this.TestimonialSliderOne();
        this.TestimonialSliderTwo();
        this.PartnerSliderOne();
        this.CommonContentSlider();
        this.DevelopmentProcessSlider();
        this.VideoPopup();
        this.BannerEffect();
        this.SingleFileUpload();
        this.NewsLetter();
        this.Tools();
        this.PhoneNumber();
      },
      PhoneNumber: function () {
        $(".webrito-phoneNumber").intlTelInput({
          initialCountry: "bd",
          separateDialCode: true,
          utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js",
        });
      },
      Tools: function () {
        $(document).ready(function () {
          // $(".popular_service_slider").mouseenter(function () {
          //   $(".single_accordion").addClass("animation_paused");
          // });

          // $(".popular_service_slider").mouseleave(function () {
          //   $(".single_accordion").removeClass("animation_paused");
          // });

          $(".about_rtl").mouseenter(function () {
            $(".single_about_area_content").addClass("animation_paused");
          });

          $(".about_rtl").mouseleave(function () {
            $(".single_about_area_content").removeClass("animation_paused");
          });
        });

        // Home service accordian
        $(document).ready(function () {
          if ($(window).width() < 992) {
            $(".single_accordion").click(function () {
              if (!$(this).hasClass("single_accordion_on")) {
                // Close all accordions
                $(".single_accordion").removeClass("single_accordion_on");
                // Open the clicked accordion
                $(this).addClass("single_accordion_on");
              } else {
                // Close the clicked accordion
                $(this).removeClass("single_accordion_on");
              }
            });

            $(document).click(function (e) {
              if (!$(e.target).closest(".single_accordion").length) {
                // Close all accordions when clicking outside
                $(".single_accordion").removeClass("single_accordion_on");
              }
            });
          }
        });

        // Adjust the class on window resize
        $(window).resize(function () {
          if ($(window).width() >= 992) {
            $(".single_accordion").removeClass("single_accordion_on");
          }
        });

        // Home Cutting-edge
        $(document).ready(function () {
          if ($(window).width() < 992) {
            $(".single_utilize").click(function () {
              if (!$(this).hasClass("single_utilize_on")) {
                // Close all accordions
                $(".single_utilize").removeClass("single_utilize_on");
                // Open the clicked accordion
                $(this).addClass("single_utilize_on");
              } else {
                // Close the clicked accordion
                $(this).removeClass("single_utilize_on");
              }
            });

            $(document).click(function (e) {
              if (!$(e.target).closest(".single_utilize").length) {
                // Close all accordions when clicking outside
                $(".single_utilize").removeClass("single_utilize_on");
              }
            });
          }
        });

        // Adjust the class on window resize
        $(window).resize(function () {
          if ($(window).width() >= 992) {
            $(".single_accordion").removeClass("single_accordion_on");
          }
        });
      },
      NewsLetter: function () {
        $(document).ready(function () {
          setTimeout(function () {
            $("#newsletterModal").modal("show");
          }, 1500);
        });
        $(document).ready(function () {
          setTimeout(function () {
            $("#newsletterModal-two").modal("show");
          }, 1500);
        });
      },
      preloader: function () {
        $(window).on("load", function () {
          $(".preloader").delay(1500).fadeOut("slow");
        });
      },
      scrollTop: function () {
        $(window).on("scroll", function () {
          var ScrollBarPosition = $(this).scrollTop();
          if (ScrollBarPosition > 200) {
            $(".scroll-top").fadeIn();
          } else {
            $(".scroll-top").fadeOut();
          }
        });
        $(".scroll-top").on("click", function () {
          $("body,html").animate({
            scrollTop: 0,
          });
        });
      },
      BackgroundImage: function () {
        $("[data-background]").each(function () {
          $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
      },
      Animation: function () {
        var wow = new WOW({
          boxClass: "wow", // animated element css class (default is wow)
          animateClass: "animated", // animation css class (default is animated)
          // offset: 0, // distance to the element when triggering the animation (default is 0)
          mobile: true, // trigger animations on mobile devices (default is true)
          // live: true, // act on asynchronously loaded content
        });
        wow.init();
        new WOW().init();
      },
      MobileMenu: function () {
        jQuery(window).on("scroll", function () {
          if (jQuery(window).scrollTop() > 250) {
            jQuery(".main-header").addClass("sticky-on");
          } else {
            jQuery(".main-header").removeClass("sticky-on");
          }
        });
        $(".open_mobile_menu").on("click", function () {
          $(".mobile_menu_wrap").toggleClass("mobile_menu_on");
        });
        $(".open_mobile_menu").on("click", function () {
          $("body").toggleClass("mobile_menu_overlay_on");
        });
        if ($(".mobile_menu li.dropdown ul").length) {
          $(".mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
          $(".mobile_menu li.dropdown .dropdown-btn").on("click", function () {
            $(this).prev("ul").slideToggle(500);
          });
        }
        $("#m-main-nav li").click(function () {
          $(this).toggleClass("mobile_menu_active");
        });
      },
      SidebarMenu: function () {
        if ($(".sidebar_dropdown").length) {
          $(".sidebar_dropdown").append('<div class="sidebar-dropdown-btn"><span class="fas fa-plus"></span></div>');
          $(".sidebar-dropdown-btn").on("click", function () {
            $(this).prev("ul").slideToggle(500);
            $(this).html($(this).html() == '<span class="fas fa-plus"></span>' ? '<span class="fas fa-minus"></span>' : '<span class="fas fa-plus"></span>');
          });
        }
      },
      Counter: function () {
        if ($(".odometer").length) {
          $(".odometer").appear();
          $(document.body).on("appear", ".odometer", function (e) {
            var odo = $(".odometer");
            odo.each(function () {
              var countNumber = $(this).attr("data-count");
              $(this).html(countNumber);
            });
            window.odometerOptions = {
              format: "d",
            };
          });
        }
      },
      HomeServiceSlider: function () {
        $(".brand_service_slider").slick({
          dots: false,
          infinite: true,
          speed: 8000,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          cssEase: "linear",
          pauseOnFocus: false,
          pauseOnHover: false,
          variableWidth: true,
          // responsive: [
          //   {
          //     breakpoint: 1024,
          //     settings: {
          //       slidesToShow: 3,
          //       slidesToScroll: 3,
          //       infinite: true,
          //       dots: true,
          //     },
          //   },
          //   {
          //     breakpoint: 600,
          //     settings: {
          //       slidesToShow: 2,
          //       slidesToScroll: 2,
          //     },
          //   },
          //   {
          //     breakpoint: 480,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //     },
          //   },
          // ],
        });
        // $(".popular_service_slider").slick({
        //   vertical: true,
        //   verticalSwiping: true,
        //   slidesToShow: 5,
        //   slidesToScroll: 1,
        //   autoplay: false,
        //   autoplaySpeed: 0,
        //   speed: 8000,
        //   cssEase: "linear",
        //   infinite: true,
        //   arrows: false,
        //   touchMove: true,
        //   swipeToSlide: true,
        //   swipe: true,
        // });
      },
      HomeProjectSlider: function () {
        $(".project_slider_wrapper").slick({
          infinite: true,
          arrows: true,
          prevArrow: `<div class="slick-prev slick-project-arrow button-effect-outer"><div class="button-effect is-left"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          nextArrow: `<div class="slick-next slick-project-arrow button-effect-outer"><div class="button-effect"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                // autoplay: true,
              },
            },
          ],
        });

        //Partner Slider

        $(".brand_slider_one").slick({
          infinite: true,
          arrows: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          pauseOnHover: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
              },
            },
          ],
        });

        //Partner Slider Two

        $(".brand_slider_content_area_two").slick({
          infinite: true,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          pauseOnHover: false,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
              },
            },
          ],
        });
      },
      HomeBlogSlider: function (options) {
        $(".blog_slider_wrapper").slick({
          infinite: true,
          arrows: true,
          prevArrow: `<div class="slick-prev slick-project-arrow button-effect-outer"><div class="button-effect is-left"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          nextArrow: `<div class="slick-next slick-project-arrow button-effect-outer"><div class="button-effect"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          pauseOnHover: false,
          autoplaySpeed: 2000,
          responsive: [
            // {
            //   breakpoint: 1024,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 1,
            //     infinite: true,
            //     dots: false,
            //     arrows: true,
            //   },
            // },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
              },
            },
          ],
        });
      },
      HomeAwardSlider: function () {
        $(".awared_slider_area").slick({
          dots: false,
          infinite: true,
          speed: 8000,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          cssEase: "linear",
          pauseOnFocus: false,
          pauseOnHover: false,
          rtl: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ],
        });
      },
      TestimonialSliderOne: function () {
        $(".testimonial_slider_area_one").slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                // dots: true,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      },
      TestimonialSliderTwo: function () {
        $(".testimonial_slider_area_two").slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                // dots: true,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      },
      PartnerSliderOne: function () {
        $(".partner-slider-one").slick({
          dots: false,
          infinite: true,
          speed: 8000,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          cssEase: "linear",
          pauseOnFocus: false,
          pauseOnHover: false,
          variableWidth: true,
          // responsive: [
          //   {
          //     breakpoint: 1024,
          //     settings: {
          //       slidesToShow: 5,
          //       slidesToScroll: 1,
          //       infinite: true,
          //       // dots: true,
          //     },
          //   },
          //   {
          //     breakpoint: 800,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //     },
          //   },
          //   {
          //     breakpoint: 480,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //     },
          //   },
          // ],
        });

        $(".partner-slider-two").slick({
          dots: false,
          infinite: true,
          speed: 8000,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          arrows: false,
          cssEase: "linear",
          pauseOnFocus: false,
          pauseOnHover: false,
          variableWidth: true,
          rtl: true,
          // responsive: [
          //   {
          //     breakpoint: 1024,
          //     settings: {
          //       slidesToShow: 5,
          //       slidesToScroll: 1,
          //       infinite: true,
          //       // dots: true,
          //     },
          //   },
          //   {
          //     breakpoint: 800,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //     },
          //   },
          //   {
          //     breakpoint: 480,
          //     settings: {
          //       slidesToShow: 1,
          //       slidesToScroll: 1,
          //     },
          //   },
          // ],
        });
      },
      CommonContentSlider: function () {
        $(".common-content-slider-wrap").slick({
          infinite: true,
          arrows: true,
          prevArrow: `<div class="slick-prev slick-project-arrow button-effect-outer"><div class="button-effect is-left"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          nextArrow: `<div class="slick-next slick-project-arrow button-effect-outer"><div class="button-effect"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          pauseOnHover: false,
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                autoplay: true,
              },
            },
          ],
        });
      },
      DevelopmentProcessSlider: function () {
        $(".development-items-slider").slick({
          dots: false,
          infinite: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          arrows: true,
          prevArrow: `<div class="slick-prev slick-project-arrow button-effect-outer"><div class="button-effect is-left"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          nextArrow: `<div class="slick-next slick-project-arrow button-effect-outer"><div class="button-effect"><div class="button-icons"><div class="default-icon"><img src="assets/img/icon/arrow-right-blue.svg" alt=""></div><div class="default-icon icon-is-absolute"><img src="assets/img/icon/arrow-right-white.svg" alt=""></div></div><div class="button-effect-bg"></div></div></div>`,
          pauseOnHover: false,
          responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      },
      VideoPopup: function () {
        // Video Popup Script
        $(".play_video").magnificPopup({
          type: "iframe",
        });
      },
      BannerEffect: function () {
        $(document).ready(() => {
          let images = $("[data-home-images]").children();
          let words = $("[data-h1-words]").children();
          let wordWidth;
          let currentIndex = 1;

          setInterval(function () {
            images.removeClass("active done");
            images.eq(currentIndex).addClass("active");
            images.eq(currentIndex - 1).addClass("active done");

            let lettersCurrent = words.eq(currentIndex).find("em");
            let lettersPrev = words.eq(currentIndex - 1).find("em");
            let delay = 100;

            lettersCurrent.each(function (index) {
              let element = $(this);
              setTimeout(function () {
                element.addClass("active");
              }, index * delay);
            });

            lettersPrev.each(function (index) {
              let element = $(this);
              setTimeout(function () {
                element.addClass("active done");
              }, index * delay);
            });
            words.find("em").not(lettersCurrent).not(lettersPrev).removeClass("active done");
            wordWidth = words.eq(currentIndex).width();
            $("[data-h1-words]").width(wordWidth + "px");
            currentIndex = (currentIndex + 1) % images.length;
          }, 3000);
        });
      },
      SingleFileUpload: function () {
        $(document).on("click", ".file-upload-button", function () {
          var fileInput = $(this).siblings(".fileInput");
          fileInput.trigger("click");
        });

        $(document).on("change", ".fileInput", function () {
          var fileName = $(this)
            .val()
            .replace(/C:\\fakepath\\/i, "");
          var fileUploadName = $(this).siblings(".file-upload-button").find(".file-upload-name");
          fileUploadName.text(fileName !== "" ? fileName : "Drag & Drop or choose files");
        });
      },
    },
  };
  jQuery(document).ready(function () {
    Medi.init();
  });
})(jQuery);
