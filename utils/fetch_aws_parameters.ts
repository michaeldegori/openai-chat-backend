import { SSM } from 'aws-sdk';
const ssm = new SSM();

export const fetchParameter = async (name: string): Promise<string> => {
    const result = await ssm
        .getParameter({ Name: name }, (err) => {
            if (err) {
                console.log(`Error fetching parameter "${name}": ${err}`);
            }
        })
        .promise();

    return result.Parameter?.Value as string;
};
