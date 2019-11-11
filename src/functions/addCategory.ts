import { APIGatewayProxyHandler } from "aws-lambda";
import { PutItemInput } from "aws-sdk/clients/dynamodb";
import dynamoDb from "../data/dynamoDb";

export const handler: APIGatewayProxyHandler = async (req, _context) => {
  const input = JSON.parse(req.body);
  const params: PutItemInput = {
    TableName: process.env.DYNAMODB_CATEGORIES_TABLE_NAME,
    Item: {
      id: { S: input.id },
      name: { S: input.name }
    }
  };
  const result = await dynamoDb.putItem(params).promise();
  console.log(result.$response);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Success!"
      },
      null,
      2
    )
  };
};
