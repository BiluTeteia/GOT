"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
var NobleHouse = /** @class */ (function () {
    function NobleHouse() {
        this.heirList = [];
        // getName(): string {
        //     return this.name;
        // }
        // setName(value: string): void {
        //     this.name = value;
        // }
        // getLemma(): string {
        //     return this.lemma;
        // }
        // setLemma(value: string): void {
        //     this.lemma = value;
        // }
    }
    // constructor(name: string, lemma: string) {
    //     this.name = name;
    //     this.lemma = lemma;
    // }
    NobleHouse.prototype.addHeir = function (heir) {
        var list = __spreadArray([], this.heirList, true);
        list.push(heir);
        this.heirList = list;
    };
    NobleHouse.prototype.soldierCount = function () {
        var counter = 0;
        if (this.heirList.length !== 0) {
            for (var _i = 0, _a = this.heirList; _i < _a.length; _i++) {
                var heir = _a[_i];
                if (heir.isSoldier) {
                    counter += 1;
                }
            }
        }
        return counter;
    };
    NobleHouse.prototype.houseInfo = function () {
        console.log("House name: ".concat(this.name));
        console.log("House lemma: ".concat(this.lemma));
        console.log("House members:");
        if (this.heirList.length !== 0) {
            for (var _i = 0, _a = this.heirList; _i < _a.length; _i++) {
                var heir = _a[_i];
                console.log("------------------");
                console.log("Name: ".concat(heir.name));
                console.log("Age: ".concat(heir.age));
                console.log("Number in succection: ".concat(heir.succection));
                console.log("------------------");
            }
        }
        else {
            console.log("This house has no heirs");
        }
    };
    return NobleHouse;
}());
exports.NobleHouse = NobleHouse;
