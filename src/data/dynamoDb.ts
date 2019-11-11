import { DynamoDB } from "aws-sdk";

let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: "localhost",
    endpoint: "http://localhost:8005"
  };
}

const client = new DynamoDB(options);

export default client;
