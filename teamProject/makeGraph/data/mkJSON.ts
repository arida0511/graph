// json으로 변환
import { readFileSync, writeFileSync } from "fs";
import { type } from "os";
const data = readFileSync("./links_ree.txt").toString();

const lines = data.split("\r\n");

const headers = lines[0].split("\t").map((header) => header.trim());
const json = lines
  .map((line, index) => {
    if (index === 0) {
      return undefined;
    }
    const elements = line.split("\t");

    let data: { [key in string]: string } = {};
    for (let i = 0; i < headers.length; i++) {
      data[headers[i]] = elements[i];
    }
    return data;
  })
  .filter((eles) => !!eles);
writeFileSync("links.json", JSON.stringify(json, null, 2));

const jj = require("./links.json");
//console.log();

const data2 = readFileSync("./points_ree.txt").toString();

const lines2 = data2.split("\r\n");
const headers2 = lines2[0].split("\t").map((header2) => header2.trim());
const json2 = lines2
  .map((line2, index2) => {
    if (index2 === 0) {
      return undefined;
    }
    const elements2 = line2.split("\t");
    let data2: { [key in string]: string } = {};
    for (let i = 0; i < headers2.length; i++) {
      data2[headers2[i]] = elements2[i];
      //console.log(data2[headers2[i]]);
    }
    return data2;
  })
  .filter((eles2) => !!eles2);

writeFileSync("points.json", JSON.stringify(json2, null, 2));
