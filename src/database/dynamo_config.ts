import AWS from 'aws-sdk';

let dynamoDb: AWS.DynamoDB;

if (process.env.NODE_ENV === 'production') {
    // Configure the AWS SDK to use IAM roles for EC2 instances in production
    AWS.config.credentials = new AWS.EC2MetadataCredentials({
        httpOptions: { timeout: 5000 },
    });
    dynamoDb = new AWS.DynamoDB();
} else {
    // Configure the AWS SDK to use the shared credentials file in development
    AWS.config.update({ region: process.env.AWS_REGION });
    AWS.config.credentials = new AWS.SharedIniFileCredentials({
        profile: 'openai_chat_backend',
    });
    dynamoDb = new AWS.DynamoDB();
}

export const dynamoClient = new AWS.DynamoDB.DocumentClient({ service: dynamoDb });
