export const getWeather = async (zipcode, unitType = "metric") => {
  const weatherAPI = 'adc5a16466b1ffa37087a9d4cb31dc30';
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${weatherAPI}&units=${unitType}`);
    return await response.json();
  }
  catch (e) {
    console.error('We have the error', e);
  }
};
