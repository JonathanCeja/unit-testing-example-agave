const axios = require('axios');
const dummy = require('./dummy');

const multiplication = (a, b) => {
  return (a * b) + 2;
}

const getExampleApi = async () => {
  const result1 = await axios.get('https://postman-echo.com/get');
  const result2 = await axios.get('https://postman-echo.com/get');
  const result3 = await axios.get('https://postman-echo.com/get');
  const result4 = await axios.get('https://postman-echo.com/get');
  const number = await dummy();
  return {results: [result1, result2, result3, result4], number: number};
}

module.exports = {multiplication, getExampleApi};
