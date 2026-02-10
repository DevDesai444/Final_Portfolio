"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNextApiRequest = void 0;
var isNextApiRequest = function (req) { return 'query' in req; };
exports.isNextApiRequest = isNextApiRequest;
