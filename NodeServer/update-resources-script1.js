// FIRST SCRIPT TO BE RUN IN UPDATEING NUMBERFIT RESOURCES
// DOWNLOADS PDF RESOURCES TO FILE SYSTEM
// Should take 15 mins - in case of error, delay time can be increased
var delay = 5000; // Change for longer or shorter between download PDF requests


const fs      = require("fs");
const request = require('request');

// For now use default topics stored in a JSON until GET request success
var availableTopics = require('./default_subjects.json').availableTopics
var difficulties = ['beg', 'int', 'adv'];
var resources = [];


// Function to request and save PDFs from Numberfit
var reqPDFs = function(resource){

  try {
    // Topic / Year / Level
    var folder = "./resources/"+resource[0]+"/"+resource[1]+"/"+resource[2];
  } catch(err) {
    console.log("Saving completed!");
    return;
  }

  // Create specific GET request
  const req = request.get(
    "http://api.numberfit.com:8081/getQuestionCards?"+
    "Topic="+resource[0]+
    "&Year="+resource[1]+
    "&Level="+resource[2]+
    "&GameMode=individual&Plastic=individual",
    {},
  );
  req.on('response', function (res) {
    console.log("Saving PDF:", resource[0]+"/"+resource[1]+"/"+resource[2])
    res.pipe(fs.createWriteStream(folder+'/PDF.pdf'))
    setTimeout(reqPDFs,delay,resources.pop())
  });
};

// GET all topics from Numberfit
request.get(
  'http://api.numberfit.com:8081/getAvailableTopics',
  { json: { key: 'value' } },
  function (error, response, body) {
    if (error) throw error;
    if (response.statusCode == 200) {
      console.log("Successfully got available topics from Numberfit.");
      availableTopics = body.availableTopics;

      // loop through all available topics from Numberfit
      for(let i=0; i<availableTopics.length; i++){                        // ~10
        for(let j=0; j<availableTopics[i].availableYears.length; j++){    // ~6
          for(let k=0; k<difficulties.length; k++){                       // =3
            // Add combination to resources list (of lists)
            if(availableTopics[i].Topic=="Addition"){
              resources.push([availableTopics[i].Topic,availableTopics[i].availableYears[j],difficulties[k]]);
            }
            // Create file if doesn't exist
            let folder = "./resources/"+availableTopics[i].Topic+"/"+availableTopics[i].availableYears[j]+"/"+difficulties[k];
            if (!fs.existsSync(folder)){
              fs.mkdirSync(folder, { recursive: true })
            };
          };
        };
      };
      reqPDFs(resources.pop())
    } else {
      // Currently no default available topics implementation
      console.log("Failed with status: ", response.statusCode)
    }
  }
);
