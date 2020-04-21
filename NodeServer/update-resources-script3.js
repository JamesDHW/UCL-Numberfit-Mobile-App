// THIRD SCRIPT TO BE RUN IN UPDATEING NUMBERFIT RESOURCES
// CROPS ALL PNG RESOURCES
const glob = require('glob');
var   Jimp = require('jimp');

glob(__dirname + '/resources/*/*/*/*.png', {}, (err, generatedFiles)=>{
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
