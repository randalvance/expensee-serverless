import { APIGatewayProxyHandler } from "aws-lambda";
import { ScanInput } from "aws-sdk/clients/dynamodb";
import dynamoDb from "../data/dynamoDb";

export const handler: APIGatewayProxyHandler = async (req, _context) => {
  const params: ScanInput = {
    TableName: process.env.DYNAMODB_CATEGORIES_TABLE_NAME
  };
  const result = await dynamoDb.scan(params).promise();
  console.log(result.$response);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: result.Items.map(d => ({ id: d.id.S, name: d.name.S }))
      },
      null,
      2
    )
  };
};
