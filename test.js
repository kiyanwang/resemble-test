var api = require('resemble');

var fs = require('fs');

var fileData  = fs.readFileSync( './build-fail.png');
var fileData2 = fs.readFileSync( './build-fail.png');

api.resemble(fileData).compareTo(fileData2).ignoreColors().onComplete(function(data){
    console.log(data.getImageDataUrl());
});

