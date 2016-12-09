const key = require('./secret-sauce').sendGridKey

const sendConfEmail = function(user_email, name, quantity) {

  // Email template for ticket reservation
  var helper = require('sendgrid').mail;
  var from_email = new helper.Email('test@example.com');
  var to_email = new helper.Email(user_email);
  var subject = 'Your Ticket Order Confirmation';
  var content = new helper.Content('text/plain', `Thank you ${name}, your reservation for ${quantity} ticket(s) has been confirmed!` );
  var mail = new helper.Mail(from_email, subject, to_email, content);

  // information in the email
  var sg = require('sendgrid')(key);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  // send the email
  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
}

module.exports = sendConfEmail
