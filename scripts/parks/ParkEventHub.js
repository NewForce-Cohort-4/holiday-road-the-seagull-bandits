import { eventsModal } from './ParkEvents.js'
import { parkHTML, parkDetails } from './Park.js'
import { buildItinerary } from "./../itineraries/ItineraryProvider.js"
import {weatherList} from "../weather/WeatherProvider.js"
import { useParks } from './ParkProvider.js'


/* ---------------------------------------------------------------- */
/* Create an event listener for the dropdown selector and details button */
let selectedPark = [];

const eventHub = document.querySelector(".itinerary-section")
eventHub.addEventListener("click", eventObject => {
    const allParks = useParks();
    console.log(eventObject.target.id)
    
    // if the parks selector is engaged...
    if (eventObject.target.id.includes("np-select")) {
        // find the parkCode, which was concatenated onto the id when printed to the DOM in the render function above
        const parkCode = eventObject.target.id.split("_")[1]
        // Use the parkCode to find the park object
        selectedPark = allParks.filter(park => park.parkCode === parkCode)[0]
        // Pass selected park object into HTML generator function
        parkHTML(selectedPark)// 

        // Pass selected park's location into the weather forecast function
        weatherList(selectedPark.latitude, selectedPark.longitude)

        // Pass selected park into the saved itinerary object
        const savedPark = {
            fullName: selectedPark.fullName,
            parkCode: selectedPark.parkCode,
            description: selectedPark.description,
            latitude: selectedPark.latitude,
            longitude: selectedPark.longitude,
            states: selectedPark.states,
            images: selectedPark.images,
            events: selectedPark.events,
        }
        
        buildItinerary(savedPark, 'park')
        
    }

    // if the park's detail button is engaged...
    else if (eventObject.target.id.includes("parks-detail")) {
        
        // find the parkCode, which was concatenated onto the id when printed to the DOM in the render function above
        const parkCode = eventObject.target.id.split("--")[1]
        // Use the parkCode to find the park object
        selectedPark = allParks.filter(park => park.parkCode === parkCode)[0]
        
        // Pass selected park object into parkDetails function
        parkDetails(selectedPark)
    }
    
    // if the park's close detail button is engaged...
    else if (eventObject.target.id.includes("parks-close-detail")) {
        
        // find the parkCode, which was concatenated onto the id when printed to the DOM in the render function above
        const parkCode = eventObject.target.id.split("--")[1]
        // Use the parkCode to find the park object
        document.querySelector("#details-container-parks").innerHTML = `
        <div class="buttons">
            <button class="parks-detail-button btn btn-primary" id="parks-close-detail--${parkCode}">Close details...</button>
            <button class="parks-events-button btn btn-primary" id="parks-events--${parkCode}" data-bs-toggle="modal" data-bs-target="#parkEventsModal">Events</button>
        </div>
    `
    }

    else if (eventObject.target.id.includes("parks-events")) {
        // find the parkCode, which was concatenated onto the id when printed to the DOM in the render function above
        const parkCode = eventObject.target.id.split("--")[1]
        
        // Pass selected park object into parkDetails function
        eventsModal(parkCode)
    }
})