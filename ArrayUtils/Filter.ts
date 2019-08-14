import { isBigEnough } from "./Every";

let passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed);
