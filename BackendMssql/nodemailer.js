
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jeevakp58@gmail.com',
      pass: '8438384496Kj'
    }
  });
  
  var mailOptions = {
    from: 'jeevakp58@gmail.com',
    to: 'krsnajeeva98@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `Hi Jeeva, sending a node js mail.`
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });