QUnit.test( "$(selector).scrollHere() initialization test", function( assert ) {
  var $article = $( "#article-1" ).scrollHere();

  assert.deepEqual( $article, $( "#article-1" ), "jQuery selector is returned" );
});

QUnit.test( "$(selector).scrollHere() scroll test", function( assert ) {
  var $article = $( "#article-2" ).scrollHere(),
      done = assert.async(),
      maxScrollDiff = 10;

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $article.offset().top ),
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 2" );
    done();
  }, 800);
});

QUnit.test( "$(selector).scrollHere() scroll test with offset", function( assert ) {
  var $article = $( "#article-3" ).scrollHere( { offset: 100 } ),
      done = assert.async(),
      maxScrollDiff = 10;

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $article.offset().top ) + 100,
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 3 with 100px offset" );
    done();
  }, 800);
});

QUnit.test( "$(selector).scrollHere() scroll test with negative offset", function( assert ) {
  var $article = $( "#article-4" ).scrollHere( { offset: -100 } ),
      done = assert.async(),
      maxScrollDiff = 10;

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $article.offset().top ) - 100,
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 4 with -100px offset" );
    done();
  }, 800);
});
