const request = require('request');

const argv = require('yargs').argv

let apiKey = '50f94f818455a348c7481a5574d8700d';
let city = argv.c || 'austin';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    console.log(weather);
  }
});
