//imports the getFish function from the Fishdata.js module
import {getFish, getMostHolyFish, getSoldierFish, getUnworthy} from './FishData.js';
//imports the fish function from the Fish.js module
import {Fish} from './Fish.js';

//  


//exporting the FishList function
export const FishList = () => {
   //naming a variable allFishes which stores the value of running the getFish function     
    const allFishes = getMostHolyFish().concat(getSoldierFish(), getUnworthy());
    console.log(typeof allFishes);
    //naming a variable DOMLocation which stores the location to place the collected data 
    const DOMLocation = document.querySelector("#fishList")
    let listOfAllFishHTML = "";   //declaring the variable fishHTMLRepresentations
    for (const oneThingFromTheSea of allFishes) {
    //for of loop which will pull one thing from the sea of the allFishes function.
    //essentially pulling one set of information from the fishCollection array.
        listOfAllFishHTML += Fish(oneThingFromTheSea);//oneThingFromTheSea goes in the argument
    
    }
    
    DOMLocation.innerHTML += listOfAllFishHTML
}




//const allFishes = getFish();
//2. get a refernce to the location on the DOM where yo want to display the list of fish
//const DOMLocation = document.querySelector(#fishList);
//3. Declare a variable to hold on to fish HTML representations
//let fishHTMLRepresentations = "";
//4. loop over the array of fish an dfor each one, invoke the Fish component which returns HTML representation
//for (const oneThingFromTheSea of allFishes){
//fishHTMLRepresentations += Fish(oneThingFromTheSea);
//console.log("fishHTMLRepresentations", fishHTMLRepresentations);
//using console.log inside of the loop will log each time the loop runs. 
// where as logging it outside of the loop will console.log everything once 
//5. finally set the dom equal to the variable containing the fish html representations
//DOMLocation.innerHTML += fishHTMLRepresentation;

// let cube = {
//     color: "blue",
//     shape: "square",
// }