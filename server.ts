import express from 'express';
import { getUsers } from './src/database/dbMethods';
import openAI from './src/routes/chatgpt';
import { initializeOpenai } from './config/openai_api_config';
import { fetchParameter } from './utils/fetch_aws_parameters';

initializeOpenai();

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
    console.log(req);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/chatgpt', openAI);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

process.on('SIGINT', function () {
    process.exit(0);
});

getUsers();
