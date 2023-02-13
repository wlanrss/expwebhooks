const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res) =>{

  res.send("Hello World")
})

app.post('/webhook', (req, res) => {
  const data = req.body;
  console.log(data);
  //res.sendStatus(200);
  res.status(200).json({ 'msg': 'success','data':data })
});

app.listen(3001, () => {
  console.log('Webhook https:server is listening on port 3001');

});

console.log("webhook1 started. Version 3.0")


//curl --request POST --url http:/127.0.0.1:3000/webhook --header 'Content-Type: application/json' --data '{"param1":"param1","param2":"param2"}'
//>curl --request POST --url "https://webhook1-lyyx.onrender.com:3000/webhook" --header "Content-Type: application/json" --data "{\"param1\":\"param1\",\"param2\":\"two\"}"
