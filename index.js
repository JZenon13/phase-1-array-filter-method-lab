function findMatching(names, string) {
  let answer = names.filter(
    (name) => name.toUpperCase() === string.toUpperCase()
  );
  return answer;
}

function fuzzyMatch(driversNames, letters) {
  let answer2 = driversNames.filter(
    (driverName) => driverName.substring(0, 2) === letters
  );
  return answer2;
}

function matchName(driverObjects, string) {
  let answer3 = driverObjects.filter(
    (driverObject) => driverObject.name === string
  );
  return answer3;
}
