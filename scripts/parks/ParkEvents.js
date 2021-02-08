import { settings } from '../Settings.js'

const eventHTML = (event) => {
        
    let htmlString = `<div class="card"><h4>${event.title}</h4>`

    if (event.datestart === event.dateend) {
        htmlString += `<p><strong>Dates Available:</strong> ${event.datestart}</p>`
    } else {
        htmlString += `<p><strong>Dates Available:</strong> ${event.datestart} - ${event.dateend}</p>`
    }
    
    event.times.forEach(time => {
        htmlString += `
        <p><strong>Times:</strong> ${time.timestart} - ${time.timeend}</p>`
    })
    htmlString += `<p style="text-align: left;">${event.description}</p>`

    if (event.isfree) {
        htmlString += `<p>This event is free!</p>`
    } else {
        htmlString += `<p><strong>Cost:</strong>${event.feeinfo}</p>`
    }
    console.log(htmlString)
    return htmlString += '</div>'
}

export const eventsModal = (parkCode) => {
    console.log(parkCode)
    let popUpTarget = document.querySelector(".modal-content"); 
    let eventsPopUpHTML = ""

    return fetch(`https://developer.nps.gov/api/v1/events?parkCode=${parkCode}&api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then(parsedEvents => {
        let events = parsedEvents.data
        
        if (events.length === 0) {
            eventsPopUpHTML = `
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                    Park Events
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>There are no scheduled events for this park. Please check back later.
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            `
            return popUpTarget.innerHTML = eventsPopUpHTML
        } else {
            events = events.slice(0,2)
        }

        eventsPopUpHTML += `
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
            Park Events - ${events[0].parkfullname}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">`
        
        events.forEach(event => {
                eventsPopUpHTML += eventHTML(event)
        })
        
        eventsPopUpHTML += `</div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>`

        return popUpTarget.innerHTML = eventsPopUpHTML
    })
}
