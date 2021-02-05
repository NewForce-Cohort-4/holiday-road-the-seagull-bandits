import { useItineraries, getItineraries } from './ItineraryProvider.js'
import { printItinerary } from './Itinerary.js'


/* Target the aside element where the itineraries will be printed */
let contentTarget = document.querySelector("#aside-saved-itineraries")

export const itineraryList = () => {
    getItineraries().then(() => {
        let itineraries = useItineraries();
        contentTarget.innerHTML = '<div class="accordion" id="accordion">'

        itineraries.forEach(itinerary => {
            contentTarget.innerHTML += printItinerary(itinerary)
        })
        contentTarget.innerHTML += '</div>'
    })
}
