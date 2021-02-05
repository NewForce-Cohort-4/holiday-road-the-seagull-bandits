import { parksSelector } from './parks/ParkSelector.js'
import {getEateries} from "./eateries/EateryProvider.js"
import {renderEateryDropdown} from "./eateries/EateryList.js"
import { attractionSelect } from "./attractions/AttractionSelect.js";
import { findAttraction } from "./attractions/attractionItinerary.js";
import {  } from "./directions/printDirections.js";

// Make fetch call and build drop down list.
attractionSelect();

// Make fetch call and loop through entries to print drop-down list selection to the DOM container.
findAttraction();

renderEateryDropdown()
parksSelector()
