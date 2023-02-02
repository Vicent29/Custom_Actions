const core = require("@actions/core");
const path = require('path');
const fs = require("fs");

//Declaration of variables
const readmePath = path.resolve('./README.md');
const frase_positiva = core.getInput("frase_positiva");
const frase_negativa = core.getInput("frase_negativa");
const resultado_tests = core.getInput("resultado_tests");
const URL= "https://api.memegen.link/images/img.png";

const MemePositivo= URL.replace("img", frase_positiva);
const MemeNegativo= URL.replace("img", frase_negativa);

//Add line img meme
var msg_output = resultado_tests == "success" ? "El README ha sido modificado correctamente con el MemePositivo" : "El README ha sido modificado correctamente con el MemePositivo";
var AddMeme = resultado_tests == "success" ? MemePositivo : MemeNegativo;
var url_img= "![Meme Test](" + AddMeme + ")";

//Change Readme
fs.readFile(readmePath, 'utf8', function(err, data) {
    if (err) throw err;
    data += url_img;
    fs.writeFile(readmePath, data, function(err) {
        if (err) throw err;
        console.log("Readme Modificado correctamente");
        core.setOutput('msg', msg_output);
        process.exit(0)
    });
});