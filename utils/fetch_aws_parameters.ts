import { SSM } from 'aws-sdk';
const ssm = new SSM();

export const fetchParameter = async (name: string) => {
    const result = await ssm
        .getParameter({ Name: name }, (err, data) => {
            if (err) {
                console.log(err, err.stack);
            } else {
                console.log(data);
            }
        })
        .promise();

    return result.Parameter?.Value;
};
