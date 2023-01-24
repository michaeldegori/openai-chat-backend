import { Configuration, OpenAIApi } from 'openai';
import { fetchParameter } from '../utils/fetch_aws_parameters';

let openai: OpenAIApi | undefined;

const initializeOpenai = async () => {
    const apiKey = await fetchParameter('OPENAI_API_KEY');
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });
    openai = new OpenAIApi(configuration);
};

export { openai, initializeOpenai };
