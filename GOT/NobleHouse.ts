import { Heir } from "./Heir";

export class NobleHouse {
    name: string;
    lemma: string;
    heirList: Heir[] = [];

    // constructor(name: string, lemma: string) {
    //     this.name = name;
    //     this.lemma = lemma;
    // }

    addHeir(heir: Heir): void {
        let list = [...this.heirList];
        list.push(heir);
        this.heirList = list;
    }

    soldierCount(): number {
        let counter: number = 0;
        if (this.heirList.length !== 0) {
            for(let heir of this.heirList){
                if(heir.isSoldier){
                    counter += 1
                }
            }
        }
        return counter;
    }

    houseInfo(): void {
        console.log(`House name: ${this.name}`);
        console.log(`House lemma: ${this.lemma}`);
        console.log("House members:");
        if (this.heirList.length !== 0) {
            for (let heir of this.heirList) {
                console.log("------------------");
                console.log(`Name: ${heir.name}`);
                console.log(`Age: ${heir.age}`);
                console.log(`Number in succection: ${heir.succection}`);
                console.log("------------------");
            }
        } else {
            console.log("This house has no heirs");
        }
    }

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