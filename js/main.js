"use strict";

$(window).on("load", function () {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder").delay(400).fadeOut("slow");
});

(function ($) {
  /*------------------
		Navigation
	--------------------*/
  $(".nav-switch").on("click", function (event) {
    $(".main-menu").slideToggle(400);
    event.preventDefault();
  });

  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    mouseDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    autoplay: true,
  });
  var dot = $(".hero-slider .owl-dot");
  dot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this).html("0").append(index);
      $(this).append("<span>.</span>");
    } else {
      $(this).html(index);
      $(this).append("<span>.</span>");
    }
  });

  /*------------------
		News Ticker
	--------------------*/
  $(".news-ticker").marquee({
    duration: 50000,
    //gap in pixels between the tickers
    //gap: 200,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
  });
})(jQuery);

/*------------------
		countdown
  --------------------*/
const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Aug 30, 2020 00:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}
  }, second);

  function init() {
    Tabletop.init( { key: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQqK-v-SZ3ORoJS8oH2bM2knuOMI9s2cgkc8ztTicNUS3_816v5d16NURbpb4Yo4lhFPM1Hsff63AFe/pubhtml`,
    callback: function(data, tabletop) {
    console.log(data)
    },
    simpleSheet: true } )
    }
    window.addEventListener(`DOMContentLoaded`, init);