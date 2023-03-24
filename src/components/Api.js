
const Api = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=01a996f9161361b7ac45c53200adda1c`
  const response = await fetch(url);
  const resJson = await response.json();
  // console.log(resJson);
  return resJson;
}

export default Api;