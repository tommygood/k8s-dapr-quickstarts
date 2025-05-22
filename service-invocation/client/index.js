import axios from "axios";

const DAPR_HOST = process.env.DAPR_HOST || "http://localhost";
const DAPR_HTTP_PORT = process.env.DAPR_HTTP_PORT || "3500";

async function main() {
  // Adding app id as part of the header
  let axiosConfig = {
    headers: {
        "dapr-app-id": "service-invocation-backend"
    }
  };
  
  for(var i = 1; i <= 3; i++) {
    await sleep(1000);

    const order = {orderId: i};

    // Invoking a service
    const res = await axios.post(`${DAPR_HOST}:${DAPR_HTTP_PORT}/orders`, order , axiosConfig);
    console.log("Order passed: " + res.config.data);
  }
  try {
    await axios.get(`${DAPR_HOST}:${DAPR_HTTP_PORT}/test`, axiosConfig);
  }
  catch(e) {
    console.error(e);
  }
  try {
    await axios.get(`${DAPR_HOST}:${DAPR_HTTP_PORT}/test-server-error`, axiosConfig);
  }
  catch(e) {
    console.error(e);
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main().catch(e => console.error(e))
