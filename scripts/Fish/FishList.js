//imports the getFish function from the Fishdata.js module
import {getFish, getMostHolyFish, getSoldierFish, getUnworthy} from './FishData.js';
//imports the fish function from the Fish.js module
import {Fish} from './Fish.js';

//  


//exporting the FishList function
export const FishList = () => {
   //naming a variable allFishes which stores the value of running the getFish function     
   
    const holyFish = getMostHolyFish();
    addFishToDom(holyFish, "Holy Fish:");
    const soldierFish = getSoldierFish();
    addFishToDom(soldierFish, 'Soldier Fish:');
    const unworthyFish = getUnworthy();
    addFishToDom(unworthyFish, 'Unworthy Fish:');
};
// debugger
//     const allFishes = holyFish.concat(soldierFish, unworthyFish)

    // console.log(typeof allFishes);
    // //naming a variable DOMLocation which stores the location to place the collected data 
    // const DOMLocation = document.querySelector("#fishList")
    // let listOfAllFishHTML = "";   //declaring the variable fishHTMLRepresentations
    // for (const oneThingFromTheSea of allFishes) {
    // //for of loop which will pull one thing from the sea of the allFishes function.
    // //essentially pulling one set of information from the fishCollection array.
    //     listOfAllFishHTML += Fish(oneThingFromTheSea);//oneThingFromTheSea goes in the argument
    
//     }
    
//     DOMLocation.innerHTML += listOfAllFishHTML
// }

const addFishToDom = (whichFishArray, phrase) => {
    const DOMLocation = document.querySelector("#fishList")
    let listOfAllFishHTML = '';   
    for (const oneThingFromTheSea of whichFishArray) {
  
        listOfAllFishHTML += Fish(oneThingFromTheSea);
    }
    
    DOMLocation.innerHTML += `<h2 class="fish-headline">${phrase}</h2>
                            <div class='fishSection'>${listOfAllFishHTML}</div>`

};