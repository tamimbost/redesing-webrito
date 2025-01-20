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
        this.VideoPopupModel();
        this.TypingAnimationActivation();
        this.SplitTextAnimationOne();
        this.TextAnimationTwo();
      },
      TextAnimationTwo: function (){
        let splitTitleLines = gsap.utils.toArray(".title-anim");

        splitTitleLines.forEach(splitTextLine => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: 'top 90%',
              end: 'bottom 60%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none'
            }
          });
    
          const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" })
          tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
        });
      },
      SplitTextAnimationOne: function (){
        gsap.set(".experience", {
          y: 50,
          opacity: 0,
        })
        let homeAgency = gsap.timeline()
      
        // Charchater Come long Animation 
        let hero__title = document.querySelector(".hero__title")
        let split_hero__title = new SplitText(hero__title, { type: "chars" })
        homeAgency.from(split_hero__title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
        homeAgency.to(".experience", {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        }, '-=1.5')
      },
      TypingAnimationActivation: function (){
        $(document).ready(() => {
          const texts = [" - Shopify", " - WordPress", " - UI/UX", " - Webflow"]
          let count = 0
          let index = 0
          let currentText = ""
          let letter = ""
        
          function type() {
            if (count === texts.length) {
              count = 0
            }
            currentText = texts[count]
            letter = currentText.slice(0, ++index)
        
            $(".typed-text").text(letter)
            if (letter.length === currentText.length) {
              setTimeout(erase, 1000)
            } else {
              setTimeout(type, 100)
            }
          }
        
          function erase() {
            letter = currentText.slice(0, --index)
            $(".typed-text").text(letter)
            if (letter.length === 0) {
              count++
              index = 0
              setTimeout(type, 500)
            } else {
              setTimeout(erase, 50)
            }
          }
        
          setTimeout(type, 1000)
        })
      },
      VideoPopupModel: function (){
        $(document).ready(function() {
          $('.hero-fist-video').on('click', function() {
            $('#video-overlay').css('display', 'block').animate({ opacity: 1 }, 300);
            $('.video-popup').addClass('active');
            $('#popup-video')[0].play();
          });
        
          $('#close-video, #video-overlay').on('click', function(e) {
            if (e.target !== this) return;
            $('#video-overlay').animate({ opacity: 0 }, 300, function() {
              $(this).css('display', 'none');
            });
            $('.video-popup').removeClass('active');
            $('#popup-video')[0].pause();
            $('#popup-video')[0].currentTime = 0;
          });
        });
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
