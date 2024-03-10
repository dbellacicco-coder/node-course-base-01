const { createFile } = require("./helpers/multiplication");
const argv = require("./config/yargs,js");
createFile(argv.b)
  .then((fileName) => console.log(fileName, "creado"))
  .catch((error) => console.log(error));
