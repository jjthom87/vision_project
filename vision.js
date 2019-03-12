// Read the file into memory.
var fs = require('fs');
var request = require('request');

var imageFile = fs.readFileSync('./IMG_0960.jpg');
var encoded = Buffer.from(imageFile).toString('base64');

var options = {
  uri: 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyABOmBYuQiCnTIx8ynKAx8dyb2-4jvh6uE',
  method: 'POST',
  json: {
	  "requests": [
	    {
	      "image": {
	      	"content": encoded
	      },
	      "features": [
	        {
	          "type": "TEXT_DETECTION"
	        }
	      ]
	    }
	  ]
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(response);
    console.log(body.responses[0].textAnnotations[0])
    //console.log(body.responses[0].textAnnotations[0].description);
  }
});