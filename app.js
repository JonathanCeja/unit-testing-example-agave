const {getExampleApi} = require('./index');

async function main() {
  const result = await getExampleApi();
  console.log(result);
}

main();
