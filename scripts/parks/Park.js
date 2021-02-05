
// Print HTML to div with id=park-container
const contentTarget = document.querySelector("#park-container")

// Create and export a function to generate the HTML once the user selects a park
export const parkHTML = (selectedPark) => {

    // Randomly generate an indice to select one of the images provided by the NPS API
    const imageNum = Math.floor(Math.random()*selectedPark.images.length);
    
    // Build the HTML and assign it to the contentTarget
    contentTarget.innerHTML = `
        <div class="card">
            <img src="${selectedPark.images[imageNum].url}" class="card-img-top" alt="${selectedPark.images[imageNum].altText}">
            <div class="card-body">
                <h5 class="card-title">${selectedPark.fullName}</h5>
                <p class="card-text">${selectedPark.states}</p>
                <div id="details-container-parks">
                    <button class="parks-detail-button" id="parks-detail--${selectedPark.parkCode}">Details..</button>
                </div>
            </div>
        </div>  
        `
}

// Create and export a function to generate the HTML for the park's details once the user clicks the "Details" button.
export const parkDetails = (selectedPark) => {
    document.querySelector("#details-container-parks").innerHTML = `
    <p style="text-align: left;">${selectedPark.description}</p>
    `
}

{/* <div class="parks-image-container overflow-hidden">
                <div class="parks-image w-100 img-fluid hero-img position-relative bottom-50 right-150" style="background: url(${selectedPark.images[imageNum].url})" alt="${selectedPark.images[imageNum].altText}">
                </div>
            </div> */}

{/* <p class="card-text">${itinerary.park.description}</p>
        <div id="details-container-parks">
            <button class="parks-detail-button" id="parks-detail--${selectedPark.parkCode}">Details..</button>
        </div>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${itinerary.eatery.businessName}</li>
        <li class="list-group-item">${itinerary.attraction.name}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="btn btn-primary card-link">View Itinerary</a>
            <a href="#" class="btn btn-primary card-link">Delete Itinerary</a>
        </div>
        </div>   */}