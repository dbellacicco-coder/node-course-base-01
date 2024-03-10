const fs = require("fs");
const colors = require("colors");

let createFile = async (base) => {
  try {
    let output = "";

    console.log(`==========================`.green);
    console.log(`TABLA DEL `.green, colors.blue(base));
    console.log(`==========================`.green);

    for (let i = 1; i <= 10; i++) {
      output += ` ${base} x ${i} = ${base * i}\n `;
    }
    console.log(output);

    // crear archivo

    fs.writeFileSync(`./output/tabladel${base}.txt`, output);
    return `tabladel${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { createFile };
