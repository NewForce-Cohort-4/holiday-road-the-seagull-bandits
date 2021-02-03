/* ---------------------------------------------------------------- */
/* import functions from other modules */
import { getParks, useParks } from './ParkProvider.js'
import { parkHTML, parkDetails } from './Park.js'

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
            }`
}

/* ---------------------------------------------------------------- */
/* Create an event listener for the dropdown selector and details button */
let selectedPark = [];

const eventHub = document.querySelector(".itinerary-section")
eventHub.addEventListener("click", eventObject => {
    const allParks = useParks();
    console.log(eventObject.target)
    // if the parks selector is engaged...
    if (eventObject.target.id.includes("np-select")) {
        // find the parkCode, which was concatenated onto the id when printed to the DOM in the render function above
        const parkCode = eventObject.target.id.split("_")[1]
        // Use the parkCode to find the park object
        selectedPark = allParks.filter(park => park.parkCode === parkCode)[0]
        // Pass selected park object into HTML generator function
        parkHTML(selectedPark)// 

        // Pass selected park's location into the weather forecast function
        // weatherApp(selectedPark.addresses[0])
    }

    // if the park's detail button is engaged...
    if (eventObject.target.id.includes("parks")) {
        // Pass selected park object into parkDetails function
        parkDetails(selectedPark)
    }
})