import { itineraryList } from './ItineraryList.js'
import { eateryDetails } from '../eateries/Eatery.js'
import { parkHTML } from '../parks/Park.js'
import { printBizContent } from '../attractions/attraction.js'
import { weatherList } from '../weather/WeatherProvider.js'

let itineraries = [];

let itineraryObject = {
    park: null ,
    eatery: null ,
    attraction: null
}

const eventHub = document.querySelector('main')

const saveButtonTarget = document.querySelector('#save-itinerary-container')

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

const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
}

// const updateItinerary = (itinerary, itineraryID) => {
      
//     return fetch(`http://localhost:8088/itineraries/${itineraryID}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(itinerary)
        
//     })
// }

const deleteItinerary = itineraryID => {
    return fetch(`http://localhost:8088/itineraries/${itineraryID}`, {
        method: "DELETE",
    })
}

// const refresh = () => {

//     document.querySelector("#park-container").innerHTML = '<img class="w-100" src="./images/clipart3358926.png" alt="">'
//     document.querySelector("#biz-container").innerHTML = '<img src="images/attractions.png" alt="" class="w-100" id="biz-placeholder">'
//     document.querySelector("#eateries-container").innerHTML = '<img class="w-100" src="./images/eateries.png" alt="" id="eatery-placeholder">'

// }

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
            
            updateButtonTarget.innerHTML = `<button class="btn btn-primary" type="button" name="update-button" id="button-update-itinerary--${itineraryID}">Update Itinerary</button>`
            // print weather
            weatherList(itinerary.park.latitude, itinerary.park.longitude)
        })
    } 
    // else if (eventObject.target.id.includes("button-update-itinerary")) {
    //     let itineraryID = eventObject.target.id.split("--")[1]
    //     updateItinerary(itineraryObject, itineraryID)
    //     .then(itineraryList)
    // }
})

