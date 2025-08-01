/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var arraylike2object = require( '@stdlib/array-base-arraylike2object' );
var abs = require( '@stdlib/math-base-special-abs' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {integer} index value
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* var idx = igamax( 5, x, 1, 0 );
* // returns 4
*/
function igamax( N, x, strideX, offsetX ) {
	var max;
	var idx;
	var ix;
	var ox;
	var v;
	var i;

	if ( N < 1 ) {
		return -1;
	}
	if ( N === 1 ) {
		return 0;
	}
	ox = arraylike2object( x );
	if ( ox.accessorProtocol ) {
		return accessors( N, ox, strideX, offsetX );
	}
	max = abs( x[ offsetX ] );
	idx = 0;
	ix = offsetX + strideX;
	for ( i = 1; i < N; i++ ) {
		v = abs( x[ ix ] );
		if ( v > max ) {
			idx = i;
			max = v;
		}
		ix += strideX;
	}
	return idx;
}


// EXPORTS //

module.exports = igamax;
