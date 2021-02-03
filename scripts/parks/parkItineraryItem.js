

const contentTarget = document.querySelector("#park-container")

export const parkHTML = (selectedPark) => {
    console.log(selectedPark)
    const imageNum = Math.floor(Math.random()*selectedPark.images.length);
    console.log(imageNum)
    contentTarget.innerHTML = `
        <p>${selectedPark.fullName}</p>
        <div class="overflow-hidden">
        <div class="image-container w-100 img-fluid hero-img position-relative bottom-50 right-150">
        <img src="${selectedPark.images[imageNum].url}" alt="${selectedPark.images[imageNum].altText}"></div></div>`
    console.log(contentTarget.innerHTML)
}

// alt="${selectedPark.images[imageNum].altText}" class="mx-auto"
/* <div class="image-container" style="background-image: url("${selectedPark.images[imageNum].url}")></div>` */