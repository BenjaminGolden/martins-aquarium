//imports the getFish function from the Fishdata.js module
import {getLocation} from './LocationData.js';
//imports the fish function from the Fish.js module
import {Location} from './Location.js';

//exporting the FishList function
export const LocationList = () => {
    const allLocations = getLocation();
    const DOMLocation = document.querySelector("#locationList")
    allLocations.forEach(
        (locationObj) => {
            DOMLocation.innerHTML += Location(locationObj)
        }
    )
};
    
    
    
//     let listOfAllLocationsHTML = "";   //declaring the variable fishHTMLRepresentations
//     for (const oneThingFromTheLocation of allLocations) {
//         listOfAllLocationsHTML += Location(oneThingFromTheLocation);//oneThingFromTheSea goes in the argument
    
//     }
    
//     DOMLocation.innerHTML += listOfAllLocationsHTML
// }