module.exports = ( function( $ ) {

  /*
  ** Sticky Navigation
  */

  function stickyNavigation() {

    var scrollTop = $( window ).scrollTop(); // our current vertical position from the top

    // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
    if ( scrollTop > 105 ) {
      if ( !$( ".header-wrapper" ).hasClass( "fixed" ) )
      {
        $( ".header-wrapper" ).css({ "opacity": "0" });
        $( ".header-wrapper" ).fadeTo( "slow", 1 );
      }

      $( ".header-wrapper" ).css({ "position": "fixed" });
      $( ".header-wrapper" ).addClass( "fixed" );
      $( ".header-placeholder" ).css({ "height": "57px" });

      if( document.getElementById( "wpadminbar" ) !== null) {
        $( ".header-wrapper" ).css({ "top": "32px" });
      }
      else {
        $( ".header-wrapper" ).css({ "top": "0" });
      }
    }

    else {
      $( ".header-wrapper" ).css({ "position": "relative", "top": "0" });
      $( ".header-wrapper" ).removeClass( "fixed" );
      $( ".header-placeholder" ).css({ "height": "0" });
    }
  } // End - Sticky Navigation

  // Only on load
  var scrollTop = $( window ).scrollTop(); // our current vertical position from the top

  // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
  if ( scrollTop > 105 ) {
    $( ".header-wrapper" ).css({ "position": "fixed", "opacity": "0" });
    $( ".header-wrapper" ).fadeTo( "slow", 1 );

  }

  stickyNavigation();

  $(window).scroll(function() {
    stickyNavigation();
  });

})( jQuery )
