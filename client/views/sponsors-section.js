const $ = require('jquery')

var renderSponsorsSection = function() {

  // sponsors section and list of sponsors
  $('<div class="sponsors-wrapper" id="sponsors">').appendTo('.home-wrapper');
  $('<div class="sponsors-list">').appendTo('.sponsors-wrapper');

  // Content for sponsors page
  $('<h2>').text('Sponsors').appendTo('.sponsors-list');
  $('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1000px-Google_2015_logo.svg.png"> ').appendTo('.sponsors-list');
  $('<img src="http://www.pragueharleydays.cz/uploaded/filemanager/hooters-logo.svg"> ').appendTo('.sponsors-list');
  $('<img src="http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png"> ').appendTo('.sponsors-list');
  $('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/1236px-Tesla_Motors_Logo.svg.png"> ').appendTo('.sponsors-list');
}

module.exports = renderSponsorsSection;
