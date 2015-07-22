var TAG = '[S3Service]';

function S3Service() {

}

S3Service.prototype.initialize = function initialize() {
  var AWS = this.AWSInstance();
  this.s3 = new AWS.S3(this.config());
};

S3Service.prototype.AWSInstance = function AWSInstance() {
  return require('aws-sdk');
};


S3Service.prototype.upload = function upload(data, key, callback) {
  var ACTION = '[upload]';
  var AWS = require('aws-sdk');
  var s3config = sails.config.s3.options;
  s3config.accessKeyId = sails.config.s3.credentials.accessKeyId;
  s3config.secretAccessKey = sails.config.s3.credentials.secretAccessKey;
  s3 = new AWS.S3(s3config);
  var key = key;
  var bucket = sails.config.s3.bucket;
  var params = {Bucket: bucket, Key: key, Body: data};
  s3.putObject(params, function(err){
    callback(err);
  });
  // var params = {
  //   Bucket: sails.config.s3.bucket,
  //   Key: key,
  //   Body: data
  // };
  // console.log(params);
  // this.s3.putObject(params, function (err, res) {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, true);
  //   }
  // }); 
};

S3Service.prototype.config = function config() {
  var s3config = sails.config.s3.options;
  if (sails.config.environment === 'development' || sails.config.environment === 'dev') {
    s3config.accessKeyId = sails.config.s3.credentials.accessKeyId;
    s3config.secretAccessKey = sails.config.s3.credentials.secretAccessKey;
  }
  return s3config;
};

module.exports = S3Service;