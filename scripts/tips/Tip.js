export const Tip = (tipObj) => {
	return (
        `<aside class="tip-card">
            <div id="tipList">
            <h3>Martin's Tips!</h3><br>
                <ul>
                    <li><b>Cleaning:</b> ${tipObj.cleaning}</li><br>
                    <li><b>Salinity:</b> ${tipObj.salinity}</li><br>
                    <li><b>Temperature:</b> ${tipObj.temperature}</li><br>
                </Ul
            
            </div>
        </aside>`
    )

}