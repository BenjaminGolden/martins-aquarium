export const Location = (locationObj) => {
	return (
        `<article class="location-card">
            
            <h4 class="location-name">Harvest Locations:</h4>
            <ul>
                <li class="location-details">${locationObj.loc1}</li>
                <li class="location-details">${locationObj.loc2}</li>
                <li class="location-details">${locationObj.loc3}</li>
            </ul>
        </article>`
    )

}