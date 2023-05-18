import { setColonyChoice } from "./TransientState.js";
import { setGovernorChoice } from "./TransientState.js";
export const GetGovernors = async () => {
  const response = await fetch("http://localhost:8088/governors");
  const governors = await response.json();

  let governorHTML = `<select name="governor">
    <option value="0" colonyId="0">Choose a governor...</option>`;

  const divStringArray = governors.map((governor) => {
    if (governor.status === true) {
      return `<option value='${governor.id} colonyId='${governor.colonyId}'>${governor.name}</option>`;
    }
  });
  governorHTML += divStringArray.join("");
  governorHTML += "</select>";

  return governorHTML;
};

const handleGovernorChoice = (changeEvent) => {
  if (changeEvent.target.name === "governor") {
    const chosenOption = changeEvent.target.value;
    setGovernorChoice(parseInt(chosenOption));
  }
};

document.addEventListener("change", handleGovernorChoice);

const handleColonyChoice = (changeEvent) => {
  if (changeEvent.target.name === "governor") {
    const chosenOption = changeEvent.target.colonyId;
    setColonyChoice(parseInt(chosenOption));
  }
};

document.addEventListener("change", handleColonyChoice);
