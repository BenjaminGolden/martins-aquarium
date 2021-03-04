//imports the getFish function from the Fishdata.js module
import {getTip} from './TipData.js';
//imports the fish function from the Fish.js module
import {Tip} from './Tip.js';

//exporting the result of calling the FishList function
export const TipList = () => {
      
    const allTips = getTip();
    const TipLocation = document.querySelector("#tipList")//still need to find a place where you want to store the tip data

    for (const oneTip of allTips) {
    TipLocation.innerHTML += Tip(oneTip);
    }    
};