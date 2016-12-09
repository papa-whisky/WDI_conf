const $ = require('jquery')

var renderLocationSection = function() {

  // location section with map of GA
  $('<div class="location-wrapper" id="location">').appendTo('.home-wrapper');
  $('<div class="location-top">').appendTo('.location-wrapper');
  $('<div class="location-bottom">').appendTo('.location-wrapper');

  // Location address
  $('<h1>').text('Location').appendTo('.location-top');
  $('<div class="location-content">').appendTo('.location-top');
  $('<p>').text('General Assembly').appendTo('.location-content');
  $('<p>').text('Level 12A').appendTo('.location-content');
  $('<p>').text('45, William St, Melbourne VIC 3000').appendTo('.location-content');

  // displaying google map with a marker of the location-top
  $('<div id="map">').appendTo('.location-bottom')
}

module.exports = renderLocationSection;
