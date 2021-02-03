
// Print HTML to div with id=park-container
const contentTarget = document.querySelector("#park-container")

// Create and export a function to generate the HTML once the user selects a park
export const parkHTML = (selectedPark) => {

    // Randomly generate an indice to select one of the images provided by the NPS API
    const imageNum = Math.floor(Math.random()*selectedPark.images.length);
    
    // Build the HTML and assign it to the contentTarget
    contentTarget.innerHTML = `
        <p>${selectedPark.fullName}</p>
        <div class="parks-image-container overflow-hidden">
            <div class="parks-image w-100 img-fluid hero-img position-relative bottom-50 right-150" style="background-image: url(${selectedPark.images[imageNum].url})"></div>
        </div>
        <div id="details-container-parks">
            <button class="parks-detail-button" id="parks-detail--${selectedPark.parkCode}">Details..</button>
        </div>`
}

// Create and export a function to generate the HTML for the park's details once the user clicks the "Details" button.
export const parkDetails = (selectedPark) => {
    document.querySelector("#details-container-parks").innerHTML = `
    <p>${selectedPark.description}</p>
    `
}
