QUnit.test( "$.scrollTo($(selector)) initialization test", function( assert ) {
  var fnReturn = $.scrollTo( $( "#article-1" ) );

  assert.strictEqual( fnReturn, undefined, "Undefined is returned" );
});

QUnit.test( "$.scrollTo($(selector)) scroll test", function( assert ) {
  var $article = $( "#article-2" ),
      done = assert.async(),
      maxScrollDiff = 10;

  $.scrollTo( $article );

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $article.offset().top ),
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 2" );
    done();
  }, 800);
});

QUnit.test( "$.scrollTo($(selector)) scroll test with offset", function( assert ) {
  var $article = $( "#article-3" ),
      done = assert.async(),
      maxScrollDiff = 10;

  $.scrollTo( $article, { offset: 100 } );

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $article.offset().top ) + 100,
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 3 with 100px offset" );
    done();
  }, 800);
});

QUnit.test( "$.scrollTo($(selector)) scroll test with negative offset", function( assert ) {
  var $article = $( "#article-4" ),
      done = assert.async(),
      maxScrollDiff = 10;

  $.scrollTo( $article, { offset: -100 } );

  setTimeout(function() {
    var containerTop = parseInt( $( "body" ).scrollTop() ),
        articleTop = parseInt( $article.offset().top ) - 100,
        isAcceptedPosition = Math.abs( containerTop - articleTop ) <= maxScrollDiff;

    assert.strictEqual( isAcceptedPosition, true, "Scroll to article 4 with -100px offset" );
    done();
  }, 800);
});
