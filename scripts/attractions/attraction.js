export const printBizContent = (attractionResult) => {
    return `
    <div class="card bg-light text-dark">
    <div class="card-header"><h3>${attractionResult.name}</h3></div>
    <div class="card-body">
        <div class="card-title">${attractionResult.city}, ${attractionResult.state}<div>
        <div class="card-text">
            ${attractionResult.description}
        </div>
    </div>
  </div>
    `
};