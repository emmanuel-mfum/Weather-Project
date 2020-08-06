const express = require("express"); // import the module Express in the app
const https = require("https"); // import the module https in the app
const bodyParser = require("body-parser"); // import the module body-parser in the app

const app = express(); // initialize new Express app

app.use(bodyParser.urlencoded({extended:true})) //  line of code required to be able to use bodyParser

app.use(express.static("public")); // allow us to refer to static files such as CSS or image by refering to its relative URL

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){

  const query =  req.body.cityName;
  const apiKey = "***************************";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ apiKey +"&units="+ unit;

  https.get(url, function(response) {
    console.log(response.statusCode); // Display status code in the terminal

    response.on("data", function(data) { // tap into the response we get from the weather API
      const weatherData = JSON.parse(data); // parse the data into a JavaScript object
      const temp = weatherData.main.temp; // access the data element we want
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p> The weather is currently " + weatherDescription + "</p>");
      res.write(" <h1> The temperature in "+ query + " is " + temp + " degrees Celsius </h1>");
      res.write("<img src="+imageURL+">");
      res.send();


    })
  });

});




app.listen(3000, function() {
  console.log("The server is running on the port 3000");
});
