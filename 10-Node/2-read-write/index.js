const fs = require('fs');
const path = require('path');
const { saveData } = require("./data");

const file = "2-read-write-users.json";
const filePath = path.join(__dirname, 'data', file);

saveData(filePath, "output", true);