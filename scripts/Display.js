import { GetFacilities } from "./Facilities.js"
import { GetGovernors } from "./Govenors.js"

export const display = async () => {
const governorsHTML = await GetGovernors()
const facilitiesHTML = await GetFacilities()

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
    
        <section class="facility_inventory">
            <h2>Choose Facility:</h2>
        
        </section>

        
    `
}