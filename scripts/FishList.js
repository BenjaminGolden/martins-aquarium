import {getFish} from './FishData.js';
import {Fish} from './Fish.js';

export const FishList = () => {
        const allFishes = getFish();
        const DOMLocation = document.querySelector("#fishList")
        let fishHTMLRepresentations = "";
        for (const oneThingFromTheSea of allFishes) {
            fishHTMLRepresentations += Fish(oneThingFromTheSea);
        }
        DOMLocation.innerHTML += `${fishHTMLRepresentations}`
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
