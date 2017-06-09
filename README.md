#The Happyhours App
##An quick app for finding happyhours.

##User Stories:
* User will have the ability to create account/login.
* Once logged in the user will enter a city and hit the submit button. The user will then get 10 tweets from twitter based off of the city location. 
* User may have the ability to save favorites (in a future version).
* User will have the ability to delete tweets.

##Technologies and stuff:
###The following packages where used:
* Express
* EJS
* Express-EJS-Layouts
* Express-Session
* Mongoose
* Flash
* Passport
* Cookie-Parser
* Body-Parser
* Twit
* Dotenv

###Install instructions:
npm install --save (packages names here)

make sure you require these in your server.js file

###The following languages where used:
* HTML
* CSS
* Javascript

###The following Frameworks where used:
* Node.js
* Bootstrap
* JQuery

###The following Databases where used:
* MongoDB with Mongoose

###The following Third Party API was used:
* Twitter

##Wireframes
![](wireframes_happyhour.jpg)

##Screenshots
![](main.jpg)
![](login.jpg)
![](signup.jpg)
![](profile.jpg)
![](favorites.jpg)

###Approach:
I was trying to create an easy to use app that had a simple design. I prefer getting a basic layout before programming the functionality. this helps me visualize the overall process.

###Challanges:
This was my first time using the Twitter API. There is still so much I have to learn as far as tapping into the API's full potential. Getting the ajax calls to do what I wanted was frustrating at times.

###Todo list:
Due to time constraints I might not be able to add <a href> for the http links in the tweets. Will hopefully get this implemented.