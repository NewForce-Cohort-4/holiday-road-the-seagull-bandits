let parks = []

export const useParks = () => {
    return parks.slice()
}

// let logicGate = false
// let limit = 0;
// let total = 0;

// const getParksParams = () => {
    
//     return fetch("https://developer.nps.gov/api/v1/parks?api_key=nbqiP9vQgAXyqsicMSTlQjnowutK0w7ftOsBaFk6")
//         .then(response => response.json())
//         .then(
//             parsedParks => {
//                 logicGate = (parseInt(parsedParks.total) > parseInt(parsedParks.limit))
//                 limit = parseInt(parsedParks.limit);
//                 total = parseInt(parsedParks.total);
//                 console.log(logicGate, limit, total)
//                 return [logicGate, limit, total]
//             }
//         )
// }

// const result = getParksParams()
// console.log(result)

let logicGate = true
let limit = 50;
let total = 468;

const getParks = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then(parsedParks => {
            // console.log(parsedParks.data)
            return parsedParks.data 
        })
}

export const loadParksData = () => {
    if (logicGate) { 
        for (let i=0; i < total; i+=limit) {
            console.log(i)
            let url = `https://developer.nps.gov/api/v1/parks?start=${i}&api_key=nbqiP9vQgAXyqsicMSTlQjnowutK0w7ftOsBaFk6`
            parks = parks.concat(getParks(url))
        }
    console.log(parks)
    }
    return parks
}

// Need to find a way to return data from every iteration of the fetch call. Otherwise, it won't be possible to obtain an array of 
