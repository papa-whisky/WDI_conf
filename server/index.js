const express = require('express')
const app = express()
const path = require('path')
const mLabKey = require('./scripts/secret-sauce').mLabKey
const fetch = require('node-fetch')
const stripe = require("stripe")("sk_test_ySnrhITknKLkb1NjIbiSWYqI")
const bodyparser = require('body-parser')
const sendConfEmail = require('./scripts/send-email')
const saveToDb = require('./scripts/save-user-to-db')
var port = process.env.PORT || 3030

// app.use(express.static('./scripts'));
app.use(express.static(__dirname + '/../dist'));

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/testget', function(req, res) {
  fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey=' + mLabKey)
    .then(function(res) {
      return res.json()
  }).then(function(json) {
    res.json(json)
  })
})

// Reserve seat route
app.post('/reserve', bodyparser(), function(req, res) {
  Object.keys(req.body).forEach(function(key) {
    saveReservation(key, req.body[key])
  })
  function saveReservation(name, seats) {
    var setData = {}
    seats.forEach((e) => setData[e] = 'reserved')
    fetch(
      'https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey='
      + mLabKey
      + '&q={"presenter":"'
      + name
      + '"}', {
        method: 'PUT',
        body: JSON.stringify({
          $set: setData
        }),
        headers: {'Content-Type' : 'application/json'}
      }
    ).then(function(response) {
      return response.json()
    }).then(function(json) {
      res.json(json)
    })
  }
})

app.post('/pay', bodyparser(), function(request, response) {
  console.log(request.body.quantity * 50000);
  // Get the credit card details submitted by the form
  var token = request.body.stripeToken; // Using Express

  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
    amount: request.body.quantity * 50000, // Amount in cents
    currency: "aud",
    source: token,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
      console.log(err);
      response.json(err)
    } else {
      console.log(charge)
      sendConfEmail(request.body.email, request.body.name, request.body.quantity)
      saveToDb(request.body.name, request.body.email)
      fetch('https://api.mlab.com/api/1/databases/wdi_conf/collections/talks?apiKey=' + mLabKey)
        .then(function(res) {
          return res.json()
        })
        .then((json) => response.json(json))
    }
  });
});

// Start server
app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});
