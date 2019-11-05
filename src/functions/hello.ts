import { APIGatewayProxyHandler } from "aws-lambda";
import message from "../common/hello-dep";
import { config, DynamoDB } from "aws-sdk";

const printAwsCredentials = () =>
  config.getCredentials(err => {
    if (err) {
      console.error("Credentials not loaded!");
    } else {
      console.log("AWS Region ", config.region);
      console.log("Access Key ", config.credentials.accessKeyId);
      console.log("Secret access key ", config.credentials.secretAccessKey);
    }
  });

const dynamodb = new DynamoDB();

export const handler: APIGatewayProxyHandler = async (_, _context) => {
  printAwsCredentials();

  const tables = await dynamodb.listTables({}).promise();

  console.log(tables);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message,
        tableNames: tables.TableNames
      },
      null,
      2
    )
  };
};
