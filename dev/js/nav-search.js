module.exports = ( function( $ ) {

  /*
  ** Nav Search
  */

  var navSearchOpen = false;

  $( ".nav-search" ).click( function(e) {
    e.preventDefault();

    if( !navSearchOpen ) {
      var element = $( "body" ).find( ".nav-search-box" );
      $( element ).addClass( "zoomIn" );
      $( element ).removeClass( "zoomOut hidden" );
      navSearchOpen = true;
    }
    else {
      var element = $( "body" ).find( ".nav-search-box" );
      $( element ).addClass( "zoomOut" );
      $( element ).removeClass( "zoomIn" );
      navSearchOpen = false;
    }
  });
})( jQuery )
