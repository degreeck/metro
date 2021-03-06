/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+javascript_foundation
 * @format
 */

'use strict';

const path = require('path');

require('metro-babel-register')([path.resolve(__dirname, '..', '..', '..')]);

module.exports = require('../../src/JSTransformer/worker');
