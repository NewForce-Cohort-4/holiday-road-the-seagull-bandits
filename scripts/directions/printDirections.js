import { findLocation, workingLocation, locationRoute, routeReturned } from "./DirectionProvider.js";


const roadTrip = (destinationsArray) => {
    // let tripPoints = [];
    let destinationQuery = "";
	let finalDestination = "";
	
		findLocation(destinationsArray)
		.then(() => {
			destinationQuery = workingLocation();
		})
        .then(() => {
            // console.log(tripPoints);
            locationRoute(destinationQuery).then(() => {
                finalDestination = routeReturned
                console.log(finalDestination);
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

let stops = ["Nashville","New River Gorge National Park and Preserve", "Big Bend National Park"]

roadTrip(stops);

