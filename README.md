# <a href="https://github.com/rhildred/tsexpress" target="_blank">tsexpress</a>

webhook event code with express

The event handler pattern is an important one. It is used in producing guis but can also be more simply used in a web server.

This is a twilio webhook with a www/index.html front end written in angular 1 for testing convenience. To get express into your project add the import statement to the start of your file.

To get this code without express use the `starter` branch ... `git clone -b starter https://github.com/rhildred/tsexpress.git`.

```

import express = require('express');
import bodyParser = require("body-parser");

```

To actually get the dependency from npm do:

```

npm install --save express body-parser

```

To set up express:

```

// Create a new express application instance
const app: any = express();

app.use(bodyParser.urlencoded({extended:true})); // twilio sends application/x-www-form-urlencoded
app.use(express.static("www")); // so that we can serve our www/index.html file

```

You will need to create a handler for the twilio webhook:

```

app.post("/sms", (req: any, res: any) =>{
    let sReply = "Hello " + req.body.From;
    res.end("<Response><Message>" + 
    sReply + "</Message></Response>");

});

```

Finally you will need to start the express app:

```

const nPort = 3000;
app.listen(nPort, () => console.log('Example app listening on port ' + nPort + "!"));

```

When you type `ts-node index.ts` you should see, `Example app listening on port 3000!`

Now you can surf to http://localhost:3000 and interact with your bot.
