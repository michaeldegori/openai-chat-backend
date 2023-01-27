import { Auth0Config } from '../models/types';
import { fetchParameter } from '../utils/fetch_aws_parameters';

const config: Auth0Config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: '',
    clientID: '',
    issuerBaseURL: '',
    secret: '',
};

const initializeAuth0 = async () => {
    try {
        const secret = await fetchParameter('AUTH0_SECRET');
        const clientID = await fetchParameter('AUTH0_CLIENT_ID');
        const issuerBaseURL = await fetchParameter('AUTH0_DOMAIN');

        if (!process.env.API_URL) {
            throw new Error('No API URL specified');
        }
        config.baseURL = process.env.API_URL;
        config.clientID = clientID;
        config.issuerBaseURL = issuerBaseURL;
        config.secret = secret;
    } catch (err) {
        console.log(`Problem initializing Auth0: ${err}`);
    }
};

export { config, initializeAuth0 };
