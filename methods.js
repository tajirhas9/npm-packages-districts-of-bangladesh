import { districtsJSON } from "./districts";

/**
 *
 * @returns All the division
 */
export const GetDivisions = () => {
  var divisions = [];
  for (var division in districtsJSON) {
    divisions.push(division);
  }
  return divisions;
};

/**
 *
 * @param {*} division_name
 * @returns all the districts of division with name `division_name``
 */
export const GetDistrictsFiltered = (division_name) =>
  districtsJSON[division_name];

/**
 *
 * @returns all the districts of bangladesh sorted;
 */
export const GetDistrictsUnfiltered = () => {
  var allDistricts = [];

  for (var division in districtsJSON) {
    for (var i = 0; i < districtsJSON[division].length; ++i) {
      allDistricts.push(division);
    }
  }

  return allDistricts.sort();
};

/**
 *
 * @param {*} query_string
 * @returns a boolean on wheather the query string is a division name or not
 */

export const IsADivision = (query_string) => {
  for (var division in districtsJSON) {
    if (division.localeCompare(query_string) == 0) return true;
  }
  return false;
};
