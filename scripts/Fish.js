export const Fish = (fishObj) => {
	return (
        `<article class="fish-card">
            <div><img class="fish-image" src="scripts/images/${fishObj.image}" alt="fish" /></div>
            <h3 class="fish-name">${fishObj.name}</h3>
            <ul>
                <li class="fish-details">${fishObj.species}</li>
                <li class="fish-details">Length: ${fishObj.length} inches</li>
                <li class="fish-details">Found: ${fishObj.location}</li>
                <li class="fish-details">Diet: ${fishObj.diet}</li>
            </ul>
        </article>`
    )

}