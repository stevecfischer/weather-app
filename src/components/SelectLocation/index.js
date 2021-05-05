import React from 'react';
import Select from 'react-select';
import styled, { css } from 'styled-components';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


export const SelectLocationStyled = styled.div`
  ${props => {
    return css`
      margin-bottom: 50px;
    `;
  }}
`;

const SelectLocation = ({selectedOption, setSelectedOption}) => {
  return (
    <SelectLocationStyled>
      <div className="city-select-dropdown">
        <Select
          defaultValue={selectedOption}
          onChange={() => setSelectedOption()}
          options={options}
        />
      </div>
    </SelectLocationStyled>
  );
};

export default SelectLocation;
