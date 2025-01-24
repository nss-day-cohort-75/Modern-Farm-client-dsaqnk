export const catalog = (harvestPlants) => {
  let catalogHTML = "";

  for (const produce of harvestPlants) {
    catalogHTML += `
        <section class="plant">${produce.type}</section>   
       `;
  }

  return catalogHTML;
};

export const renderCatalogHTML = (catalogHTML) => {
  const catalogList = document.querySelector(".messages");
  catalogList.innerHTML += catalogHTML;
};
