import { getParks, useParks } from './ParkProvider.js'
import { parkHTML } from './parkItineraryItem.js'

const contentTarget = document.querySelector("#park-dropdown")

export const parksSelector = (filter) => {
    getParks().then(() => {
        let parks = useParks();
        // console.log(parks)

        // const parksByState = parks.filter(park => park.state === filter)
        render(parks)
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

const render = parksList => {
    contentTarget.innerHTML = `                
        <li value="0"><a class="dropdown-item" href="#">Please select a National Park...</a></li>
            ${
                parksList.map(park => {return `<li><a class="dropdown-item" id="np-select_${park.parkCode}" href="#">${park.name}</a></li>`})
            }`
}

const eventHub = document.querySelector("main")
eventHub.addEventListener("click", eventObject => {
    const allParks = useParks()
    if (eventObject.target.id.includes("np-select")) {
        const parkCode = eventObject.target.id.split("_")[1]
        parkHTML(allParks.filter(park => park.parkCode === parkCode)[0])// print to card
    }
})