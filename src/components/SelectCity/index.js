import React from 'react';
import Select from 'react-select';
import styled, { css } from 'styled-components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


export const SelectCityStyled = styled.div`
  ${props => {
    return css`
      margin-bottom: 50px;
    `;
  }}
`;

const SelectCity = ({selectedOption, setSelectedOption}) => {
  return (
    <SelectCityStyled>
      <div className="city-select-dropdown">
        <Select
          defaultValue={selectedOption}
          onChange={() => setSelectedOption()}
          options={options}
        />
      </div>
    </SelectCityStyled>
  );
};

export default SelectCity;
