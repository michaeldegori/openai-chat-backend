import express from 'express';
import { getUsers } from './src/database/dbMethods';
import chatRouter from './src/routes/chat';
import authRouter from './src/routes/auth';
import { initializeOpenai } from './config/openai_api_config';
import { config, initializeAuth0 } from './config/auth0_config';
import { auth, requiresAuth } from 'express-openid-connect';

const initializeApp = async () => {
    await initializeOpenai();
    await initializeAuth0();
    console.log({ config });
    const app = express();

    app.get('/', (req: express.Request, res: express.Response) => {
        res.send('Hello World!');
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(auth(config));
    app.use('/chat', requiresAuth(), chatRouter);
    app.use('/authorize', authRouter);

    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

    process.on('SIGINT', function () {
        process.exit(0);
    });

    getUsers();
};

initializeApp();
