import { DynamoDB } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";
import { PutItemInput } from "aws-sdk/clients/dynamodb";
import uuid from "uuid";

const dynamodb = new DynamoDB({ apiVersion: "2012-08-10" });

export const handler: APIGatewayProxyHandler = async (_, _context) => {
  const params: PutItemInput = {
    TableName: "expensee_expenses",
    Item: {
      expense_id: { S: uuid() },
      date: { N: new Date().getTime().toString() }
    }
  };
  const result = await dynamodb.putItem(params).promise();
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
