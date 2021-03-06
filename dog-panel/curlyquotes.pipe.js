"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// USAGE for @NGModule
// import {CurlyQuotesPipe} from './curlyquotes.pipe';
//declarations: [CurlyQuotesPipe]
// USAGE for template
// {{text | curyquotes}}
var CurlyQuotesPipe = /** @class */ (function () {
    function CurlyQuotesPipe() {
    }
    CurlyQuotesPipe.prototype.transform = function (value, args) {
        return '\u201C' + value.trim() + '\u201D';
    };
    CurlyQuotesPipe = __decorate([
        core_1.Pipe({ name: 'curlyQuotes' })
    ], CurlyQuotesPipe);
    return CurlyQuotesPipe;
}());
exports.CurlyQuotesPipe = CurlyQuotesPipe;
//# sourceMappingURL=curlyquotes.pipe.js.map