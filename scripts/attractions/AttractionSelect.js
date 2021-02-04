import { getAttractions, useAttractions } from "./AttractionProvider.js";
import { printBizContent } from "./attraction.js";

const bizButton = document.getElementById("bizMenuButton")
const bizList = document.querySelector("#biz-dropdown")

export const attractionSelect = () => {
    getAttractions().then(() => {
        const attractions = useAttractions();
        display(attractions);
    })
};

const display = (totalAttractions) => {
    bizList.innerHTML = totalAttractions.map((singleAttraction) => {
            return `<option class="dropdown-item" id="biz-${singleAttraction.id}">${singleAttraction.name}</option>`
        })
    
};