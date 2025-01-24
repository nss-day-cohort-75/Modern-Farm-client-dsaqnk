console.log("Welcome to the main module");

// import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";
import { renderCatalogHTML } from "./catalog.js";

const yearlyPlan = createPlan(); //our randomly generated crops (arrays inside arrays)

let filledArray = plantSeeds(yearlyPlan); //
let out = harvestPlants(filledArray);
console.log(out);

const catalogHTML = catalog(out);
renderCatalogHTML(catalogHTML);
