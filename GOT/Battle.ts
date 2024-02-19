import { NobleHouse } from "./NobleHouse";
import { HouseStark } from "./Houses/HouseStark";
import { HouseTargaryen } from "./Houses/HouseTargaryen";
import { Heir } from "./Heir";

function battleOfTheHouses(houseList: NobleHouse[]): string {
    let victor: string = ""
    let counter: number = 0
    for(let house of houseList){
        if(house.soldierCount() > counter){
            victor = house.name
            counter += house.soldierCount()
        } else if (house.soldierCount() === counter) {
            victor += `, ${house.name}`
        }
    }

    if(victor.length !== 0){
        return victor
    } else {
        return "There were no victors to this battle because there were no soldiers"
    }
}

const heir1 = new Heir("name1", 1, 1, true);
const heir2 = new Heir("name2", 2, 2, true);
const heir3 = new Heir("name3", 3, 3, false);
const heir4 = new Heir("name4", 4, 4, false);

const heir5 = new Heir("name5", 5, 5, true);
const heir6 = new Heir("name6", 6, 6, true);
const heir7 = new Heir("name7", 7, 7, true);
const heir8 = new Heir("name8", 8, 8, false);

const targaryen = new HouseTargaryen();
const stark = new HouseStark();

const houseList: NobleHouse[] = [targaryen, stark]

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