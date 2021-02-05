import { settings } from "../Settings.js";

const mapKey = settings.graphhopperKey;
let foundLocation = [];
let routeReturned = [];

export let workingLocation = () => {
    return foundLocation.slice()
}; 

export const findLocation = (locationString) => {
    return fetch(`https://graphhopper.com/api/1/geocode?q=${locationString}&locale=us&key=${mapKey}`)
    .then(r => r.json())
    .then((locationResult) => {        
        foundLocation = locationResult.hits        
    })
};

export const locationRoute = (startingPoint) => {
    const tripStart = startingPoint[0];
    const tripEnd = startingPoint[1];
    return fetch(`https://graphhopper.com/api/1/route?point=${tripStart.lat},${tripStart.lng}&point=${tripEnd.lat},${tripEnd.lng}&vehicle=car&locale=us&instructions=true&calc_points=true&key=${mapKey}`)
    .then(r => r.json())
    .then((routeResult) => {
        routeReturned = routeResult
    })
};