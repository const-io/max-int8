'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var MAX_INT8 = require( './../lib' );


// TESTS //

tape( 'the main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof MAX_INT8, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals 2**7 - 1', function test( t ) {
	t.equal( MAX_INT8, pow(2,7)-1, 'equals 2**7-1' );
	t.end();
});
