


/* Create and export function that will generate HTML for each saved itinerary */
export const printItinerary = (itinerary) => {
  const imageNum = Math.floor(Math.random()*itinerary.park.images.length);
    return `
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-${itinerary.id}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${itinerary.id}" aria-expanded="true" aria-controls="collapse-${itinerary.id}">
        Trip to ${itinerary.park.fullName}
        </button>
      </h2>
      <div id="collapse-${itinerary.id}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
        <div class="accordion-body">
          <div class="card">
            <img src="${itinerary.park.images[imageNum].url}" class="card-img-top" alt="${itinerary.park.images[imageNum].altText}">
            <div class="card-body">
              <h5 style="border-bottom:1px solid darkgrey">${itinerary.park.fullName}</h5>
              <h6>Eateries:</h6>
              <ul class="list-group list-group-flush">
                ${buildEatery(itinerary.eatery)}
              </ul>
              <h6>Attractions:</h6>
              <ul class="list-group list-group-flush">
                ${buildAttraction(itinerary.attraction)}
              </ul>
              <div class="card-button-container">
                <a href="#" class="btn btn-primary btn-sm" id="view-itinerary--${itinerary.id}">View</a>
                <a href="#" class="btn btn-primary btn-sm" id="map-itinerary--${itinerary.id}">Map</a>
                <a href="#" class="btn btn-primary btn-sm" id="delete-itinerary--${itinerary.id}">Delete</a>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
    `
}


//Returns HTML string from each eatery and attraction object in API
export const buildEatery = (eateries) => {
  let eateryString = eateries.map(eatery => 
  `<li class="list-group-item">${eatery.businessName}</li>`)
    
  return eateryString.join("") 
}

export const buildAttraction = (attractions) => {
  let attractionString = attractions.map(
    (attraction) => `<li class="list-group-item">${attraction.name}</li>`
  );
  return attractionString.join("")
};