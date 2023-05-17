export const GetGovernors = async () => {
    const response = await fetch("http://localhost:8088/governors")
    const governors = await response.json()

    let governorHTML = `<select name="governor">
    <option value="0" colonyId="0">Choose a governor...</option>`

    const divStringArray = governors.map(
        (governor) => {
            return `<option value='${governor.id} colonyId='${governor.colonyId}'>${governor.name}</option>`
        }
    )
    governorHTML += divStringArray.join("")
    governorHTML += "</select>"

    return governorHTML
}