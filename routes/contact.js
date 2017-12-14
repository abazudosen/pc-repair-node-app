var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
  });
});

//send email
router.post('/send', function(req, res, next){
    var transporter =  nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'abudosen@gmail.com',
            pass: 'respectjesus@$84990'
        }
    });

    var mailOptions = {
        from: '"Abaz Udosen" <abudosen@gmail.com>',
        to: 'abudosen@gmail.com',
        subject: 'hello from my pc repair',
        text: 'You have a new message from... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
        html: '<p>You have a new message from...</p> <ul><li>Name: '+req.body.name+'</li></li> Email: '+req.body.email+'</li><li> Message: '+req.body.message+'</li></ul>'
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            return console.log(err)
        }
        console.log('Message Sent: '+ info.response);
        res.redirect('/home');
    });
});

module.exports = router;
