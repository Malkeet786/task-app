const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox96d158a4875049bfa96eca6274f2f6ef.mailgun.org';
const mg = mailgun({apiKey: '725dd806fb2faaaf8fe988690c06044d-1b3a03f6-d6208cde', domain: DOMAIN});
// const data = {
// 	from: '0786malkeetsingh@gmail.com',
// 	to: '0786malkeetsingh@gmail.com',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
const sendWelcomeEmail = (email,name)=>{
	mg.messages().send({
        from: '0786malkeetsingh@gmail.com',
        to: email,
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name} Hope you enjoy`
    })
};
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });
const sendCancelEmail = (email,name)=>{
	mg.messages().send({
        from: '0786malkeetsingh@gmail.com',
        to: email,
        subject: 'Sorry to see you go',
        text: `We  will miss you, ${name} See you soon`
    })
};
module.exports={
	sendWelcomeEmail,
	sendCancelEmail
}