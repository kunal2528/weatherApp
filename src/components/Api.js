
const Api = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
  const response = await fetch(url);
  const resJson = await response.json();
  return resJson;
}

export default Api;