const fs = require('fs');
const path = require('path');

const writePersonToFile = (firstName, lastName, person, outputFolder, fileName) => {
    /*
    Name: Clementina
    Surname: DuBuque
    Street: Kattie Turnpike
    Zip Code: 31428-2261
    City: Lebsackbury
    Phone: 024-648-3804
    */

    const personData = `Name: ${firstName}\n`
        + `Surname: ${lastName}\n`
        + `Street: ${person.address.street}\n`
        + `Zip Code: ${person.address.zipcode}\n`
        + `City: ${person.address.city}\n`
        + `Phone: ${person.phone}`;

    fs.writeFile(path.join(outputFolder, fileName), personData, function (err) {
        if (err) {
            console.log(err);
        }
    });
}

const saveData = (filePath, outputFolder, overwrite) => {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        } else {
            fs.mkdir(outputFolder, function (err) {
                if (err) {
                    if (err.code === 'EEXIST' && !overwrite) {
                        console.log('Folder already exists.');
                        return;
                    }
                }
            });

            const persons = JSON.parse(data);

            for (let person of persons) {
                let names = person.name.split(' ');
                let firstName = names[0];
                let lastName = names[names.length - 1];
                let fileName = `${person.id}-${firstName}-${lastName}.txt`;

                fs.open(fileName, 'r', function (err, fd) {
                    if (err || overwrite) {
                        writePersonToFile(firstName, lastName, person, outputFolder, fileName);
                    } else {
                        console.log("The file exists!");
                    }
                });
            }
        }
    });
}

module.exports = {
    saveData: saveData
}