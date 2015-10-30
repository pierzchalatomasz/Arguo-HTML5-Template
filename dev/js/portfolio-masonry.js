module.exports = ( function( $ ) {

  /*
  ** Portfolio Masonry
  */
  
  $( "body" ).imagesLoaded( function() {
    $( ".portfolio-masonry" ).masonry({
      itemSelector: ".portfolio-item",
      columnWidth: ".portfolio-sizer",
      gutter: 0
    });
  });

})( jQuery )
