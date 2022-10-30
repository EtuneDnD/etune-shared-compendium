var express = require('./node_modules/express');
const { exec } = require("child_process");

var app = express();

function _run(command) {
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

app.get('/push', async function (req, res) {
    _run('git pull && git add -A && git commit -m "Etune commit" && git push');
});

app.get('/pull', async function (req, res) {
    _run("git pull");
});


app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
