$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

// constant variables.
  const $tourPanel = $('.panel-heading');
  const $panelCollapse = $('.panel-collapse');

  $tourPanel.on('click', (event) =>{
         var kids = $( event.currentTarget ).children();
         kids.toggle("slow");
  }).on('mouseenter', event =>{
         var kids = $( event.currentTarget ).children();
         kids.show("slow");
  }).on('mouseleave', event =>{
         var kids = $( event.currentTarget ).children();
         kids.hide("slow");
  });
})