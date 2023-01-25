import { Configuration, OpenAIApi } from 'openai';
import { fetchParameter } from '../utils/fetch_aws_parameters';

let openai: OpenAIApi | undefined;

const initializeOpenai = async () => {
    const apiKey = await fetchParameter('OPENAI_API_KEY');
    console.log({ apiKey });
    const configuration = new Configuration({
        apiKey,
    });
    openai = new OpenAIApi(configuration);
};

export { openai, initializeOpenai };
