export const getWeather = async (lat, lng, unitType = "metric") => {
  const weatherAPI = 'adc5a16466b1ffa37087a9d4cb31dc30';
  // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&appid=${weatherAPI}&units=${unitType}`;
  const weeklyForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${weatherAPI}&units=${unitType}`;
  try {
    const response = await fetch(weeklyForecastUrl);
    return await response.json();
  }
  catch (e) {
    console.error('We have the error', e);
  }
};
