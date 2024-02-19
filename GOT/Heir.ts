import { HouseHeir } from "./HouseHeir";

export class Heir implements HouseHeir {
    name: string;
    age: number;
    succection: number;
    isSoldier: boolean;

    constructor(
        name: string,
        age: number,
        succection: number,
        isSoldier: boolean
    ) {
        this.name = name;
        this.age = age;
        this.succection = succection;
        this.isSoldier = isSoldier;
    }

    // getName(): string {
    //     return this.name;
    // }
    // setName(value: string): void {
    //     this.name = value;
    // }

    // getAge(): number {
    //     return this.age;
    // }
    // setAge(value: number): void {
    //     this.age = value;
    // }

    // getSuccection(): number {
    //     return this.succection;
    // }
    // setSuccection(value: number): void {
    //     this.succection = value;
    // }
}