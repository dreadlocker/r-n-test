"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterProducts = exports.FILTER_PRODUCTS = void 0;
var FILTER_PRODUCTS = 'FILTER_PRODUCTS';
exports.FILTER_PRODUCTS = FILTER_PRODUCTS;

var filterProducts = function filterProducts(payload) {
  return {
    type: FILTER_PRODUCTS,
    payload: payload
  };
};

exports.filterProducts = filterProducts;