import { getEateries, useEateries } from "./EateryProvider.js";
import {eatery, eateryDescription, eateryDetails} from "./Eatery.js"
const eateryDropdownSelector = document.querySelector("#eateries-dropdown");

//Loop through eatery server, build <li> for each eatery

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

//Fetch single eatery object

const getEateryDetails = (id) => {
  return fetch(`http://holidayroad.nss.team/eateries/${id}`)
    .then((response) => response.json())
    .then(parsedEatery => {
      eateryObject = parsedEatery
  
})}

//Render details for selected eatery

document.querySelector("#eateries-dropdown").addEventListener("click", event => {
  getEateryDetails(event.target.id).then(() => {
    eateryDetails(eateryObject)
  })
  })



  document.querySelector("main").addEventListener("click", event => {

   if(event.target.id.includes("eatery")) {
    let id = event.target.id.split("--")[1]
    getEateryDetails(id).then(() => {
      eateryDescription(eateryObject);
    })
    
   }
    });
 
