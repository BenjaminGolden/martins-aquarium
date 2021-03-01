//imports the getFish function from the Fishdata.js module
import {getTip} from './TipData.js';
//imports the fish function from the Fish.js module
import {Tip} from './Tip.js';

//exporting the FishList function
export const TipList = () => {
   //naming a variable allFishes which stores the value of running the getFish function     
    const allTips = getTip();
    //console.log(typeof allFishes);
    //naming a variable DOMLocation which stores the location to place the collected data 
    
    const DOMLocation = document.querySelector("#fishList")//still need to find a place where you want to store the tip data

    let listOfAllTipsHTML = "";   //declaring the variable fishHTMLRepresentations
    for (const oneThingFromTheTips of allTips) {
    //for of loop which will pull one thing from the sea of the allFishes function.
    //essentially pulling one set of information from the fishCollection array.
        listOfAllTipsHTML += Fish(oneThingFromTheTips);//oneThingFromTheSea goes in the argument
    
    }
    
    DOMLocation.innerHTML += listOfAllTipsHTML
};s