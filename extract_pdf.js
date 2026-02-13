const fs = require("fs");
let pdfFunc;
try {
  pdfFunc = require("pdf-parse/lib/pdf-parse.js");
} catch (e) {
  const pdf = require("pdf-parse");
  pdfFunc = pdf.default || pdf;
}
const pdfPath =
  "c:\\Users\\reeva.satija_oncehub\\Downloads\\Introduction to DevCenter.pdf";
const outPath = "build/extracted_introduction.txt";

const dataBuffer = fs.readFileSync(pdfPath);

pdfFunc(dataBuffer)
  .then(function (data) {
    fs.mkdirSync("build", { recursive: true });
    fs.writeFileSync(outPath, data.text, "utf8");
    console.log("WROTE: " + outPath);
  })
  .catch(function (err) {
    console.error(err);
    process.exit(1);
  });
