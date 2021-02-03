let attractionList = [];

export const useAttractions = () => attractionList.slice();

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(r => r.json())
    .then((attractionsReturned) => {
        attractionList = attractionsReturned
    })
};
