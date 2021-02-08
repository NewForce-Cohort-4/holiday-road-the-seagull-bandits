const directionList = (apiObject) => {
    return `    <ul class="list-group list-group-horizontal">
                    <li class="list-group-item flex-fill">Street name: ${apiObject.street_name}</li>
                    <li class="list-group-item flex-fill">Direction: ${apiObject.text}</li>
                    <li class="list-group-item flex-fill">Distance: ${apiObject.distance} miles</li>
                </ul>
    `
};

export const directions = (apiObject) => {

    let dTarget = document.querySelector("#direction-container")
    let dInt = 1;
    let dString = "";
    let xVar = 0;
    let allDirections = apiObject.paths[0].instructions;

    

    for (const turn of allDirections) {
        dString += `
        <li class="list-group-item direction-header text-light">Step ${dInt}</li>
        ${directionList(turn)}
        `
        xVar++;
        dInt++;
    }

    dTarget.innerHTML = `
    <ul class="list-group">
        ${dString}
    </ul>
    `

};