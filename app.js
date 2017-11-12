// import npm packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// initiate npm packages
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());


app.get("/dateValues/:dateVal", function(req,res,next){
  var dateVal = req.params.dateVal;
  var dateFormattingOptions ={
    year:'numeric',
    month:'long',
    day:"numeric"
  };
// test to see if dateVal is a string(natural-language) or a number(unix)
  if(isNaN(dateVal)){
    var naturalDate   = new Date(dateVal);
        naturalDate   = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    var unixDate      = new Date(dateVal).getTime()/1000;
  }
  else{
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal*1000);
    naturalDate   = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
  }

  res.json({unix: unixDate, natural:naturalDate});

});



// web server
app.listen(3000,function(){
  console.log('working');
})
