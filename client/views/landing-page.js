const $ = require('jquery')
const renderPaymentForm = require('./payment-form.js')
const renderHomeSection = require('./home-section.js')
const renderSpeakerSection = require('./speaker-section.js')
const renderSponsorsSection = require('./sponsors-section.js')
const renderLocationSection = require('./location-section.js')

const renderSmoothScrolling = require('../scripts/smooth-scrolling.js')
const renderFooterSection = require('./footer-section.js')
const renderConfirmationForm = require('./confirmation-form.js')

var renderLandingPage = function() {

  renderSmoothScrolling();

  renderHomeSection();

  renderSpeakerSection();

  renderSponsorsSection();

  renderLocationSection();

  renderFooterSection();

  $('.buy-ticket-btn, #fourth').click(function() {

    // Popup modal created for payment form
    $('<div id="modal-wrapper" class="modal">').appendTo('#root').hide().fadeIn();
    $('<div id="payment-form-modal" class="modal">').appendTo('#modal-wrapper');
      renderPaymentForm()
  })
}

module.exports = renderLandingPage
