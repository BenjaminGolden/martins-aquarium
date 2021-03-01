//imports the getFish function from the Fishdata.js module
import {getLocation} from './LocationData.js';
//imports the fish function from the Fish.js module
import {Fish} from './Location.js';

//exporting the FishList function
export const LocationList = () => {
   //naming a variable allFishes which stores the value of running the getFish function     
    const allLocations = getLocation();
    //console.log(typeof allFishes);
    //naming a variable DOMLocation which stores the location to place the collected data 
    const DOMLocation = document.querySelector("#fishList")
    let listOfAllLocationsHTML = "";   //declaring the variable fishHTMLRepresentations
    for (const oneThingFromTheLocation of allLocations) {
    //for of loop which will pull one thing from the sea of the allFishes function.
    //essentially pulling one set of information from the fishCollection array.
        listOfAllLocationsHTML += Fish(oneThingFromTheLocation);//oneThingFromTheSea goes in the argument
    
    }
    
    DOMLocation.innerHTML += listOfAllLocationsHTML
}