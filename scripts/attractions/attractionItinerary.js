import { getAttractions, useAttractions, parseAttractions } from "./AttractionProvider.js";
import { printBizContent } from "./attraction.js";

const bizContainer = document.getElementById("biz-container")
const bizList = document.getElementById("biz-dropdown")
let attractions = "";  

export const findAttraction = () => {
    getAttractions().then(() => {
        attractions = useAttractions();
    })
};

export const makeAttraction = (selectedAttraction) => {
    findAttraction();
    for (const singleAttract of attractions) {
        if (selectedAttraction.target.id === `biz-${singleAttract.id}`) {
            bizContainer.innerHTML = printBizContent(singleAttract)
        }
    }
};

const list = (totalAttractions) => {
    bizContainer.innerHTML = printBizContent(totalAttractions)
};

bizList.addEventListener("click", (e) => {
    makeAttraction(e)
})