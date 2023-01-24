import { SSM } from 'aws-sdk';
const ssm = new SSM();

export const fetchParameter = async (name: string) => {
    const result = await ssm
        .getParameter({ Name: name }, (err) => {
            if (err) {
                console.log(err, err.stack);
            }
        })
        .promise();

    return result.Parameter?.Value;
};
