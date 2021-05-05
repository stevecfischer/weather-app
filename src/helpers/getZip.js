export const getZip = async (location = "") => {
  const apiKeyClientSide = 'js-ZDCKg3pPaInlLUT7zjNemQxJZDrNvkGXxhnBAcAHFBYfWW0GgbOmJttQRPrFa7Vh';
  const locationArray = location.split(",");

  try {
    const zipcodeResponse = await fetch(`https://www.zipcodeapi.com/rest/${apiKeyClientSide}/city-zips.json/${locationArray[0].trim()}/${locationArray[1].trim()}`);
    const zipcodeResponseJson = await zipcodeResponse.json();
    console.log(zipcodeResponseJson.zip_codes[0], 'zipcodeResponseJson');
    // const firstZip = zipcodeResponseJson.
    const longLatResponse = await fetch(`https://www.zipcodeapi.com/rest/${apiKeyClientSide}/info.json/${zipcodeResponseJson.zip_codes[0]}/degrees`);
    const longLatResponseJson = await longLatResponse.json();
    console.log(longLatResponseJson, 'longLatResponseJson');
    return longLatResponseJson;
  }
  catch (e) {
    console.error('We have the error', e);
  }
};
