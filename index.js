var express = require('express');
var app = express();
var request = require('request');
var url = "https://teamtreehouse.com/dminca.json"

app.get('/', function (req, res) {

  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body); // Print JSON response
      console.log(body.badges);

      var badges = ""

      for (var i = body.badges.length - 1; i >= 0; i--) {
        badges += '<h1>' + body.badges[i].name + '</h1>' + '<img src="' + body.badges[i].icon_url + '" height=100 width=100 />';
      };

      res.send(badges);

    }
  })


})
app.listen(3000);

