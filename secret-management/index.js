import { DaprClient, CommunicationProtocolEnum } from '@dapr/dapr';

const daprHost = process.env.DAPR_HOST || "http://localhost";
const daprPort = process.env.DAPR_HTTP_PORT || "3500";
const DAPR_SECRET_STORE = process.env.DAPR_SECRET_STORE;
const SECRET_NAME = process.env.SECRET_NAME;

async function main() {
    const client = new DaprClient({
        daprHost,
        daprPort,
        communicationProtocol: CommunicationProtocolEnum.HTTP,
    });
    const secret = await client.secret.get(DAPR_SECRET_STORE, SECRET_NAME);
    console.log("Fetched Secret: " + JSON.stringify(secret));
}

main().catch(e => console.error(e))
