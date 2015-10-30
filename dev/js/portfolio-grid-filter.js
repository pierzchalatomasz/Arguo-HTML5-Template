module.exports = ( function( $ ) {

  /*
  ** Portfolio Grid Filter
  */

  function compareFilters( a, b ) {
    if( undefined !== b ) {
      for ( var i = 0, l = b.length; i < l; i++ ) {
        if ( a == b[i] ) {
          return true;
        }
      }
    }
    return false;
  }

  // Show only one category on category page

  function portfolioFilter() {
    var activeFilter = $( ".portfolio-masonry" ).data( "portfoliofilter" );

    if( activeFilter ) {
      $( ".portfolio-masonry" ).imagesLoaded(function(){

        // Hide items with another filters
        $( ".portfolio-masonry" ).find( ".portfolio-item" ).each( function() {
          var itemFilters = $( this ).data( "filter" );
          var filterComp = compareFilters( activeFilter, itemFilters );

          if( filterComp ) {
            // Out animation
            $( this ).addClass( "display-none" );
          }
          else {
            $( this ).css( "visibility", "visible" );
            $( this ).removeClass( "display-none" );
          }
        });

        $( ".portfolio-masonry" ).masonry("layout");
      });
    }
  }

  function filterableGrid() {
    $( ".portfolio-filter" ).click(function(e) {
      // Prevent Scrolling Up
      e.preventDefault();

      // Add active class
      $( ".portfolio-filter" ).removeClass( "active" );
      $( this ).addClass( "active" );

      // Load array
      var activeFilter = $( this ).data( "filter" );

      // Hide items with another filters
      $( ".portfolio-masonry" ).find( ".portfolio-item" ).each( function() {
        var itemFilters = $( this ).data( "filter" );
        var filterComp = compareFilters( activeFilter, itemFilters );
        $( this ).css( "visibility", "visible" );

        if( filterComp ) {
          $( this ).removeClass( "display-none" );
        }
        // Out animation
        else {
          $( this ).addClass( "display-none" );
        }
      });

      $( ".portfolio-masonry" ).masonry("layout");
    });
  }

  filterableGrid();
  portfolioFilter();
  
})( jQuery )
