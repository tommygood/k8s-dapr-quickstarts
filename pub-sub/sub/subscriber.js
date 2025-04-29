// subscriber.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json({ type: ['application/json', 'application/cloudevents+json'] }));

// Dapr will invoke this when a message is published to the "orders" topic
app.post('/orders', (req, res) => {
  console.log("Received:", req.body);
  res.sendStatus(200);
});

// Dapr uses this to detect which topics to subscribe to
app.get('/dapr/subscribe', (req, res) => {
  res.json([
    {
      pubsubname: "redis-pubsub",
      topic: "orders",
      route: "orders"
    }
  ]);
});

app.listen(6000, () => {
  console.log('Subscriber listening on port 6000');
});

