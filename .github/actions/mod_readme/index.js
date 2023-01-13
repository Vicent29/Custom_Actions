const core = require("@actions/core");
const path = require('path');
const fs = require("fs");

//Ruta Readme:
const readmePath = path.resolve('../../../README.md');
// const frase_positiva = core.getInput("frase_positiva");
// const frase_negativa = core.getInput("frase_negativa");
// const resultado_tests = core.getInput("resultado_tests");
const URL= "https://api.memegen.link/images/img.png";

const frase_positiva= "cryingfloor/casi.../error_tremndo";
const frase_negativa= "vamoss!!/salio_bien_el_test";
resultado_tests= "err";

const MemeNegativo= URL.replace("img", frase_positiva);
const MemePositivo= URL.replace("img", frase_negativa);

var AddMeme = "![Meme Test](" + resultado_tests === "success" ? MemePositivo : MemeNegativo + ")"

fs.readFile(readmePath, 'utf8', function(err, data) {
    if (err) throw err;
    var all_info = data = data + AddMeme;
    fs.writeFile(readmePath, data, function(err) {
        if (err) throw err;
        console.log('Archivo actualizado');
    });
});
