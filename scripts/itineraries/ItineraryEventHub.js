import { itineraryList } from './ItineraryList.js'
import { eateryDetails } from '../eateries/Eatery.js'
import { parkHTML } from '../parks/Park.js'
import { printBizContent } from '../attractions/attraction.js'
import { weatherList } from '../weather/WeatherProvider.js'
import { roadTrip } from "../directions/printDirections.js";
import { useItineraries, getItineraries, saveItinerary, deleteItinerary } from './ItineraryProvider.js'

let itineraryObject = {
    park: null ,
    eatery: null ,
    attraction: null
}

const eventHub = document.querySelector('main')

const saveButtonTarget = document.querySelector('#save-itinerary-container')

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
            let itinerary = useItineraries()
            // print national parks details
            parkHTML(itinerary.park)
            itineraryObject["park"] = itinerary.park
            
            // print attractions details
            document.querySelector("#biz-container").innerHTML = ""
            itinerary.attraction.forEach(attraction => document.querySelector("#biz-container").innerHTML += printBizContent(attraction))
            itineraryObject["attraction"] = itinerary.attraction
            // print eatery details
            document.querySelector("#eateries-container").innerHTML = ""
            itinerary.eatery.forEach(eatery => eateryDetails(eatery))
            itineraryObject["eatery"] = itinerary.eatery
            // print "update" (save) button
            
            // updateButtonTarget.innerHTML = `<button class="btn btn-primary" type="button" name="update-button" id="button-update-itinerary--${itineraryID}">Update Itinerary</button>`

            // print weather
            weatherList(itinerary.park.latitude, itinerary.park.longitude)
        })
    } else if (eventObject.target.id.includes("map-itinerary")) {
        let itineraryID = eventObject.target.id.split("--")[1]
        getItineraries(itineraryID)
        .then(() => {
            let destinations = useItineraries()
            let foodStop = destinations.eatery
            let oddStop = destinations.attraction
            
            let route = [];

            route.push(destinations.park.fullName)

            for (const attract of oddStop) {
                route.push(attract.name)
            }
            
            for (const dine of foodStop) {
                route.push(dine.businessName) 
            }
            
            roadTrip(route)
            
            // console.log(itenary.park);
            // console.log(itinerary.eatery);
            // console.log(itenary.attraction);
        })
    }
    // else if (eventObject.target.id.includes("button-update-itinerary")) {
    //     let itineraryID = eventObject.target.id.split("--")[1]
    //     updateItinerary(itineraryObject, itineraryID)
    //     .then(itineraryList)
    // }
})

export const buildItinerary = (object, target) => {
    
    if (target === "park") {
        itineraryObject[target] = object
    } else if (target === "eatery") {
        // Creates array for each eatery chosen
        if (itineraryObject[target] === null) {
            itineraryObject[target] = [object]
        } else {
            itineraryObject[target].push(object)
        }
    } else if (target === "attraction") {
        if (itineraryObject[target] === null) {
          itineraryObject[target] = [object];
        } else {
          itineraryObject[target].push(object);
        }
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