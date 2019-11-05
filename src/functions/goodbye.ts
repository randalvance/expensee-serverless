import { APIGatewayProxyHandler } from "aws-lambda";
import message from "../common/goodbye-dep";

export const handler: APIGatewayProxyHandler = async (_, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message
      },
      null,
      2
    )
  };
};