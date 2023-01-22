import { Router } from 'express';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatGPTRouter = Router();

chatGPTRouter.post('/query', async function (req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: 'OpenAI API key not configured, please follow instructions in README.md',
            },
        });
        return;
    }
    const { query } = req.body;

    try {
        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: query,
            temperature: 1,
            max_tokens: 10,
        });
        res.status(200).json({ result: completion.data.choices[0].text });
    } catch (error: any) {
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error occurred during your request.',
                },
            });
        }
    }
});

export default chatGPTRouter;
