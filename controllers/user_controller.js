
const fornewmail= require('../mailers/new_mail');

const Meeting = require('google-meet-api').meet;

module.exports.createMail =async function (req, res) {


    console.log(req.body.queryResult.parameters.email)

    Meeting({
        clientId : '656640366395-5tcdds420ghq7195tfsbi04i7rduaans.apps.googleusercontent.com',
        clientSecret : 'hFTuBGp0WALLex6g9eh2mrCZ',
        refreshToken : '1//0dA720xG9kXhcCgYIARAAGA0SNwF-L9IrtyE3Jf439FUPWwZZAJLpPIzusWDG9XWzoSCXJvTUh2SEY1f0B5C7A3ZNWJQXFB6Y2pc',
        date : "2021-11-13",
        time : "10:59",
        summary : 'summary',
        location : 'location',
        description : 'description'
        }).then(function(result){
            let mail = {
                name: "Thunder Bird Team",
                to:"kumarsumit16022000@gmail.com", // receiver
                subject: "Join google meeting link",
                body: result
                }
        
            // sending mail
            fornewmail.newmail1(mail);
        }
    )

    console.log("aaya aaya bhaay")
    res.end('Meeting link sent');
    
  
}