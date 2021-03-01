export const Tip = (tipObj) => {
	return (
        `<article class="fish-card">
            <div><img class="fish-image" src="images/${fishObj.image}" alt="fish" /></div>
            <h3 class="fish-name">${fishObj.name}</h3>
            <ul>
                <li class="fish-details">Species: ${fishObj.species}</li>
                <li class="fish-details">Length: ${fishObj.inches} inches</li>
                <li class="fish-details">Harvest Location: ${fishObj.harvestLocation}</li>
                <li class="fish-details">Diet: ${fishObj.diet}</li>
                <li class="fish-details">Saltwater fish: ${fishObj.saltWater}</li>
            </ul>
        </article>`
    )

}