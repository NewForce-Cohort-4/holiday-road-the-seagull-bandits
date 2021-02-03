import { getParks, useParks } from './parks/ParkProvider.js'

export const parksSelector = (filter) => {
    getParks().then(() => {
        let parks = useParks();
        console.log(parks)
        const parksByState = parks.filter(park => park.state === filter)
        
        // if (filter) {
        //     if (crimes.includes(filter)) {
        //         parks = parks.filter(perp => {return perp.conviction === filter})
        //     } else if (convictingOfficers.includes(filter)) {
        //         parks = parks.filter(perp => {return perp.arrestingOfficer === filter})
        //     }
        // }

        // parks.forEach(perp => criminalHTML += criminal(perp))
        
        // criminalTarget.innerHTML = `<h2>Parks</h2><div class="criminal-list flex-container">${criminalHTML}</div>`;
    })
}

parksSelector()
