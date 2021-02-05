import { findLocation, workingLocation, locationRoute } from "./DirectionProvider.js";


const roundTrip = (pointStart, pointEnd) => {
    let tripPoints = [];
    let destinationQuery = ``;
    let finalDestination = ``;
    findLocation(pointStart).then(() => {
        destinationQuery = workingLocation();
    })
    .then(() => {
        console.log(destinationQuery[0].point.lat, destinationQuery[0].point.lng);
        tripPoints.push(destinationQuery[0].point);
    })
    .then(() => {
        destinationQuery = ``;
        findLocation(pointEnd).then(() => {
            destinationQuery = workingLocation();
        })
        .then(() => {
            console.log(destinationQuery[0].point.lat, destinationQuery[0].point.lng);
            tripPoints.push(destinationQuery[0].point);
        })
        .then(() => {
            // console.log(tripPoints);
            finalDestination = locationRoute(tripPoints)
            return finalDestination
        })
    })
};

// Archivied

// const roundTrip = (pointString) => {
//     let destinationQuery = ``
//     findLocation(pointString).then(() => {
//         destinationQuery = workingLocation();
//     })
//     .then(() => {
//         console.log(destinationQuery[0].point.lat, destinationQuery[0].point.lng);
//     })
//     .then(() => {
//         tripPoints.push(destinationQuery[0].point)
//     })
//     return tripPoints
// };


let testTrip = roundTrip("New River Gorge National Park and Preserve", "Big Bend National Park");
console.log(testTrip);

// roundTrip("Joshua Tree National Park", "Death Valley");
// debugger
// debugger
// console.log(tripPoints);
// debugger
// console.log(tripPoints[0].lx);
// debugger
// console.log(tripPoints);

// locationRoute(tripPoints)


// findLocation("Joshua Tree National Park").then(() => {
//     let destinationQuery = workingLocation();
//     console.log(destinationQuery);
// })

