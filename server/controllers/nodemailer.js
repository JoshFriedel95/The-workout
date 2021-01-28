
const mailOptions = {
  from: `The Workout <no-reply-theworkout.com>`,
  to: 'joshtest62@gmail.com', 
  subject: 'New Contact',
};


module.exports = {
  sendEmail: (req,res) => {
        console.log('hit this')
        const {message} = req.body
        console.log('hit this')
        const transporter = req.app.get("transporter")
        transporter.sendMail({...mailOptions, text:message}, function(error, info){
            console.log(message)
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          res.sendStatus(200)
    }
}