


/* Create and export function that will generate HTML for each saved itinerary */
export const printItinerary = (itinerary) => {

    return `
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${itinerary.id}" aria-expanded="true" aria-controls="collapse-${itinerary.id}">
      Trip to ${itinerary.park.name}
      </button>
    </h2>
    <div id="collapse-${itinerary.id}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
      <div class="accordion-body">
        <div class="card" style="width: 18rem;">
          <img src="${itinerary.park.images[0].url}" class="card-img-top" alt="${itinerary.park.images[0].altText}">
          <div class="card-body">
            <p class="card-text">${itinerary.park.description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${itinerary.eatery.businessName}</li>
            <li class="list-group-item">${itinerary.attraction.name}</li>
          </ul>
          <div class="card-body">
              <a href="#" class="btn btn-primary card-link">View Itinerary</a>
              <a href="#" class="btn btn-primary card-link">Delete Itinerary</a>
          </div>
        </div>  
      </div>
    </div>
  </div>
    `
}