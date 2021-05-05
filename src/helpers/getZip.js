export const getZip = async (location = "") => {
  const locationArray = location.split(",");
  const apiKeyClientSide = 'js-ZDCKg3pPaInlLUT7zjNemQxJZDrNvkGXxhnBAcAHFBYfWW0GgbOmJttQRPrFa7Vh';

  try {
    const response = await fetch(`https://www.zipcodeapi.com/rest/${apiKeyClientSide}/city-zips.json/${locationArray[0].trim()}/${locationArray[1].trim()}`);
    return await response.json();
  }
  catch (e) {
    console.error('We have the error', e);
  }
};
