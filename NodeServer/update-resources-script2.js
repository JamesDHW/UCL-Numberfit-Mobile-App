// SECOND SCRIPT TO BE RUN IN UPDATEING NUMBERFIT RESOURCES
// CONVERTS ALL PDF RESOURCES TO PNGs
const glob         = require('glob');
var   PDFImage     = require("pdf-image").PDFImage;
var   getPageCount = require('docx-pdf-pagecount');

glob(__dirname + '/resources/*/*/*/PDF.pdf', {}, (err, generatedFiles)=>{
  if (err) throw err;
  generatedFiles.forEach(function(filepath, index){
    console.log(filepath)

    var pdfImage = new PDFImage(filepath, {
        convertOptions: {
            "-crop": "298x281"
        }
    });

    getPageCount(filepath).then(pageNum => {
      for (var i = 0; i < pageNum; i+=2) {
          pdfImage.convertPage(i).then(function (imagePath) {
            console.log("converted: ", filepath, "page: ", pageNume);
          });
      }
    })
    .catch((err) => {
        console.log("error: ", err);
    });
  });
})
