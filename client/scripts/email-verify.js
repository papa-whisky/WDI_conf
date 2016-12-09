
function validateEmail(email) {
  // Email is sorted using RegEx to eliminate incorrect characters and
  // validate the email

  var sortEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return sortEmail.test(email);
}

module.exports = validateEmail;
