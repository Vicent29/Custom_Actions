const core = require("@actions/core");
const path = require('path');
const fs = require("fs");

//Declaration of variables
const readmePath = path.resolve('../README.md');
const frase_positiva = core.getInput("frase_positiva");
const frase_negativa = core.getInput("frase_negativa");
const resultado_tests = core.getInput("resultado_tests");
const URL= "https://api.memegen.link/images/img.png";

const MemeNegativo= URL.replace("img", frase_positiva);
const MemePositivo= URL.replace("img", frase_negativa);

//Add line img meme
var AddMeme = resultado_tests === "success" ? MemePositivo : MemeNegativo 

//Change Readme
fs.readFile(readmePath, 'utf8', function(err, data) {
    if (err) throw err;
    data +=  "![Meme Test](" + AddMeme + ")";
    fs.writeFile(readmePath, data, function(err) {
        if (err) throw err;
        console.log("Readme Modificado correctamente");
        core.setOutput('msg', "Readme Modificado correctamente");
        process.exit(0)
    });
});