import { usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plantPlan) => {
    let storePlantsCopy = usePlants() //empty array
    for (let crop of plantPlan) {
        for (let item of crop) {
            if (item === "Asparagus") {
                let asp = createAsparagus()
                storePlantsCopy.push(asp)
            } else if (item === "Corn") {
                let corn = createCorn()
                storePlantsCopy.push(corn)
            } else if (item === "Potato") {
                let pot = createPotato()
                storePlantsCopy.push(pot)
            } else if (item === "Soybean") {
                let soy = createSoybean()
                storePlantsCopy.push(soy)
            } else if (item === "Sunflower") {
                let sun = createSunflower()
                storePlantsCopy.push(sun)
            } else {
                let wheat = createWheat()
                storePlantsCopy.push(wheat)
            }
        }
    }
    return storePlantsCopy
}