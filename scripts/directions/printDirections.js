import { findLocation, workingLocation, locationRoute, routeReturned } from "./DirectionProvider.js";
import { directions } from "./direction.js";

export const roadTrip = (destinationsArray) => {
    // let tripPoints = [];
    let destinationQuery = "";
	let finalDestination = "";
    let finalFrame = "";
	
		findLocation(destinationsArray)
		.then(() => {
			destinationQuery = workingLocation();
		})
        .then(() => {
            // console.log(tripPoints);
            locationRoute(destinationQuery).then(() => {
                finalDestination = routeReturned
                
                return finalDestination
            }).then(() => {
                directions(finalDestination)
                // visualDirections()
            })
        })
};

// let stops = ["Nashville","New River Gorge National Park and Preserve", "Big Bend National Park", "White House Replica"]
// roadTrip(stops);

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


