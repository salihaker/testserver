const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000;
app.use(cors())
app.use(bodyParser.json())
app.post('/send', (req, res) => {
  const body = req.body;
  console.log(body);
  const message = {
    to: body.to,
    sound: 'default',
    title: body.title,
    body: body.body,
    data: { testData: 'test data' },
  };
  fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
            }).then(data => {
              console.log(data);
            })
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
