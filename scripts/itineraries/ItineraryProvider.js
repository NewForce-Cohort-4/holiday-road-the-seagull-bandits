import {itineraryList} from './ItineraryList.js'

let itineraries = [];

export const useItineraries = () => {
    return itineraries.slice()
}

export const getItineraries = () => {
    let url = "http://localhost:8088/db"
    return fetch(url)
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries.itineraries
        })
}

let itineraryObject = {
    park: null ,
    eatery: null ,
    attraction: null
}

const eventHub = document.querySelector('#save-itinerary-container')

export const buildItinerary = (object, target) => {
    
    if (target === "park") {
        itineraryObject[target] = object
    } else if (target === "eatery") {
        itineraryObject[target] = object
    } else if (target === "attraction") {
        itineraryObject[target] = object
    }

    let count = 1;
    for (let key in itineraryObject) {
        
        if (itineraryObject[key] === null) {
            continue
        } else if (itineraryObject[key] !== null && count === Object.keys(itineraryObject).length) {
            eventHub.innerHTML = '<button class="btn btn-primary" type="button" id="button-save-itinerary">Save Itinerary</button>'
        }
        count++
    }
}

export const saveItinerary = itinerary => {
    // debugger
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
}

eventHub.addEventListener("click", eventObject => {
    if (eventObject.target.id === "button-save-itinerary") {
        console.log(itineraryObject)
        saveItinerary(itineraryObject)
        .then(itineraryList)
    }
})

