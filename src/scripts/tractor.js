import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plantPlan) => {
    for (let row of plantPlan) { // three rows of six (all arrays)
        for (let item of row) {
            if (item === "Asparagus") {
                const seed = createAsparagus() // if the string is asparagus, it'll create an asparagus object
                addPlant(seed); //then we add object to plants array (storePlants)
            } else if (item === "Corn") {
                const seed = createCorn()
                addPlant(seed);
            } else if (item === "Potato") {
                const seed = createPotato()
                addPlant(seed);
            } else if (item === "Soybean") {
                const seed = createSoybean()
                addPlant(seed);
            } else if (item === "Sunflower") {
                const seed = createSunflower()
                addPlant(seed);
            } else {
                const seed = createWheat()
                addPlant(seed);
            }
        }
    }
    return usePlants() // i.e., return our array of plant objects
}