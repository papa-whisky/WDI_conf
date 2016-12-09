const $ = require('jquery')

var renderSpeakerSection = function() {

  // speaker section and list of speakers
  $('<div class="speaker-wrapper" id="speakers">').appendTo('.home-wrapper');
  $('<div class="speaker-list">').appendTo('.speaker-wrapper');
  $('<h1>').text('Speakers').appendTo('.speaker-wrapper')

  // Speaker name, picture and bio
  // Mark Zuckerberg
  $('<div class="speaker-card" id="mark">').appendTo('.speaker-list');
  $('<h2>').text('Mark Zuckerburg').appendTo('#mark');
  $('<div class="img-card" id="mark-card">').appendTo('#mark');
  $('<img src="http://i.imgur.com/uRWMr5W.jpg">').appendTo('#mark-card');
  $('<div class="res-bio" id="mark-bio">').appendTo('#mark');
  $('<ul id="mark-ul">').appendTo('#mark-bio');
  $('<li class="bio">').text('CEO, chairman and co-founder of Facebook. American computer programmer, internet entrepreneur, and philanthropist.').appendTo('#mark-ul');

  // Elon Musk
  $('<div class="speaker-card" id="elon">').appendTo('.speaker-list');
  $('<h2>').text('Elon Musk').appendTo('#elon');
  $('<div class="img-card" id="elon-card">').appendTo('#elon');
  $('<img src="https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg">').appendTo('#elon-card');
  $('<div class="res-bio" id="elon-bio">').appendTo('#elon');
  $('<ul id="elon-ul">').appendTo('#elon-bio');
  $('<li class="bio">').text('Founder, CEO and CTO of SpaceX, CEO of Tesla Mortors, co-founder of SolarCity; co-chairman of OpenAI, co-founder of Zip2 and founder of X.com.').appendTo('#elon-ul');

  // Bill Gates
  $('<div class="speaker-card" id="bill">').appendTo('.speaker-list');
  $('<h2>').text('Bill Gates').appendTo('#bill');
  $('<div class="img-card" id="bill-card">').appendTo('#bill');
  $('<img src="http://i.imgur.com/VMAHNMF.jpg">').appendTo('#bill-card');
  $('<div class="res-bio" id="bill-bio">').appendTo('#bill');
  $('<ul id="bill-ul">').appendTo('#bill-bio');
  $('<li class="bio">').text('Co-founder of Microsoft and wealthiest person in the world. American business magnate, investor, author and philanthropist.').appendTo('#bill-ul');

  // Marissa Mayer
  $('<div class="speaker-card" id="marissa">').appendTo('.speaker-list');
  $('<h2>').text('Marissa Mayer').appendTo('#marissa');
  $('<div class="img-card" id="marissa-card">').appendTo('#marissa');
  $('<img src="http://i.forbesimg.com/media/lists/people/marissa-mayer_416x416.jpg">').appendTo('#marissa-card');
  $('<div class="res-bio" id="marissa-bio">').appendTo('#marissa');
  $('<ul id="marissa-ul">').appendTo('#marissa-bio');
  $('<li class="bio">').text('American information technology executive. President and CEO of Yahoo!').appendTo('#marissa-ul');

  // Daniel Tsui
  $('<div class="speaker-card" id="dt">').appendTo('.speaker-list');
  $('<h2>').text('Daniel Tsui').appendTo('#dt');
  $('<div class="img-card" id="dt-card">').appendTo('#dt');
  $('<img src="http://i.imgur.com/jX8TxER.jpg">').appendTo('#dt-card');
  $('<div class="res-bio" id="dt-bio">').appendTo('#dt');
  $('<ul id="dt-ul">').appendTo('#dt-bio');
  $('<li class="bio">').text('He\'s doing ok.').appendTo('#dt-ul');

  // Otto von Bismarck
  $('<div class="speaker-card" id="otto">').appendTo('.speaker-list');
  $('<h2>').text('Otto von Bismarck').appendTo('#otto');
  $('<div class="img-card" id="otto-card">').appendTo('#otto');
  $('<img src="http://www.classtools.net/_FAKEBOOK/images//o/otto_von_bismarck.jpg?247">').appendTo('#otto-card');
  $('<div class="res-bio" id="otto-bio">').appendTo('#otto');
  $('<ul id="otto-ul">').appendTo('#otto-bio');
  $('<li class="bio">').text('Founder and first chancellor of the German Empire. Prime minister of Prussia. Widely regared as the greatest German statesman.').appendTo('#otto-ul');

  $('.res-bio').hide();
  $('.speaker-card').on('click', function(event) {

    $('.res-bio li').css('color', '#DB700A')
    // Toggle to display presenter bio's on click
    $(this).children().fadeToggle();
  })

  // When user leaves card, original state reappears
  $('.speaker-card').mouseleave(function() {
    $(this).children('.res-bio').fadeOut()
    $(this).children('h2').fadeIn()
    $(this).children('.img-card').fadeIn()
  })
}

module.exports = renderSpeakerSection;
