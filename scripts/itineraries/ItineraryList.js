import { useItineraries, getItineraries } from './ItineraryProvider.js'
import { printItinerary } from './Itinerary.js'


/* Target the aside element where the itineraries will be printed */
let contentTarget = document.querySelector("#aside-saved-itineraries")

export const itineraryList = () => {
    getItineraries().then(() => {
        let itineraries = useItineraries();
        // contentTarget.innerHTML = '<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active">'

        itineraries.forEach(itinerary => {
            contentTarget.innerHTML += printItinerary(itinerary)
        })
        // contentTarget.innerHTML += '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></a><a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></a></div>'
    })
}

