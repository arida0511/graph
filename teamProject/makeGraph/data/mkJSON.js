"use strict";
exports.__esModule = true;
// json으로 변환
var fs_1 = require("fs");
var data = (0, fs_1.readFileSync)("./links_ree.txt").toString();
var lines = data.split("\r\n");
var headers = lines[0].split("\t").map(function (header) { return header.trim(); });
var json = lines
    .map(function (line, index) {
    if (index === 0) {
        return undefined;
    }
    var elements = line.split("\t");
    var data = {};
    for (var i = 0; i < headers.length; i++) {
        data[headers[i]] = elements[i];
    }
    return data;
})
    .filter(function (eles) { return !!eles; });
(0, fs_1.writeFileSync)("links.json", JSON.stringify(json, null, 2));
var jj = require("./links.json");
//console.log();
var data2 = (0, fs_1.readFileSync)("./points_ree.txt").toString();
var lines2 = data2.split("\r\n");
var headers2 = lines2[0].split("\t").map(function (header2) { return header2.trim(); });
var json2 = lines2
    .map(function (line2, index2) {
    if (index2 === 0) {
        return undefined;
    }
    var elements2 = line2.split("\t");
    var data2 = {};
    for (var i = 0; i < headers2.length; i++) {
        data2[headers2[i]] = elements2[i];
        //console.log(data2[headers2[i]]);
    }
    return data2;
})
    .filter(function (eles2) { return !!eles2; });
(0, fs_1.writeFileSync)("points.json", JSON.stringify(json2, null, 2));
