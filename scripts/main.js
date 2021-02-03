import { loadParksData, useParks } from './parks/ParkProvider.js'

loadParksData().then(() => {
   let parks = useParks();
    console.log(parks)
    // const convictingOfficers = parks.map(perp => {return perp.arrestingOfficer})
    // const crimes = parks.map(perp => { return perp.conviction})
    
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