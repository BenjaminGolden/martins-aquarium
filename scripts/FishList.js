import {getFish} from './FishData.js'

export const FishList = () => {

    // #fishList is the place in the html that we want to display the fish list
    const contentElement = document.querySelector("#fishList");
    //fishes is the result of calling the getFish function;
    const fishes = getFish();

    let fishHTMLRepresentations = "";
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            All the fish go here!
        </section>
    `
}




//const allFishes = getFish();
//2. get a refernce to the location on the DOM where yo want to display the list of fish
//const DOMLocation = document.querySelector(#fishList);
//3. Declare a variable to hold on to fish HTML representations
let fishHTMLRepresentations = "";
//4. loop over the array of fish an dfor each one, invoke the Fish component which returns HTML representation
for (const oneThingFromTheSea of allFishes){
fishHTMLRepresentations += Fish(oneThingFromTheSea);
console.log("fishHTMLRepresentations", fishHTMLRepresentations);
//using console.log inside of the loop will log each time the loop runs. 
// where as logging it outside of the loop will console.log everything once 
}
//5. finally set the dom equal to the variable containing the fish html representations
DOMLocation.innerHTML += fishHTMLRepresentation;
