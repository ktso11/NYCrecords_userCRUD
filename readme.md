### New York City Search Engine - Project 3

The City would like the ability to save and manage User information && fav notices

This is the current site, use your jump off point:
https://a856-cityrecord.nyc.gov/

API endpoints

- https://data.cityofnewyork.us/resource/buex-bi6w.json
- https://data.cityofnewyork.us/City-Government/City-Record-Online/dg92-zbpx/data


Features:
- perform user full-CRUD (create, read, update, delete) functionality
- Spring to add a new Users service
- Spring to add a new Notice service
- Communicate with your back-end API in order to manage User and Notices information
- Feature test and unit test

AWS host 
- http://seca-nyc-app.s3-website.us-east-2.amazonaws.com/ (NO LONGER AVAILABLE)
- due to cost, I had to remove the application from AWS, I apologize for the inconvienence, please use the instructions below to start the app on localhost.

How to Start:
- Open terminal
- cd into nyc-records 
- docker-compose up
- in a new terminal, cd nyc-frontend
- npm start
- open chrome and navigate to http://localhost:4200/

To Run Test (unit):
- cd nyc-records
- cd nyc-frontend
- ./node_modules/karma/bin/karma init
- npm test
- make sure you have jasmine and karma installed

To Run Test (feature):
- cd nyc-records
- idea .
- test is located in user-api/src/test/java/com/example/usersapi/UserApiFeatureTest.Java


Trello:
https://trello.com/b/MNIEQDWz/nyc-records 
