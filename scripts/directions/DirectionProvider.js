import { settings } from "../Settings.js";

const mapKey = settings.graphhopperKey;
let foundLocation = [];
export let routeReturned = [];
let printFrame = "";

export let workingLocation = () => {
    // console.log(foundLocation);
    return foundLocation.slice()
}; 

export const findLocation = (locationArray) => {
    let fetchArray = [];
    // Loop through all locations and build an array of fetch calls. 
    for (let x = 0; x < locationArray.length; x++) {
        const currentLocation = locationArray[x];
        fetchArray[x] = (fetch(`https://graphhopper.com/api/1/geocode?q=${currentLocation}&locale=us&key=${mapKey}`)
        .then(r => r.json()))
    }
    // Pass local variable fetchArray to Promise.all to return multiple API calls. 
    // return result to global variable foundLocation
    return Promise.all(fetchArray)
    .then((locationResult) => {        
        foundLocation = locationResult
        // console.log(locationResult);
    })
} 

export const locationRoute = (pointArray) => {
    let urlString = "";
    // console.log(pointArray);

    // Loop through parameter array, returned by findLocations.
    for (let i = 0; i < pointArray.length; i++) {
        // delcare variable to for each latitude/longitude coordinate
        let xCoordinate = pointArray[i].hits[0].point.lat;
        let yCoordinate = pointArray[i].hits[0].point.lng;
        // Conditional to build a string with coordinates, if more than 2x sets of coordinates are passed, seperate with ampersands.
        if (i === 0 || i >= pointArray.length) {
            urlString += `point=${xCoordinate},${yCoordinate}`
        } else {
            urlString += `&point=${xCoordinate},${yCoordinate}`
        }
        console.log(urlString);
    }
    // Make API call with urlString of coordinates
    return fetch(`https://graphhopper.com/api/1/route?${urlString}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${mapKey}`)
    .then(r => r.json())
    .then((routeResult) => {
        routeReturned = routeResult
        printFrame = `https://graphhopper.com/maps/?point=${urlString}&locale=en-us&vehicle=car&weighting=fastest&elevation=true&turn_costs=true&use_miles=false&layer=Omniscale`
    })
};
