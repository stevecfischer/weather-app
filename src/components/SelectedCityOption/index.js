import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SelectedCityOption = ({selectedOption, setSelectedOption}) => {
  return (
    <>
      <div className="city-select-dropdown">
        <Select
          defaultValue={selectedOption}
          onChange={() => setSelectedOption()}
          options={options}
        />
      </div>
    </>
  );
};

export default SelectedCityOption;
