module.exports = ( function( $ ) {

  /*
  ** Counters
  */

  var doWhenVisible = require( "./do-when-visible.js" );

  $( ".counter" ).each( function() {
    var counter = $( this ).find( ".counter-number" );
    doWhenVisible( this, function() {
      counter.countTo();
    });
  });
})( jQuery )
