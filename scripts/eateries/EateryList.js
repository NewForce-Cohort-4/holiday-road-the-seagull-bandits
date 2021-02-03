import { getEateries, useEateries } from "./EateryProvider.js";
import {eatery, eateryDescription, eateryDetails} from "./Eatery.js"
const eateryDropdownSelector = document.querySelector("#eateries-dropdown");

export const renderEateryDropdown = () => {
  getEateries().then(() => {
  let eateries = useEateries()
  let eateryHTMLString = ""
  eateries.forEach((eateryObject) => eateryHTMLString += eatery(eateryObject))
  eateryDropdownSelector.innerHTML = eateryHTMLString
  
  }
  )
}


let eateryObject = {}


const getEateryDetails = (id) => {
  return fetch(`http://holidayroad.nss.team/eateries/${id}`)
    .then((response) => response.json())
    .then(parsedEatery => {
      eateryObject = parsedEatery
  
})}

document.querySelector("#eateries-dropdown").addEventListener("click", () => {
  getEateryDetails(event.target.id).then(() => {
    eateryDetails(eateryObject)
  })
  })



  document.querySelector("main").addEventListener("click", () => {
   if(event.target.classList.contains("detail-button")) {
    let id = event.target.id.slice(15)
    getEateryDetails(id).then(() => {
      eateryDescription(eateryObject);
    })
    
   }
    });
 
