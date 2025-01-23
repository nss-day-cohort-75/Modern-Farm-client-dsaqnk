import { usePlants } from "./field.js"

export const harvestPlants = (plantsArray) => {
    let seedObjects = usePlants()
    for(let i = 0; i < plantsArray.length; i++){
        if(!Array.isArray(plantsArray[i])){
            for(let j = 0; j < plantsArray[i].output; j++){
                seedObjects.push(plantsArray[i])
            }            
        }else{
            //corn condition
            for(let j = 0; j < plantsArray[i][0].output; j++){
                seedObjects.push(plantsArray[i][0])
            }
        }
    }

    return seedObjects
}