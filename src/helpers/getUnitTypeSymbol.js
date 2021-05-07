export const getUnitTypeSymbol = (activeUnitType) => {
  let res;
  if (activeUnitType === 'metric') {
    res = 'c';
  }
  if (activeUnitType === 'imperial') {
    res = 'f';
  }
  return res;
};
