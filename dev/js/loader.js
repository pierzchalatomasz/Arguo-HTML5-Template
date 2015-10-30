module.exports = ( function( $ ) {

  /*
  ** Loader
  */

  $( "body" ).imagesLoaded( function() {
    $( ".site-loader" ).css( "opacity", "0" );
    $( ".site-loader" ).css( "visibility", "hidden" );
  });

})( jQuery )
