const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  const data = req.body;
  console.log(data);
  res.sendStatus(200);
});

app.listen(80, () => {
  console.log('Webhook server is listening on port 80');
});

console.log("webhook1 started..")
