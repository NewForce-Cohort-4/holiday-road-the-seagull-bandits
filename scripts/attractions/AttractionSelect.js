import { getAttractions, useAttractions } from "./AttractionProvider.js";
import { printBizList } from "./attraction.js";

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
            return `<li class="dropdown-item" id="biz-${singleAttraction.id}"><a class="dropdown-item" href="#">${singleAttraction.name}</a></li>`
        })
    
};

// bizButton.addEventListener("click", () => {
//     console.log("Attraction List Clicked!");
//     attractionSelect();
// })