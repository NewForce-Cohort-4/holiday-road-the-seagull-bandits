export const printBizContent = (attractionResult) => {
    return `
    <div class="card bg-light text-dark">
    <div class="card-header mt-1"><h3>${attractionResult.name}</h3></div>
    <div class="card-body">
        <div class="card-title mt-1">${attractionResult.city}, ${attractionResult.state}</div>
        <div class="col-6 mx-auto mt-3">
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#target-${attractionResult.id}">Details...</button>
        </div>
        <div class="card-text mt-1" id="biz-content-target">    
            <div class="col-auto mx-auto mt-3 collapse" id="target-${attractionResult.id}">
                ${attractionResult.description}
            </div>
        </div>
    </div>
  </div>
    `
};