module.exports = ( function( $ ) {

  /*
  ** Mobile Menu
  */

  $( ".menu-activator" ).click( function(){
    $( "body" ).find( ".nav-menu-wrapper" ).addClass( "nav-menu-opened" );
  });

  $( ".menu-deactivator" ).click( function(){
    $( "body" ).find( ".nav-menu-wrapper" ).removeClass( "nav-menu-opened" );
  });
  
})( jQuery )
