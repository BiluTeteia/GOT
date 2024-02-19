"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HouseStark_1 = require("./Houses/HouseStark");
var HouseTargaryen_1 = require("./Houses/HouseTargaryen");
var Heir_1 = require("./Heir");
function battleOfTheHouses(houseList) {
    var victor = "";
    var counter = 0;
    for (var _i = 0, houseList_1 = houseList; _i < houseList_1.length; _i++) {
        var house = houseList_1[_i];
        if (house.soldierCount() > counter) {
            victor = house.name;
            counter += house.soldierCount();
        }
        else if (house.soldierCount() === counter) {
            victor += ", ".concat(house.name);
        }
    }
    if (victor.length !== 0) {
        return victor;
    }
    else {
        return "There were no victors to this battle because there were no soldiers";
    }
}
var heir1 = new Heir_1.Heir("name1", 1, 1, true);
var heir2 = new Heir_1.Heir("name2", 2, 2, true);
var heir3 = new Heir_1.Heir("name3", 3, 3, false);
var heir4 = new Heir_1.Heir("name4", 4, 4, false);
var heir5 = new Heir_1.Heir("name5", 5, 5, true);
var heir6 = new Heir_1.Heir("name6", 6, 6, true);
var heir7 = new Heir_1.Heir("name7", 7, 7, true);
var heir8 = new Heir_1.Heir("name8", 8, 8, false);
var targaryen = new HouseTargaryen_1.HouseTargaryen();
var stark = new HouseStark_1.HouseStark();
var houseList = [targaryen, stark];
targaryen.addHeir(heir1);
targaryen.addHeir(heir2);
targaryen.addHeir(heir3);
targaryen.addHeir(heir4);
stark.addHeir(heir5);
stark.addHeir(heir6);
stark.addHeir(heir7);
stark.addHeir(heir8);
targaryen.houseInfo();
stark.houseInfo();
console.log(battleOfTheHouses(houseList));
