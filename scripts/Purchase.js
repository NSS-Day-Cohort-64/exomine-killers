
import { transientState } from "./TransientState.js"

export const purchaseButtonTransfer = async (clickEvent) => {
    const responseFacility = await fetch("http://localhost:8088/facilityInventory")
    const facilityInventories = await responseFacility.json()
    const responseColony = await fetch("http://localhost:8088/colonyInventory")
    const colonyInventories = await responseColony.json()


    // Ensure a radio button is checked, 
    if (transientState.mineralId !== 0) {
        //On purchase button click,
        if (clickEvent.target.id === "purchase") {
            const customEvent = new CustomEvent("newMineralPurchased")
            document.dispatchEvent(customEvent)
            //reduce the facilityInventory amount of the checked mineral by 1 and if there were none of that mineral, create it
            // Iterate through the inventory so as to get an actual object

            for (const facilityInventory of facilityInventories) {
                if (facilityInventory.mineralId === transientState.mineralId) {
                    facilityInventory.amount--
                }
                    for(const colonyInventory of colonyInventories) {
                        if (colonyInventory.mineralId === transientState.mineralId) {
                            colonyInventory.amount++
                        } else {
                                let colonyInventoryObject =
                                {
                                    "colonyId": transientState.colonyId,
                                    "mineralId": transientState.mineralId,
                                    "amount": 1
                                }
                                //POST the object to colonyInventory
                                const postOptions = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(colonyInventoryObject)
                                }
                                    await fetch("http://localhost:8088/colonyInventory", postOptions)
                                }
                            }
                    
                    }
                }
        }

    }


// const postOrder = async () => {
//     const postOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(colonyInventoryObject)
//     }
//     await fetch("http://localhost:8088/colonyInventory", postOptions)
// }

document.addEventListener("click", purchaseButtonTransfer)