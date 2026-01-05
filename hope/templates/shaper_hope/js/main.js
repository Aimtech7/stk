/**
 * @package Helix3 Framework
 * @author JoomShaper http://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2016 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or later
 */

jQuery(function ($) {
  // ************    START Helix 1.4 JS    ************** //
  // **************************************************** //

  function ensureOffcanvasUI() {
    if ($(".offcanvas-menu").length) {
      if ($(".offcanvas-menu .close-offcanvas").length === 0) {
        $(".offcanvas-menu").prepend(
          '<a href="#" class="close-offcanvas" aria-label="Close Menu">&times;</a>'
        );
      }
      if ($(".offcanvas-overlay").length === 0) {
        $('<div class="offcanvas-overlay"></div>').insertBefore(
          ".offcanvas-menu"
        );
      }
    }
  }

  function populateOffcanvasMenu() {
    var $offcanvas = $(".offcanvas-menu .offcanvas-inner");
    var $desktopNav = $(".sp-megamenu-parent.menu-fade");
    if ($offcanvas.length && $desktopNav.length && $offcanvas.find("ul").length === 0) {
      var $clone = $desktopNav.clone();
      $clone.removeClass("menu-fade d-none d-lg-block").addClass("offcanvas-nav");
      $offcanvas.prepend($clone);
    }
  }

  $(document).ready(function () {
    populateOffcanvasMenu();
  });

  //Default
  if (typeof sp_offanimation === "undefined" || sp_offanimation === "") {
    sp_offanimation = "default";
  }

  if (sp_offanimation == "default") {
    ensureOffcanvasUI();
    $(document).on("click", "#offcanvas-toggler", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("offcanvas");
    });

    ensureOffcanvasUI();
    $(document).on(
      "click",
      ".close-offcanvas, .offcanvas-overlay",
      function (event) {
        event.preventDefault();
        $(".off-canvas-menu-init").removeClass("offcanvas");
      }
    );
  }

  // Slide Top Menu
  if (sp_offanimation == "slidetop") {
    ensureOffcanvasUI();
    $(document).on("click", "#offcanvas-toggler", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("slide-top-menu");
    });

    ensureOffcanvasUI();
    $(document).on(
      "click",
      ".close-offcanvas, .offcanvas-overlay",
      function (event) {
        event.preventDefault();
        $(".off-canvas-menu-init").removeClass("slide-top-menu");
      }
    );
  }

  //Full Screen
  if (sp_offanimation == "fullscreen") {
    ensureOffcanvasUI();
    $(document).on("click", "#offcanvas-toggler", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("full-screen-off-canvas");
    });
    $(document).ready(function () {
      $(".off-canvas-menu-init").addClass("full-screen");
    });
    $(document).on(
      "click",
      ".close-offcanvas, .offcanvas-overlay",
      function (event) {
        event.preventDefault();
        $(".off-canvas-menu-init").removeClass("full-screen-off-canvas");
      }
    );
  }

  //Full screen from top
  if (sp_offanimation == "fullScreen-top") {
    ensureOffcanvasUI();
    $(document).on("click", "#offcanvas-toggler", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("full-screen-off-canvas-ftop");
    });
    $(document).ready(function () {
      $(".off-canvas-menu-init").addClass("full-screen-ftop");
    });
    $(document).on(
      "click",
      ".close-offcanvas, .offcanvas-overlay",
      function (event) {
        event.preventDefault();
        $(".off-canvas-menu-init").removeClass("full-screen-off-canvas-ftop");
      }
    );
  }

  //Dark with plus
  if (sp_offanimation == "drarkplus") {
    ensureOffcanvasUI();
    $(document).on("click", "#offcanvas-toggler", function (event) {
      event.preventDefault();
      $(".off-canvas-menu-init").addClass("new-look-off-canvas");
    });

    ensureOffcanvasUI();
    $(document).ready(function () {
      $(".off-canvas-menu-init").addClass("new-look");
    });
    $(document).on(
      "click",
      ".close-offcanvas,.offcanvas-overlay",
      function (event) {
        event.preventDefault();
        $(".off-canvas-menu-init").removeClass("new-look-off-canvas");
      }
    );
  }

  // if sticky header
  if ($("body.sticky-header").length > 0 && $("#sp-header").length > 0) {
    var fixedSection = $("#sp-header");
    // sticky nav
    var headerHeight = fixedSection.outerHeight();
    var stickyNavTop = fixedSection.offset().top;
    fixedSection.addClass("animated");
    fixedSection.before('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height("inherit");
    //add class
    fixedSection.addClass("menu-fixed-out");
    var stickyNav = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > stickyNavTop) {
        fixedSection
          .removeClass("menu-fixed-out")
          .addClass("menu-fixed fadeInDown");
        $(".nav-placeholder").height(headerHeight);
      } else {
        if (fixedSection.hasClass("menu-fixed")) {
          fixedSection
            .removeClass("menu-fixed fadeInDown")
            .addClass("menu-fixed-out");
          $(".nav-placeholder").height("inherit");
        }
      }
    };
    stickyNav();
    $(window).scroll(function () {
      stickyNav();
    });
  }
  // go to top
  if (typeof sp_gotop === "undefined") {
    sp_gotop = "";
  }

  if (sp_gotop) {
    // go to top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut(400);
      }
    });

    $(".scrollup").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  } // has go to top

  // Preloader
  if (typeof sp_preloader === "undefined") {
    sp_preloader = "";
  }

  if (sp_preloader) {
    $(window).on("load", function () {
      if ($(".sp-loader-with-logo").length > 0) {
        move();
      }
      setTimeout(function () {
        $(".sp-pre-loader").fadeOut();
      }, 1000);
    });
  } // has preloader
  //preloader Function
  function move() {
    var elem = document.getElementById("line-load");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
  // ************    END:: Helix 1.4 JS    ************** //
  // **************************************************** //

  // **************   START Mega SCRIPT   *************** //
  // **************************************************** //

  //mega menu
  $(".sp-megamenu-wrapper")
    .parent()
    .parent()
    .css("position", "static")
    .parent()
    .css("position", "relative");
  $(".sp-menu-full").each(function () {
    $(this).parent().addClass("menu-justify");
  });

  // boxlayout
  if ($("body.layout-boxed").length > 0) {
    var windowWidth = $("#sp-header").parent().outerWidth();
    $("#sp-header").css({ "max-width": windowWidth, left: "auto" });
  }

  // **************   END:: Mega SCRIPT   *************** //
  // **************************************************** //

  // **************  START Others SCRIPT  *************** //
  // **************************************************** //

  //donation js
  var donation_input = $(".sppb-addon-donation .donation-ammount-wrap > input");
  donation_input.on("click", function () {
    console.log("test");
    // remove previous active class and add class
    donation_input.removeClass("active");
    $(this).addClass("active");

    var currency = $(".sppb-addon-donation .donation-ammount-wrap").data(
        "currency"
      ),
      crncy_code = currency.split(":"),
      pid = $(".sppb-addon-donation .donation-ammount-wrap").data("pid"),
      this_val = $(this).val(),
      cur_code = this_val.slice(0, 1),
      amt = this_val.split(cur_code);

    if (amt[1]) {
      var amt = amt[1];
    } else {
      var amt = this_val;
    }
    if (amt != "" && amt > 0) {
      $(".sppb-addon-donation .donation-button .donation-button-link").attr(
        "href",
        "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=" +
          pid +
          "&item_name=donation&amount=" +
          amt +
          "&currency_code=" +
          crncy_code[0] +
          ""
      );
    }
  });

  //donation custom onkeyup change value
  $(".sppb-addon-donation .donation-ammount-wrap > input.input-text").on(
    "keyup",
    function (event) {
      var this_val = $(this).val(),
        pid = $(".sppb-addon-donation .donation-ammount-wrap").data("pid"),
        currency = $(".sppb-addon-donation .donation-ammount-wrap").data(
          "currency"
        ),
        crncy_code = currency.split(":");

      if (this_val != "" && this_val > 0) {
        $(".sppb-addon-donation .donation-button .donation-button-link").attr(
          "href",
          "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=" +
            pid +
            "&item_name=donation&amount=" +
            this_val +
            "&currency_code=" +
            crncy_code[0] +
            ""
        );
      }
    }
  );

  //Tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Article Ajax voting
  $(document).on("click", ".sp-rating .star", function (event) {
    event.preventDefault();

    var data = {
      action: "voting",
      user_rating: $(this).data("number"),
      id: $(this).closest(".post_rating").attr("id"),
    };

    var request = {
      option: "com_ajax",
      plugin: "helix3",
      data: data,
      format: "json",
    };

    $.ajax({
      type: "POST",
      data: request,
      beforeSend: function () {
        $(".post_rating .ajax-loader").show();
      },
      success: function (response) {
        var data = $.parseJSON(response.data);

        $(".post_rating .ajax-loader").hide();

        if (data.status == "invalid") {
          $(".post_rating .voting-result")
            .text("You have already rated this entry!")
            .fadeIn("fast");
        } else if (data.status == "false") {
          $(".post_rating .voting-result")
            .text("Somethings wrong here, try again!")
            .fadeIn("fast");
        } else if (data.status == "true") {
          var rate = data.action;
          $(".voting-symbol")
            .find(".star")
            .each(function (i) {
              if (i < rate) {
                $(".star")
                  .eq(-(i + 1))
                  .addClass("active");
              }
            });

          $(".post_rating .voting-result").text("Thank You!").fadeIn("fast");
        }
      },
      error: function () {
        $(".post_rating .ajax-loader").hide();
        $(".post_rating .voting-result")
          .text("Failed to rate, try again!")
          .fadeIn("fast");
      },
    });
  });

  // **************  END:: Others SCRIPT  *************** //
  // **************************************************** //
});

//For react template
jQuery(function ($) {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      var newNodes = mutation.addedNodes;
      if (newNodes !== null) {
        var $nodes = $(newNodes);

        $nodes.each(function () {
          var $node = $(this);
          $node.find("#slide-fullwidth").each(function () {
            var $slideFullwidth = $(this);

            // Autoplay
            var $autoplay = $slideFullwidth.attr("data-sppb-slide-ride");
            if ($autoplay == "true") {
              var $autoplay = true;
            } else {
              var $autoplay = false;
            }

            // controllers
            var $controllers = $slideFullwidth.attr(
              "data-sppb-slidefull-controllers"
            );
            if ($controllers == "true") {
              var $controllers = true;
            } else {
              var $controllers = false;
            }

            $slideFullwidth.owlCarousel({
              margin: 0,
              loop: true,
              video: true,
              autoplay: $autoplay,
              animateIn: "fadeIn",
              animateOut: "fadeOut",
              autoplayHoverPause: true,
              autoplaySpeed: 1500,
              responsive: {
                0: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                1000: {
                  items: 1,
                },
              },
              dots: $controllers,
            });

            $(".sppbSlidePrev").click(function () {
              $slideFullwidth.trigger("prev.owl.carousel", [400]);
            });

            $(".sppbSlideNext").click(function () {
              $slideFullwidth.trigger("next.owl.carousel", [400]);
            });
          });
        });
      }
    });
  });

  var config = {
    childList: true,
    subtree: true,
  };
  // Pass in the target node, as well as the observer options
  observer.observe(document.body, config);
});
