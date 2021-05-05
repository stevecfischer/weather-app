export const getWeather = async (zipcode, unitType = "metric") => {
  const weatherAPI = 'adc5a16466b1ffa37087a9d4cb31dc30';
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${weatherAPI}&units=${unitType}`);
    const foo = await response.json();
    console.log(foo, "foo");
    return foo;
  }
  catch (e) {
    console.error('We have the error', e);
  }
};


// const getZip = (city,state) => {
//   const weatherAPI = 'adc5a16466b1ffa37087a9d4cb31dc30';
//   // const unit = unitType === "f" ? "imperial" : "metric";
//   fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${selectedCity}&appid=adc5a16466b1ffa37087a9d4cb31dc30&units=${unit}`)
//     .then(res => res.json())
//     .then(
//       (result) => {
//         console.log(result, "result");
//         // setIsLoaded(true);
//         // setMetricResponse(result);
//       },
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//         console.error(error, 'error');
//       }
//     )
// }
//
// export default getZip;


