export const transientState = {
  governorId: 0,
  colonyId: 0,
  facilityId: 0,
  mineralId: 0,
};

export const setGovernorChoice = (chosenGovernor) => {
  transientState.governorId = chosenGovernor;
  console.log(transientState);
};

export const setColonyChoice = (chosenColony) => {
  transientState.colonyId = chosenColony;
  console.log(transientState);
};

export const setFacilityChoice = (chosenFacility) => {
  transientState.facilityId = chosenFacility;
  console.log(transientState);
};

export const setMineralChoice = (chosenMineral) => {
  transientState.mineralId = chosenMineral;
  console.log(transientState);
};
