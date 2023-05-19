
import { GetPurchasePreview, PurchaseButton } from "./Cart.js"
import { GetFacilities } from "./Facilities.js"
import { getFacilityInventory } from "./FacilitiesInventory.js"
import { GetGovernors } from "./Govenors.js"
import { colonyInventory } from "./ColonyInventory.js"
import { getFacilityInventoryTitle } from "./FacilityInventoryTitle.js"

export const display = async () => {

    const governorsHTML = await GetGovernors()
    const facilitiesHTML = await GetFacilities()
    const facilityInventoryHTML = await getFacilityInventory()
    const purchaseButtonHTML = PurchaseButton()
    const purchasePreviewHTML = await GetPurchasePreview()
    const colonyHtml = await colonyInventory();
    const facilityInventoryTitleHTML = await getFacilityInventoryTitle()


return `
        <header>
        <h1>Exomine</h1>
        </header>

        <section class="choose_governor">
            <h2>Choose Governor:</h2>
        ${governorsHTML}
        </section>

        <section class="choose_facility">
            <h2>Choose Facility:</h2>
        ${facilitiesHTML}
        </section>

        <section class="colony_minerals_chosen">
        ${colonyHtml}
        </section>

        <section id="facility_inventory">
            ${facilityInventoryTitleHTML}
        ${facilityInventoryHTML}
        </section>

        <section id="purchase">
        ${purchasePreviewHTML}
        ${purchaseButtonHTML}   
        </section> 
    `;
};
