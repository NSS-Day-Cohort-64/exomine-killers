export const GetFacilities = async () => {
  const response = await fetch("http://localhost:8088/facilities");
  const facilities = await response.json();
  const activeFacilities = facilities.filter(
    (facility) => facility.status === true
  );
  const allFacilities = activeFacilities
    .map(
      (facility) =>
        `<option value="${facility.id}">${facility.location}</option>`
    )
    .join("");
  debugger;
  const dropDown = `<select id="facility">
<option value="0"> Choose a facility...</option>
${allFacilities}
</select>`;
  return dropDown;
};
