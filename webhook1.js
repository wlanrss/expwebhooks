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

app.listen(3000, () => {
  console.log('Webhook server is listening on port 3000');
});

console.log("webhook1 started. Version 2.4")

curl -L https://github.com/jenkins-x/jx/releases/download/v1.26.1/jx-linux-amd64.tar.gz | tar xzv
sudo mv jx /usr/local/bin
jx install

//curl --request POST --url http:/127.0.0.1:3000/webhook --header 'Content-Type: application/json' --data '{"param1":"param1","param2":"param2"}'
//>curl --request POST --url "https://webhook1-lyyx.onrender.com:3000/webhook" --header "Content-Type: application/json" --data "{\"param1\":\"param1\",\"param2\":\"two\"}"
