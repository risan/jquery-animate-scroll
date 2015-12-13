( function( $ ) {

  /**
   * Scroll to element.
   *
   * @param  {Element} $target The targetted element to scroll to
   * @param  {Object}  options Animate scroll options
   * @return {Void}
   */
  $.scrollTo = function( $target, options ) {

    // Merge options with default settings.
    var settings = $.extend( {
      $container: $( "html, body" ),
      offset: 0,
      speed: 400
    }, options );

    // Scroll to $target.
    settings.$container.animate( {
      scrollTop: $target.offset().top + settings.offset
    }, settings.speed );
  };

  /**
   * Scroll here.
   *
   * @param  {Object}  options Animate scroll options
   * @return {Element} Current selector element
   */
  $.fn.scrollHere = function( options ) {
    $.scrollTo( this, options );

    return this;
  };

  /**
   * Initialize animate scroll plugin.
   *
   * @param  {Object} options Animate scroll options
   * @return {Element}        Current selector element
   */
  $.fn.animateScroll = function( options ) {
    return this.each( function() {
      var $el = $( this ),
        $target = $( $el.attr( "href" ) ),
        elOptions = {};

      // Get data-offset attribute.
      if ( $.isNumeric( $el.data( "offset" ) ) ) {
        elOptions.offset = parseInt( $el.data( "offset" ) );
      }

      // Get data-speed attribute.
      if ( $.isNumeric( $el.data( "speed" ) ) ) {
        elOptions.speed = parseInt( $el.data( "speed" ) );
      }

      $el.on( "click", function( e ) {
        e.preventDefault();
        $.scrollTo( $target, $.extend( options, elOptions ) );
      } );
    } );
  };

}( jQuery ) );
