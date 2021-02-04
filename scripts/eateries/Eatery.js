import { getEateries, useEateries } from "./EateryProvider.js";

export const eatery = (eateryObject) => {
  return `
  <li><a class="dropdown-item" href="#" id="${eateryObject.id}">${eateryObject.businessName}</a></li>
  `;
}

export const eateryDetails = (eatery) => {
  
    
    document.querySelector("#eateries-container").innerHTML = `
    <section>
    <h3>${eatery.businessName}</h3>
    <h4>${eatery.city}, ${eatery.state}</h4>
    <div id="details-container-eatery">
    <button class="eatery-detail-button" id="eatery-detail-button--${eatery.id}">Details..</button>
    </div>
    </section>`
    
    ;

}

export const eateryDescription = (pickedEatery) => {
  document.querySelector("#details-container-eatery").innerHTML = `
  <p>${pickedEatery.description}</p>
  `
}