import { createContext } from 'react';

const initialState = {
  unitType: 'metric',
  unitTypeSymbol: 'c',
  setUnitType: () => {},
};
export const UnitTypeContext = createContext(initialState);
