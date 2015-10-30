module.exports = ( function( $ ) {

  /*
  ** Scroll To Top
  */

  function scrollToTop() {
    //Check to see if the window is top if not then display button
    $( window ).scroll( function(){
      if ( $( this ).scrollTop() > 100 ) {
        $( ".scroll-to-top" ).fadeIn();
      }
      else {
        $( ".scroll-to-top" ).fadeOut();
      }
    });
  }

  scrollToTop();

  $( window ).resize( function(){
    scrollToTop();
  });

  //Click event to scroll to top
  $( ".scroll-to-top" ).click( function(){
    $( "html, body" ).animate( { scrollTop : 0 }, 800 );
    return false;
  });

})( jQuery )
