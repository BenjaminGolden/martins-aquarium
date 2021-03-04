export const Location = (locationObj) => {
	return (
        `<article class="location-card">
            
            <h3 class="location-name">${locationObj.name}</h3>
            <ul>
                <li class="location-details">Species: ${locationObj.species}</li>
                <li class="location-details">Length: ${locationObj.inches} inches</li>
                <li class="location-details">Harvest Location: ${locationObj.harvestLocation}</li>
                <li class="location-details">Diet: ${locationObj.diet}</li>
                <li class="location-details">Saltwater fish: ${locationObj.saltWater}</li>
            </ul>
        </article>`
    )

}