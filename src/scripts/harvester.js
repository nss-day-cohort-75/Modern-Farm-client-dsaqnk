export const harvestPlants = (plantsArray) => { //this should just be our usePlants function - THERE ARE NO NESTED ARRAYS - THESE ARE ALL OBJECTS
    const harvestedSeeds = [];

    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            const halfOutput = plant.output / 2;
            for (let i = 0; i < halfOutput; i++) {
                harvestedSeeds.push({ type: "Corn", height: plant.height, output: plant.output });
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedSeeds.push({ type: plant.type, height: plant.height, output: plant.output });
            }
        }
    }

    return harvestedSeeds; //array of seed objects
};