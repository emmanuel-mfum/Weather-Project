# Weather-Project
App build with the OpenWeather API

Weather-Project
This is the source code for a simple Node.js app. The server respresented by the app.js file contact through a GET request the Open Weather Map API (https://openweathermap.org/) and is able to display a very simple HTML page. On that HTML page the user is ask to input the name of a city (London,Paris...). Once inputed, the data is then sent to a server using a POST request. The server will then use this information to fetch through the Open Weather Map API, the current temperature, conditions as well as an icon representing the current weather in the city requested by the user.

This project runs on Node and thus the Node modules have not been included in this repository, thus this app can't run presently on Github. The goal of this project was to have a go at working with APIs (endpoints,paths,parameters and authentication), parsing JSON and fetching/rendering the appropriate data.

PS: I also remove my API key, in order to avoid any breach of privacy or misuse of the Open Weather Map API. So unless one has both an API Key and the correct Node.js modules (Express, https, body-parser) and the Node environment installed, the app won't work.
