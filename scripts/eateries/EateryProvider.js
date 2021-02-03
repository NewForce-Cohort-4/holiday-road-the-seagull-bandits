let eateries = []

export const useEateries = () => eateries.slice()

export const getEateries = (id) => {
  
    return fetch("http://holidayroad.nss.team/eateries")
      .then((response) => response.json())
      .then((parsedEateries) => {
        eateries = parsedEateries;
      }); 
  
}