import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

async function pub(traceparent) {
	const payload = {
	  orderId: Math.floor(Math.random() * 10000),
	  item: "bananaQQ"
	};

	const headers = traceparent ? { traceparent } : {};

	axios.post(`http://localhost:3500/v1.0/publish/redis-pubsub/orders`, payload, { headers })
	.then(() => console.log("Published order:", payload))
	.catch((err) => console.error("Error publishing:", err.message));
}

app.post('/orders', async (req, res) => {
	console.log("Order received:", req.body);
	const traceparent = req.headers['traceparent']; // capture tracing header
	await pub(traceparent);
	res.sendStatus(200);
});

app.post('/qq', async (req, res) => {
	console.log("Order received:", req.body);
	res.sendStatus(500);
});

app.listen(5001);
