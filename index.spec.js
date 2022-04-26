const {multiplication, getExampleApi} = require('./index');
const axios = require('axios');
const dummy = require('./dummy');
jest.mock('axios'); // axios = jest.fn() -> () => {}
jest.mock('./dummy');


describe('multiplication function', () => {
  it('should return a multiplied by b', () => {
    const a = 10;
    const b = 20;
    const result = (a * b) + 2;
    const MultiResult = multiplication(a, b);

    expect(MultiResult).toBe(result) // MultiResult === result
    expect(MultiResult).not.toBe(a + b) // MultiResult !== a + b
  });
});

describe('getExampleApi function', () => {
  it('should return a valid JSON', async () => {
    axios.get
      .mockResolvedValueOnce({"foo": "bar"})
      .mockResolvedValueOnce({"hello": "world 2"})
      .mockResolvedValue({"example": "object"});
    // axios.get.mockImplementation(() => {return {"foo": "bar"}}); --- Also valid
    dummy.mockResolvedValue(10);
    const result = await getExampleApi();
    console.log(result);

    expect(JSON.stringify(result)).toBe(JSON.stringify({ results: [{"foo": "bar"}, {"hello": "world 2"}, {"example": "object"}, {"example": "object"}], number: 10}))
    expect(typeof(result)).not.toBe("number");
    expect(axios.get).toHaveBeenCalledTimes(4);
  });
})
