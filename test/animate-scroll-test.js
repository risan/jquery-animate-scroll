QUnit.test( "$(selector).animateScroll() initialization test", function( assert ) {
  var $link = $( "#link-1" ).animateScroll();

  assert.deepEqual( $link, $( "#link-1" ), "jQuery selector is returned" );
});

QUnit.test( "$(selector).animateScroll() scroll test", function( assert ) {
  var $link = $( "#link-2" ).animateScroll(),
      done = assert.async(),
      maxScrollDiff = 10;

  $link.trigger( "click" );

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $( "#article-2" ).offset().top ),
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 2" );
    done();
  }, 800);
});

QUnit.test( "$(selector).animateScroll() scroll test with offset", function( assert ) {
  var $link = $( "#link-3" ).animateScroll( { offset: 100 } ),
      done = assert.async(),
      maxScrollDiff = 10;

  $link.trigger( "click" );

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $( "#article-3" ).offset().top ) + 100,
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 3 with 100px offset" );
    done();
  }, 800);
});

QUnit.test( "$(selector).animateScroll() scroll test with negative offset", function( assert ) {
  var $link = $( "#link-4" ).animateScroll( { offset: -100 } ),
      done = assert.async(),
      maxScrollDiff = 10;

  $link.trigger( "click" );

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $( "#article-4" ).offset().top ) - 100,
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 4 with -100px offset" );
    done();
  }, 800);
});
