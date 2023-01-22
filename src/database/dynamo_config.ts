import AWS from 'aws-sdk';

AWS.config.update({ region: process.env.AWS_REGION });
AWS.config.credentials = new AWS.SharedIniFileCredentials({
    profile: 'openai_chat_backend',
});

export const dynamoClient = new AWS.DynamoDB.DocumentClient();
