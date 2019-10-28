import { APIGatewayProxyHandler } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (_, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello!"
      },
      null,
      2
    )
  };
};
