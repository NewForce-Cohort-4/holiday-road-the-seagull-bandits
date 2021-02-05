import { useItineraries, getItineraries } from './ItineraryProvider.js'
import { printItinerary } from './Itinerary.js'


/* Target the aside element where the itineraries will be printed */
let contentTarget = document.querySelector("#accordion")

export const itineraryList = () => {
    getItineraries().then(() => {
        let itineraries = useItineraries();
        // contentTarget.innerHTML = '<div class="scrollable-menu" id="accordion">'

        itineraries.forEach(itinerary => {
            contentTarget.innerHTML += printItinerary(itinerary)
        })
        // contentTarget.innerHTML += '</div>'
    })
}

const eventHub = document.querySelector("main")

eventHub.addEventListener("click", eventObject => {
    if (eventObject.target.id.includes("view-itinerary")) {
// call all functions that print selected items to DOM
    } else if (eventObject.target.id.includes("delete-itinerary")) {
// delete the itinerary from the API and refresh the itinerary list
    }
})