import React, { useState, useEffect, useRef, Fragment } from 'react';
import { AccessAlarm } from '@material-ui/icons';

const SidebarSearch = ({ setIsSidebarSearchView, handleOnLocationSubmit, todayWeatherData }) => {
  const searchInput = useRef(null);
  const [searchStr, setSearchString] = useState('utica, ny');

  const handleOnLocationChange = (e) => {
    setSearchString(e.target.value);
  };
  const handleOnCloseSearchView = () => {
    if (todayWeatherData) setIsSidebarSearchView(false);
  };

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <>
      <div className="close-button" onClick={() => handleOnCloseSearchView()}>
        <AccessAlarm />
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            className="city-search"
            value={searchStr}
            onChange={(e) => handleOnLocationChange(e)}
            ref={searchInput}
          />
          <button
            type="button"
            className="city-search-submit"
            onClick={() => {
              handleOnLocationSubmit(searchStr);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarSearch;
