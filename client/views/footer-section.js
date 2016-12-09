const $ = require('jquery')

var renderFooterSection = function() {

  // footer section for site
  $('<div class="footer-wrapper">').appendTo('.home-wrapper');

  // div created to hold clouds for css effect
  $('<div id="cloud">').appendTo('.footer-wrapper')
  $('<h1>').text('Don\'t miss the opportunity').appendTo('#cloud')

  // individual clouds for effect
  $('<div class="cloud x1">').appendTo('#cloud')
  $('<div class="cloud x2">').appendTo('#cloud')
  $('<div class="cloud x3">').appendTo('#cloud')
  $('<div class="cloud x4">').appendTo('#cloud')
  $('<div class="cloud x5">').appendTo('#cloud')

  // Content for the footer
  $('<div class="footer-content">').appendTo('.footer-wrapper');
  $('<h2>').text('Contact Us').appendTo('.footer-content');
  $('<p>').text('Do you have any questions? Please let us know.').appendTo('.footer-content');

  // Social media images
  $('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png">').appendTo('.footer-content');
  $('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png">').appendTo('.footer-content');
  $('<img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Gmail_Logo.svg/1280px-Gmail_Logo.svg.png">').appendTo('.footer-content');

}

module.exports = renderFooterSection;
