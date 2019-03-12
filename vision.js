// Read the file into memory.
//https://cloud.google.com/docs/authentication/api-keys?hl=en&visit_id=636878419186004464-2679101247&rd=1#creating_an_api_key
//https://cloud.google.com/vision/docs/using-curl
//https://console.cloud.google.com/home/dashboard?project=monastir-167517
//https://cloud.google.com/vision/docs/base64
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