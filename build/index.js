'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('prototypes-array');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var asDate = function (x, format) {
    if (format === void 0) { format = ''; }
    var date = new Date(x);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    var Format = new Intl.DateTimeFormat('pt-BR', format ? {
        day: format.includes('d') ? 'numeric' : undefined,
        month: format.includes('m') ? 'numeric' : undefined,
        year: format.includes('y') ? 'numeric' : undefined,
        hour: format.includes('h') ? 'numeric' : undefined,
        minute: format.includes('i') ? 'numeric' : undefined,
        second: format.includes('s') ? 'numeric' : undefined
    } : {}).format(date);
    console.log(Format);
    // console.log(spreads[0], spreads[1], spreads[2]);
    // date.setDate(date.getDate() + 1)
    // date.setHours(0);
    return Format;
};

var MediaDWY = function (array) { return __awaiter(void 0, void 0, void 0, function () {
    var data, total, media;
    return __generator(this, function (_a) {
        data = array;
        total = ReduceQtdePassagemDia(data);
        media = getMedia(data.length, total);
        return [2 /*return*/, media];
    });
}); };
var MediaDay = function (array) { return __awaiter(void 0, void 0, void 0, function () {
    var data, dateArray, mapDates, _loop_1, _i, mapDates_1, date;
    return __generator(this, function (_a) {
        data = ChangeDate(array);
        dateArray = [];
        mapDates = data.Distinct('data');
        _loop_1 = function (date) {
            var filterDay = data.filter(function (obj) { return asDate(obj.data) === asDate(date); });
            var reduce = ReduceQtdePassagemDia(filterDay);
            var media = getMedia(filterDay.length, reduce);
            media = Math.round(media * 100) / 100;
            var obj = {
                date: date,
                total_passage_day: reduce,
                media_day: media
            };
            dateArray.push(obj);
        };
        for (_i = 0, mapDates_1 = mapDates; _i < mapDates_1.length; _i++) {
            date = mapDates_1[_i];
            _loop_1(date);
        }
        return [2 /*return*/, dateArray];
    });
}); };
var ReduceQtdePassagemDia = function (array) {
    var passagens = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var obj = array_1[_i];
        passagens.push(obj.qtde_passagem_dia);
    }
    var reduceArray = passagens.reduce(function (total, currentElement) { return total + currentElement; });
    return reduceArray;
};
var ChangeDate = function (array) {
    var data = array;
    var alteredData = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var obj = data_1[_i];
        var x = asDate(obj.data);
        alteredData.push(__assign(__assign({}, obj), { data: x }));
    }
    return alteredData;
};
var getMedia = function (total, value) {
    var media = value / total;
    return media;
};

exports.ChangeDate = ChangeDate;
exports.MediaDWY = MediaDWY;
exports.MediaDay = MediaDay;
exports.ReduceQtdePassagemDia = ReduceQtdePassagemDia;
exports.getMedia = getMedia;
