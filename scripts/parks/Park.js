
// Print HTML to div with id=park-container
const contentTarget = document.querySelector("#park-container")

// Create and export a function to generate the HTML once the user selects a park
export const parkHTML = (selectedPark) => {
    // Randomly generate an indice to select one of the images provided by the NPS API
    const imageNum = Math.floor(Math.random()*selectedPark.images.length);
    
    // Build the HTML and assign it to the contentTarget
    contentTarget.innerHTML = `
        <div class="card bg-light text-dark" id="selected-park--${selectedPark.parkCode}">
            <img src="${selectedPark.images[imageNum].url}" class="card-img-top" alt="${selectedPark.images[imageNum].altText}">
            <div class="card-header mt-1"><h3>${selectedPark.fullName}</h3></div>
            <div class="card-body">
                <p class="card-text">${selectedPark.states}</p>
                <div id="details-container-parks">
                    <button class="parks-detail-button btn btn-primary" id="parks-detail--${selectedPark.parkCode}">Details...</button>
                    <button class="parks-events-button btn btn-primary" id="parks-events--${selectedPark.parkCode}" data-bs-toggle="modal" data-bs-target="#parkEventsModal">Events</button>
                </div>
            </div>
        </div>  
        `
}

// Create and export a function to generate the HTML for the park's details once the user clicks the "Details" button.
export const parkDetails = (selectedPark) => {
    console.log(selectedPark)
    document.querySelector("#details-container-parks").innerHTML = `
    <p style="text-align: left;">${selectedPark.description}</p>
    `
}

