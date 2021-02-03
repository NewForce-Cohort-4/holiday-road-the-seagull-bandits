let parks = []

export const useParks = () => {
    return parks.slice()
}

export const getParks = () => {
    let url = `https://developer.nps.gov/api/v1/parks?limit=468&q="National%20Park"&api_key=nbqiP9vQgAXyqsicMSTlQjnowutK0w7ftOsBaFk6`
    return fetch(url)
        .then(response => response.json())
        .then(parsedParks => {
            parks = parsedParks.data.filter(park => park.designation.includes("National Park"))
        })
}
