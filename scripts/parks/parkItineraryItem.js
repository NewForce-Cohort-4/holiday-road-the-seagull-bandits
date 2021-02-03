

const contentTarget = document.querySelector("#park-container")

export const parkHTML = (selectedPark) => {
    contentTarget.innerHTML = `
        <p>${selectedPark.fullName}</p>
        <img src="${selectedPark.images[1].url}" alt="${selectedPark.images[1].altText}">`
    console.log(contentTarget.innerHTML)
}