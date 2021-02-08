import { itineraryList } from './ItineraryList.js'
import { eateryDetails } from '../eateries/Eatery.js'
import { parkHTML } from '../parks/Park.js'
import { printBizContent } from '../attractions/attraction.js'
import { weatherList } from '../weather/WeatherProvider.js'
import { roadTrip } from "../directions/printDirections.js";

let itineraries = [];

export const useItineraries = () => {
    return itineraries.slice()
}

export const getItineraries = (id) => {
    let url = "http://localhost:8088/itineraries"

    if (typeof(id) !== "undefined") {
        url += `/${id}`
    }

    return fetch(url)
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })
}

let itineraryObject = {
    park: null ,
    eatery: null ,
    attraction: null
}

const eventHub = document.querySelector('main')

const saveButtonTarget = document.querySelector('#save-itinerary-container')

export const buildItinerary = (object, target) => {
    
    if (target === "park") {
        itineraryObject[target] = object
    } else if (target === "eatery") {
        itineraryObject[target] = object
        // if (itineraryObject[target] === null) {
        //     itineraryObject[target] = [object]
        // } else {
        //     itineraryObject[target].push(object)
        // }
    } else if (target === "attraction") {
        itineraryObject[target] = object
    }

    let count = 1;
    for (let key in itineraryObject) {
        
        if (itineraryObject[key] === null) {
            continue
        } else if (itineraryObject[key] !== null && count === Object.keys(itineraryObject).length) {
            saveButtonTarget.innerHTML = '<button class="btn btn-primary" type="button" id="button-save-itinerary">Save Itinerary</button>'
        }
        count++
    }
}

const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
}

const deleteItinerary = itineraryID => {
    return fetch(`http://localhost:8088/itineraries/${itineraryID}`, {
        method: "DELETE",
    })
}

eventHub.addEventListener("click", eventObject => {

    if (eventObject.target.id === "button-save-itinerary") {
        saveItinerary(itineraryObject)
        .then(itineraryList)
    } else if (eventObject.target.id.includes("delete-itinerary")) {
        let itineraryID = eventObject.target.id.split("--")[1]
        deleteItinerary(itineraryID)
        .then(itineraryList)
    } else if (eventObject.target.id.includes("view-itinerary")) {
        let itineraryID = eventObject.target.id.split("--")[1]
        getItineraries(itineraryID)
        .then(() => {
            let itinerary = itineraries
            // print national parks details
            parkHTML(itinerary.park)
            // print attractions details
            document.getElementById("biz-container").innerHTML = printBizContent(itinerary.attraction)
            // print eatery details
            eateryDetails(itinerary.eatery)
            // print weather
            weatherList(itinerary.park.latitude, itinerary.park.longitude)
        })
    } else if (eventObject.target.id.includes("map-itinerary")) {
        let itineraryID = eventObject.target.id.split("--")[1]
        getItineraries(itineraryID)
        .then(() => {
            let destinations = itineraries
            console.log(destinations);
            
            let route = [];

            route.push(destinations.park.fullName)

            route.push(destinations.attraction.name)
   
            route.push(destinations.eatery.businessName) 

            console.log(route);
            
            roadTrip(route)
            
            // console.log(itenary.park);
            // console.log(itinerary.eatery);
            // console.log(itenary.attraction);
            
            
        })
    }
})

