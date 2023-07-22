const mailgun = require('mailgun-js');

exports.handler = function(event, context, callback) 
{
    const mg = mailgun({
        apiKey: "key-14fb152e7ea673fa6af97b1311dc351d", 
        domain: "mansbooks.com"
    });

    const data = {
      from: 'postmaster@mansbooks.com',
      to: 'donaldboulton@gmail.com',
      subject: 'SUBJECT',
      text: 'TEXT',
      html: 'HTML'
    };

   mg.messages().send(data, (error, body) => 
   {
        if (error)
        {
            return console.log(error);
        }

        callback(null, {
            statusCode: 200,
            body: "Mail sent"
        });
   });
}