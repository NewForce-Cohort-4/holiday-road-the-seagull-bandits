let attractionList = [];
// let attractionVar = '';

export const useAttractions = () => attractionList.slice();

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(r => r.json())
    .then((attractionsReturned) => {
        attractionList = attractionsReturned
    })
};

export const parseAttractions = () => {
    let attractionVar = '';
    getAttractions().then(() => {
        attractionVar = useAttractions();
        return attractionVar
    })
}