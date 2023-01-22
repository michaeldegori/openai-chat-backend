import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { getUsers } from './src/database/dbMethods';
import chatGPTRouter from './src/routes/chatgpt';
import { config } from './config/auth0_config';
import { auth } from 'express-openid-connect';

const app = express();

app.get('/', (_req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/chatgpt', chatGPTRouter);

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

getUsers();
