jQuery(document).ready(function () {


  
      $('#owl-1').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        autoplay:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
              }
          }
      })

    })