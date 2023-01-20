import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import chatGPTRouter from './src/routes/chatgpt';

const app = express();

app.get('/', (_req: express.Request, res: express.Response) => {
	res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded());
app.use('/chatgpt', chatGPTRouter);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
