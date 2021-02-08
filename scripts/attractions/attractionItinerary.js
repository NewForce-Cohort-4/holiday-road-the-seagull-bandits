import { getAttractions, useAttractions, parseAttractions } from "./AttractionProvider.js";
import {  } from "./AttractionSelect.js";
import { printBizContent } from "./attraction.js";
import { buildItinerary } from "./../itineraries/ItineraryProvider.js"

const bizContainer = document.getElementById("biz-container")
const bizList = document.getElementById("biz-dropdown")
let attractions = "";  

export const findAttraction = () => {
    getAttractions().then(() => {
        attractions = useAttractions();
    })
};

export const makeAttraction = (selectedAttraction) => {
    // findAttraction();
    for (const singleAttract of attractions) {
        if (selectedAttraction.target.id === `biz-${singleAttract.id}`) {
            bizContainer.innerHTML += printBizContent(singleAttract)
            buildItinerary(singleAttract, 'attraction')
        }
    }
};

const list = (totalAttractions) => {
    bizContainer.innerHTML = printBizContent(totalAttractions)
};

bizList.addEventListener("click", (e) => {
    let element = document.getElementById("biz-placeholder");
    if (typeof element != "undefined" && element != null) {
      element.remove();
    }
    makeAttraction(e)
    
})
