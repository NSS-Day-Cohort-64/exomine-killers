export const handleFacilityChoice = async (clickEvent) => {
    if ( changeEvent.target.name === "facility") {
        const chosenFacility = changeEvent.target.id

        const response = await fetch("http://localhost:8088/facilitiesInventory")
        const facilityInventories = await response.json()

        let facilityInventoryHTML = "" 

        for (const facilityInventory of facilityInventories) {
            if (chosenFacility = facilityInventory.facilityId) {
                facilityInventoryHTML += `<input type='radio' name='facilityInventory' value='${facilityInventory.mineralId}'/>$${facilityInventory.amouunt} tons of ${facilityInventory.mineralId} - <br>`
            }
        }
        return facilityInventoryHTML
    }
}