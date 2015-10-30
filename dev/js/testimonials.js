module.export = ( function( $ ) {

  /*
  ** Testimonials
  */

  var imagesLoaded = require( "imagesloaded" );

  if( $( ".testimonials" ).length ) {
    $( window ).load( function() {

      $( "body" ).imagesLoaded( function() {
        $( ".testimonials-wrapper" ).each(function() {
          var instance = this,
            visibleItemsNumber;

          if( $( window ).width() < 992 ) {
            visibleItemsNumber = 1;
          }
          else {
            visibleItemsNumber = 2;
          }

          $( this ).find( ".testimonials-slider" ).carouFredSel({
            responsive: true,
            width: "100%",
            scroll: 1,
            auto: false,
            height: "variable",
            items: {
              start: -1,
              height: "variable",	//	optionally resize item-height
              width: 500,
              visible: visibleItemsNumber
            },
            prev: {
              button: $( instance ).find( ".prev" ),
              key: "left"
            },
            next: {
              button: $( instance ).find( ".next" ),
              key: "right"
            },
            swipe: {
              onTouch: true
            },
            pagination: $( instance ).find( ".slider-pagination")
          },
          {
            debug: false
          }
        );
      });
    });
  });
  }

})( jQuery )
