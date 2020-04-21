var   PDFImage     = require("pdf-image").PDFImage;
var   getPageCount = require('docx-pdf-pagecount');
var   Jimp         = require('jimp');
var   Promise      = require("es6-promise").Promise;
const glob         = require('glob');
const fs           = require("fs");
const request      = require('request');

// For now use default topics stored in a JSON
var availableTopics = require('./default_subjects.json').availableTopics
var difficulties = ['beg', 'int', 'adv'];

let folder = "/Users/james/github/Numberfit/NodeServer/resources/Addition/";

glob(folder + '*/*/*.png', {}, (err, generatedFiles)=>{
  if (err) throw err;
  generatedFiles.forEach(function(filepath, index){
    Jimp.read(filepath, (err, image) => {
        if (err) throw err;
        questionName =
        image
          .crop(20, 20, 260, 215)
          .write(filepath); // save
    });
  });
})

// Convert the saved PDF to an image
var pdfToImage = function(folder){

  let pdfPath  = folder + "/PDF.pdf";
  var pdfImage = new PDFImage(pdfPath, {
      convertOptions: {
          "-crop": "298x281"
      }
  });

  getPageCount(pdfPath).then(pageNum => {
    for (var i = 0; i < pageNum; i+=2) {
        pdfImage.convertPage(i).then(function (imagePath) {
          pdfToImage(folders.pop())
        });
    }
  })
  .catch((err) => {
      console.log("error: ", err);
  });


};

// // GET all topics from Numberfit
var folders = [];
request.get(
  'http://api.numberfit.com:8081/getAvailableTopics',
  { json: { key: 'value' } },
  function (error, response, body) {
    if (error) throw error;
    if (response.statusCode == 200) {
      console.log("Successfully got available topics from Numberfit.");
      availableTopics = body.availableTopics;
      var z = 0;
      // loop through all available topics from Numberfit
      for(let i=0; i<availableTopics.length; i++){                        // ~10
        for(let j=0; j<availableTopics[i].availableYears.length; j++){    // ~6
          for(let k=0; k<difficulties.length; k++){                       // =3
            if(availableTopics[i].Topic == "Addition"){
              folder = "./resources/"+availableTopics[i].Topic+"/"+availableTopics[i].availableYears[j]+"/"+difficulties[k];
              console.log("folder ", folder)
              folders.push(folder)
            }

            // Create file if doesn't exist
            if (!fs.existsSync(folder)){
              fs.mkdirSync(folder, { recursive: true })
            };
            // GET specified PDF from Numberfit
            let delay = 30000*(k+3*j+6*i)  // Give each PDF 30 seconds to download
            setTimeout(reqPDFs,delay,i,j,k)
            setTimeout(pdfToImage,15000,folder) // Give each 30 seconds to save



          };
        };
      };

      pdfToImage(folders.pop());

    } else {
      console.log("Failed with status: ", response.statusCode)
    }
  }
);
