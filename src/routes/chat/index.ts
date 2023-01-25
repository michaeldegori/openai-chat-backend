import { Router } from 'express';
import { openai } from '../../../config/openai_api_config';

const chatRouter = Router();

chatRouter.post('/query', async function (req, res) {
    if (!openai) {
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

export default chatRouter;
