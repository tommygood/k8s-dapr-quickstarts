// publisher.js
const axios = require('axios');

const payload = {
  orderId: Math.floor(Math.random() * 10000),
  item: "banana"
};

axios.post(`http://localhost:3500/v1.0/publish/redis-pubsub/orders`, payload)
  .then(() => console.log("Published order:", payload))
  .catch((err) => console.error("Error publishing:", err.message));
