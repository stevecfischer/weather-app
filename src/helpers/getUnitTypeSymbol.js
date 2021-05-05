export const getUnitTypeSymbol = (activeUnitType) => {
  if(activeUnitType === 'metric'){
    return "c";
  }
  if(activeUnitType === 'imperial'){
    return "f";
  }
}
