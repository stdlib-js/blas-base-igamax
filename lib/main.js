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

var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Finds the index of the first element having the maximum absolute value.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* var idx = igamax( 5, x, 1 );
* // returns 4
*/
function igamax( N, x, strideX ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = igamax;
