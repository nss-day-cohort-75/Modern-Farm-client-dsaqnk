export const catalog = (harvestPlants) => {
  let catalogHTML = "";

  for (const produce of harvestPlants) {
    catalogHTML += `
        <section class="plant">${produce.name}</section>   
       `;
  }

  return catalogHTML;
};

export const renderCatalogHTML = (catalogHTML) => {
  const catalogList = document.querySelector("plant");
  catalogList.innerHTML = catalogHTML;
};
