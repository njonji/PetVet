jQuery(document).ready(function () {
  
  $(window).on("load", function() {
        $("#status").fadeOut();
        $("#preloader").delay(250).fadeOut();
        })
        const typed = new Typed('.text', {
          strings: ["Posjetite nas iza benzinske pumpe Energopetrol, <strong class='text__primary'> ulica Bužimska, grad Bihać !</strong> ", "Dovedite svoje ljubimce na pravo mjesto - <strong class='text__primary'> Veterinarska praksa Pet Vet!</strong>"],
          typeSpeed: 55,
          loop: true,
        })

      $("#submit").click(function (event) {
        
        console.log("Clicked")


        const name = $("#name").val()
        const email = $("#email").val()
        const naslov = $("#naslov").val()
        const poruka= $("#poruka").val()

        

      })
  



  })