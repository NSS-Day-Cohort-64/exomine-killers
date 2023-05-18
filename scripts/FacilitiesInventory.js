import { transientState } from "./TransientState.js"

export const getFacilityInventory = async (chosenFacility) => {
    const response = await fetch("http://localhost:8088/facilityInventory?_expand=mineral")
    const facilitiesInventories = await response.json()

    const correctFacility = transientState.facilityId
    let facilityInventoryHTML = ``

    if (transientState.facilityId !== 0) {
        for (const facilityInventory of facilitiesInventories) {
            if (facilityInventory.facilityId === correctFacility) {
            facilityInventoryHTML += `<input type="radio" name="facilityInventory" facilityId = "${facilityInventory.facilityId}"  value="${facilityInventory.id}"/>${facilityInventory.amount} tons of ${facilityInventory.mineral.name}<br>`
        }
    }
}
return facilityInventoryHTML

}    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const handleFacilityInventoryChoice = (changeEvent) => {
    
    if (changeEvent.target.name === "facility") {
        const chosenFacility = changeEvent.target.value
        return getFacilityInventory(chosenFacility)
    }
    const facilityInventoryCustomEvent = new CustomEvent("facility-Inventory")
    document.dispatchEvent(facilityInventoryCustomEvent)
}

document.addEventListener("change", handleFacilityInventoryChoice)
