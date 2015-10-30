module.exports = function doWhenVisible( e, callback ) {

  /*
  ** Do When Visible
  */

  var wasShown = false;

  $( window ).scroll( function() {
    if( !wasShown && $( e ).visible() ) {
      callback();
      wasShown = true;
    }
  });
}
