import express from 'express';

// Create a new express application instance
const app: express.Application = express();

app.use(express.static("www"));

app.get("/users/:uname", (req, res) => res.end("Hello " + req.params.uname));

app.listen(3000, () => console.log('Example app listening on port 3000!'));