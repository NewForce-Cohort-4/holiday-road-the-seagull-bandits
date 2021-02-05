import { settings } from "../Settings.js";

const mapKey = settings.graphhopperKey;
let foundLocation = [];
export let routeReturned = [];

export let workingLocation = () => {
    // console.log(foundLocation);
    return foundLocation.slice()
}; 

export const findLocation = (locationArray) => {
    let fetchArray = [];
    for (let x = 0; x < locationArray.length; x++) {
        const currentLocation = locationArray[x];
        fetchArray[x] = (fetch(`https://graphhopper.com/api/1/geocode?q=${currentLocation}&locale=us&key=${mapKey}`)
        .then(r => r.json()))
    }
    return Promise.all(fetchArray)
    .then((locationResult) => {        
        foundLocation = locationResult
        console.log(locationResult);
    })
} 

export const locationRoute = (pointArray) => {
    // const tripStart = startingPoint[0];
    // const tripEnd = startingPoint[1];
    let urlString = "";
    console.log(pointArray);

    for (let i = 0; i < pointArray.length; i++) {
        let xCoordinate = pointArray[i].hits[0].point.lat;
        let yCoordinate = pointArray[i].hits[0].point.lng;
        if (i === 0 || i >= pointArray.length) {
            urlString += `point=${xCoordinate},${yCoordinate}`
        } else {
            urlString += `&point=${xCoordinate},${yCoordinate}`
        }
        console.log(urlString);
    }
    return fetch(`https://graphhopper.com/api/1/route?${urlString}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${mapKey}`)
    .then(r => r.json())
    .then((routeResult) => {
        routeReturned = routeResult
    })
};