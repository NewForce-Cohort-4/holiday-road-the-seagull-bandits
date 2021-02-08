/* ---------------------------------------------------------------- */
/* import functions from other modules */
import { getParks, useParks } from './ParkProvider.js'

const contentTarget = document.querySelector("#park-dropdown")

/* ---------------------------------------------------------------- */
// Create and export a function that will render the dropdown selection options
export const parksSelector = () => {
    getParks().then(() => {
        let parks = useParks();
        
        render(parks)
    })
}

const render = parksList => {
    // Create HTML content for dropdown selector
    contentTarget.innerHTML = `                
        <li value="0"><a class="dropdown-item" href="#">Please select a National Park...</a></li>
            ${
                parksList.map(park => {return `<li><a class="dropdown-item" id="np-select_${park.parkCode}" href="#">${park.name}</a></li>`})
            }
        `
}

