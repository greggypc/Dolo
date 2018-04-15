// server.js - starting point for the Node/Express server.

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// Static directory
app.use(express.static('client/public'));

// Routes
// =============================================================
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);


// TEST! - talking to server?
app.get('/hi', (req, res) =>{
  res.send('hello from your server!');
  console.log("hello");
});


// TEST! - GET route for returning all Donations
app.get("/api/donations/", function(req, res) {
  db.Donation.findAll({})
  .then(function(dbDonation) {
    console.log("getting donations");
    res.json(dbDonation);
  });
});


 //GET route for returning all Donations of a specific user
 app.get("/api/donations/:uid", function(req, res) {
  db.Donation.findAll({
    where: {
      uid: 3
    }
  })
  .then(function(dbDonation) {
    console.log("getting donations from uid 3 only");
    res.json(dbDonation);
  });
});

// Requiring our models for syncing
const db = require("./models");

// Syncing our sequelize models and then start Express API server
// ==============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, () =>
  console.log(`API Server now listening on PORT ${PORT}!`)
);
});



