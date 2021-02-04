


/* Create and export function that will generate HTML for each saved itinerary */
export const printItinerary = (itinerary) => {

    return `
    <div class="card" style="width: 18rem;">
    <img src="${itinerary.park.images[0].url}" class="card-img-top" alt="${itinerary.park.images[0].altText}">
    <div class="card-body">
      <h5 class="card-title">Trip to ${itinerary.park.name}</h5>
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
    
    `
}

/*
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
*/