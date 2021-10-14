// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require rails-ujs
//= require turbolinks
//= require jquery.slick
//= require select2-full
//= require bootstrap-datepicker
//= require_tree .

$(document).on('turbolinks:load', function () {
    $('.slick-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="glyphicon glyphicon-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="glyphicon glyphicon-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
      
          ]
    });
    $('.slick-slider-cars').slick({
        slidesToShow: 6,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
      
          ],
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="glyphicon glyphicon-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="glyphicon glyphicon-chevron-right"></i></button>'
    });
    $('.customer-review').slick({
        slidesToShow: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="glyphicon glyphicon-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="glyphicon glyphicon-chevron-right"></i></button>'
    });

    $( "#from" ).select2({
        theme: "bootstrap",
        placeholder: "From",
    });
    $( "#to" ).select2({
        theme: "bootstrap",
        placeholder: "To",
    });
    $('.datepicker').datepicker();

  });