// THIRD SCRIPT TO BE RUN IN UPDATEING NUMBERFIT RESOURCES
// CROPS ALL PNG RESOURCES
const glob = require('glob');
var   Jimp = require('jimp');
var TOPIC = "*";  // CHANGE TO SPECIFY TOPIC REQUIRED TO CONVERT

glob(__dirname + '/resources/'+TOPIC+'/*/*/*.png', {}, (err, generatedFiles)=>{
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
