import { Configuration, OpenAIApi } from 'openai';
import { fetchParameter } from '../utils/fetch_aws_parameters';

let openai: OpenAIApi | undefined;

const initializeOpenai = async () => {
    try {
        const apiKey = await fetchParameter('OPENAI_API_KEY');
        const configuration = new Configuration({
            apiKey,
        });
        openai = new OpenAIApi(configuration);
    } catch (err) {
        console.log(`Issue initializing OpenAIApi: ${err}`);
    }
};

export { openai, initializeOpenai };
