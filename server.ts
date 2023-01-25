import express from 'express';
import { getUsers } from './src/database/dbMethods';
import openAI from './src/routes/chat';
import { initializeOpenai } from './config/openai_api_config';

initializeOpenai();

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/chat', openAI);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

process.on('SIGINT', function () {
    process.exit(0);
});

getUsers();
