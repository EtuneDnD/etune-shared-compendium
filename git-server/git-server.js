var express = require('./node_modules/express');
const { exec } = require("child_process");

var app = express();

function run(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error("Error", error);
                reject(error);
            }
            console.info(stdout, stderr);
            resolve(stdout);
        });
    });
}

app.get('/', async function (req, res) {
    console.log("Hola")
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
