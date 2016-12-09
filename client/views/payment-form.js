const $ = require('jquery')
const confirmationForm = require('./confirmation-form.js')
const stripeResponseHandler = require('../scripts/stripe-payment.js')
const validateEmail = require('../scripts/email-verify.js')


var renderPaymentForm = function() {

  // button to remove popup modal
  $('<span class="close-btn">').text('✘').appendTo('#payment-form-modal')

  // Payment form content created
  $('<div id="payment-form">').appendTo('#payment-form-modal')
  $('<label class="num-ticket">').text('Number of Tickets: ').appendTo('#payment-form')
  $('<input id="input-qty" class="num-input" type="text" value="1" name="quantity">').appendTo('#payment-form')

  // Button to increase and decrease amount of tickets purchased
  $('<span id=plus-btn>').text("+").appendTo('#payment-form')
  $('<span id=less-btn>').text("-").appendTo('#payment-form')
  $('<h2 id="price">').text('Total: $500').appendTo('#payment-form')
  $('<hr>').appendTo('#payment-form')

  // Enter your details section
  $('<h1>').text('Your Details').appendTo('#payment-form')
  $('<input class="input-form" placeholder="Full Name" name="name">').appendTo('#payment-form')
  $('<input class="input-form" placeholder="Email" name="email" type="email" id="email">').appendTo('#payment-form')
  $('<input class="input-form" placeholder="Confirm Email" type="email" id="confirm-email">').appendTo('#payment-form')
  $('<hr>').appendTo('#payment-form')

  // Payment details section
  $('<h1>').text('Payment Details').appendTo('#payment-form')

  // Payment form sends users to alternate server during development
  $('<form id="payment-stripe-form">').attr('method', 'post').attr('action', 'http://localhost:3030/pay').appendTo('#payment-form')
  $('<input class="input-form" placeholder="Name on Card">').appendTo('#payment-stripe-form')
  $('<input id="cardNumber" class="input-form" placeholder="Card Number" value="4242424242424242">').attr('data-stripe', 'number').appendTo('#payment-stripe-form')
  $('<input class="expiry-input" placeholder="Expiry Month">').attr('data-stripe', 'exp_month').appendTo('#payment-stripe-form')
  $('<input class="expiry-input" placeholder="Expiry Year">').attr('data-stripe', 'exp_year').appendTo('#payment-stripe-form')
  $('<input id="csv-input" class="expiry-input" placeholder="CSV">').attr('data-stripe', 'cvc').appendTo('#payment-stripe-form')
  $('<hr>').appendTo('#payment-stripe-form')
  $('<input type="submit" class="submit" value="Submit Payment">').attr('id', 'submit-btn').appendTo('#payment-stripe-form')
  $('<form action="/" class="home-link">').appendTo('#payment-stripe-form')
  $('<button>').text('Cancel').attr('id', 'cancel-btn').appendTo('.home-link')

  // Displays errors if incorrect details are entered
  $('<span class="payment-errors">').appendTo('#payment-form')

  // Removes popup modal and returns to landing page
  $('.close-btn').click(function() {
    $('#modal-wrapper').remove();
  });

  // Makes call to Stripe API and validates user inputs
  $('#submit-btn').click(function() {

    var confirmEmail = $('#email').val() !== $('#confirm-email').val();
    var emailEmpty = $('#email').val() === '';

    if ( confirmEmail || emailEmpty ) {

      $('.payment-errors').text('Your Email does not match.');
      return false;

      // Validates the email to remove incorrect characters
    } else if (validateEmail( $('#email').val() ) === false) {

      $('.payment-errors').text('Please enter a valid email address.');
      return false;

    } else {

      // Hide payment form details
      $('#payment-form').hide().fadeOut();

      // Loader displayed while user waits for payment to be assessed by stripe
      $('<div class="loader-wrapper">').appendTo('#payment-form-modal')
      $('<div class="loader">').appendTo('.loader-wrapper');
      $('<h2>').text('Processing Payment').appendTo('.loader-wrapper');

      console.log('clicked submit button');

      var $form = $('#payment-stripe-form');

      $form.submit(function(event) {
        // Disable the submit button to prevent repeated clicks:
        $form.find('.submit').prop('disabled', true);

        // Request a token from Stripe:
        Stripe.card.createToken($form, stripeResponseHandler);

        // Prevent the form from being submitted:
        return false;

      });
    }
  });

// to prevent user from entering other characters apart from a number
  $('input[name="quantity"], #cardNumber, .expiry-input, #csv-input').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
         // let it happen, don't do anything
         return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }
    });

  // Adds tickets to order
  $('#plus-btn').on('click', function() {
    console.log("adding");
    $('#input-qty').val(Number($('#input-qty').val())+1);
    $('#input-qty').trigger('input')
  });

  // Removes tickets to order
  $('#less-btn').on('click', function() {
    console.log("subtracting");
    if ($('#input-qty').val() > 0) {
      $('#input-qty').val(Number($('#input-qty').val())-1);
      $('#input-qty').trigger('input')
    }
  });

  // Updates value to user
  $('input[name="quantity"]').on('input', function() {
    console.log($(this).val());
    $('#price').text("Total: $" + $(this).val()*500)
  });
}

module.exports = renderPaymentForm
