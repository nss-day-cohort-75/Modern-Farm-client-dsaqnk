const storePlants = [];

export const addPlant = (seedObject) => {
  if (Array.isArray(seedObject)) {
    for (let item of seedObject) {
      storePlants.push(item);
    }
  } else {
    storePlants.push(seedObject);
  }
  return storePlants;
};

export const usePlants = () => {
  // return structuredClone(storePlants);
  let plantsCopy = [...storePlants];
  return plantsCopy
};
