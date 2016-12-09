const $ = require('jquery')
const renderSeats = require('./../views/reserve-seats')

var stripeResponseHandler = function (status, response) {
  // Grab the form:
  var $form = $('#payment-stripe-form');

  if (response.error) { // Problem!

    $('.loader').remove();
    $('#payment-form').show().fadeIn();

    // Show the errors on the form:
    $('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission

  } else {
    // Get the token ID:
    var token = response.id;

    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));
    
    var formData = {
      stripeToken: token,
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      quantity: $('input[name="quantity"]').val()
    }

    // Cross origin server for development
    $.ajax('http://localhost:3030/pay', {
      method: 'post',
      data: formData
    }).done(function(res) {
      $('.loader').remove();
      renderSeats(res, parseInt(formData.quantity))
    })

  }
};

module.exports = stripeResponseHandler
