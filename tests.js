

QUnit.module( "group a" );
QUnit.test( "Bubble Sort Tests", function( assert ) {
   function testBubbleSort(then, expected) {
    assert.deepEqual(bubbleSort(then), expected, then + " " + expected);
  }
  var a = [1,3,2];
  var b = [1,2,3];
  var c = [1,2,4];
  testBubbleSort(a,b);
  testBubbleSort(a,c);
});
QUnit.test( "Reverse A String Tests", function( assert ) {
  function testReverse(then, expected) {
    assert.equal(reverse(then), expected, then + " " + expected);
  }
  testReverse("bla", "alb");
  testReverse("bla", "alb");
});
QUnit.test( "General Utility Out of the Box Tests", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
  assert.equal( 0, 0, "Zero, Zero; equal succeeds" );
  assert.equal( "", 0, "Empty, Zero; equal succeeds" );
  assert.equal( "", "", "Empty, Empty; equal succeeds" );
  assert.equal( 0, false, "Zero, false; equal succeeds" );
 
  assert.equal( "three", 3, "Three, 3; equal fails" );
  assert.equal( null, false, "null, false; equal fails" );
});
 
QUnit.module( "group b" );
QUnit.test( "Dom Tests", function( assert ) {
  function domtest() {
      var links = document.getElementById("qunit-fixture").getElementsByTagName("a");
      assert.equal(links[0].innerHTML, "January 28th, 2008", "Dom Test Dates Match");
      assert.equal(links[2].innerHTML, "January 27th, 2008", "Dom Test Dates Match");
  }
  domtest();
});
QUnit.test( "Add tags to Page Tests", function( assert ) {
  var fixture = $( "#domtests" );
 
  fixture.append( "<div></div>" );
  assert.equal( $( "div", fixture ).length, 1, "div added successfully!" );
 
  fixture.append( "<span></span>" );
  assert.equal( $( "span", fixture ).length, 1, "span added successfully!" );  
});