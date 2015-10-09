#### node-rest
A basic REST implementation in Node and Mongo, Creating a book service based CRUD

#### Setting up MongoDB
For the database we are using mongodb there is a sample file for creating a database in mongo ```booksJson.js```
* Install MongoDB in your respective Operating System
* Run mongo in the backend
* Run this command on console to setup sample database which we will be using in the application
```
mongo bookApi < booksJson.js
```

#### Running the app
* This app has all the dependencies added to package.json, gulp is set up using the gulpfile.ks and app.js is the main file which runs the server.
* For running the process
```
gulp
```
* For running the tests

```
gulp test
```


