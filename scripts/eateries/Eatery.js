import { getEateries, useEateries } from "./EateryProvider.js";


//Build eatery dropdown
export const eatery = (eateryObject) => {
  return `
  <li><a class="dropdown-item" href="#" id="${eateryObject.id}">${eateryObject.businessName}</a></li>
  `;
}

export const eateryDetails = (eatery) => {
  
    document.querySelector("#eateries-container").innerHTML = `
    <div class="card bg-light text-dark">
      <div class="card-header mt-1"><h3>${eatery.businessName}</h3></div>
      <div class="card-body">
          <div class="card-title mt-1">${eatery.city}, ${eatery.state}</div>
          <div class="col-6 mx-auto mt-3" id="details-container-eatery">
            <button class="eatery-detail-button btn btn-primary" type="button" id="eatery-detail-button--${eatery.id}">Details..</button>
          </div>
      </div>
    </div>
    `
    
    ;

}

//Print eatery details
export const eateryDescription = (pickedEatery) => {
  document.querySelector("#details-container-eatery").innerHTML = `
  <p>${pickedEatery.description}</p>
  `
}