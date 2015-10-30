module.exports = ( function( $ ) {

  /*
  ** Progress Bar
  */

  var doWhenVisible = require( "./do-when-visible.js" );

  $( ".ft-progress-bar" ).each( function() {
    var progressBar = this;
    doWhenVisible( this, function() {
      var width = $( progressBar ).attr( "data-percentage" ) + "%";
      $( progressBar ).find( ".bar-percentage" ).css( "width", width );
    });
  });

})( jQuery )
