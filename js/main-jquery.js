const action ="click";
const speed = "500";

jQuery(document).ready(function () {

  
    $("#status").delay(150).fadeOut()
     $("#preloader").delay(250).fadeOut()
 
    
   $(".accordion__qanda--q").on(action, function () {
       $(this).next()
             .slideToggle(speed)
                 .siblings(".accordion__qanda--a")
                       .slideUp() 
          const img = $(this).children("img")
          $("img").not(img).removeClass("rotate")
          img.toggleClass("rotate")
   })



 })