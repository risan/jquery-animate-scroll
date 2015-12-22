QUnit.test( "$(selector).animateScroll() initialization test", function( assert ) {
  var $link = $( "#link-1" ).animateScroll();

  assert.deepEqual( $link, $( "#link-1" ), "jQuery selector is returned" );
});

QUnit.test( "$(selector).animateScroll() click test", function( assert ) {
  var $link = $( "#link-2" ).animateScroll(),
      done = assert.async();

  $link.trigger( "click" );

  setTimeout(function() {
    var containerTop = parseInt($( "body" ).scrollTop()),
        articleTop = parseInt($( "#article-2" ).offset().top);

    assert.equal( containerTop, articleTop, "On click scroll to article 2" );
    done();
  }, 800);
});

QUnit.test( "$(selector).animateScroll() with offset click test", function( assert ) {
  var $link = $( "#link-3" ).animateScroll({ offset: 100 }),
      done = assert.async();

  $link.trigger( "click" );

  setTimeout(function() {
    var containerTop = parseInt($( "body" ).scrollTop()),
        articleTop = parseInt($( "#article-3" ).offset().top) + 100;

    assert.equal( containerTop, articleTop, "On click scroll to article 3 with 100px offset" );
    done();
  }, 800);
});
