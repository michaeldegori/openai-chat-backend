import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello World!');
});

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
