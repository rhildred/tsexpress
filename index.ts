import express = require('express');
import bodyParser = require("body-parser");

// Create a new express application instance
const app: any = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("www"));

app.get("/users/:uname", (req: any, res: any) => {
    res.end("Hello " + req.params.uname);
});

let aMessages: Array<string> = [];
app.post("/sms", (req: any, res: any) =>{
    aMessages.push(req.body.Body);
    let sReply: string = "";
    if(aMessages.length > 1){
        sReply = "Hi " + aMessages.pop();
    }else{
        sReply = "Hi ... What's your name?";
    }
    res.end("<Response><Message>" + 
    sReply + "</Message></Response>");

});

app.listen(3000, () => console.log('Example app listening on port 3000!'));