

let itineraries = [];

export const useItineraries = () => {
    
    if (typeof(itineraries) === "object") {
        return itineraries
    }
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

export const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
}

export const deleteItinerary = itineraryID => {
    return fetch(`http://localhost:8088/itineraries/${itineraryID}`, {
        method: "DELETE",
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

// const refresh = () => {

//     document.querySelector("#park-container").innerHTML = '<img class="w-100" src="./images/clipart3358926.png" alt="">'
//     document.querySelector("#biz-container").innerHTML = '<img src="images/attractions.png" alt="" class="w-100" id="biz-placeholder">'
//     document.querySelector("#eateries-container").innerHTML = '<img class="w-100" src="./images/eateries.png" alt="" id="eatery-placeholder">'

// }



