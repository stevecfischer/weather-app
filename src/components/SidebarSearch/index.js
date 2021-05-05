import React, {useState, useEffect, useRef} from 'react';

const SidebarSearch = ({setIsSidebarSearchView, handleOnLocationSubmit, todayWeatherData}) => {
  const searchInput = useRef(null)
  const [searchStr, setSearchString] = useState(null);

  const handleOnLocationChange = (e) => {
    setSearchString(e.target.value);
  }
  const handleOnCloseSearchView = () => {
    if(todayWeatherData) setIsSidebarSearchView(false);
  }

  useEffect(() => {
    searchInput.current.focus();
  }, []);


  return (
    <>
      <div
        className="close-button"
        onClick={() => handleOnCloseSearchView()}
      >
        X
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
            className="city-search-submit"
            onClick={
              () => {
                handleOnLocationSubmit(searchStr)
              }
            }
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarSearch;
