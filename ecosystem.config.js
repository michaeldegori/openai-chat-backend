module.exports = {
    apps: [
        {
            name: 'openai-chat-backend',
            script: 'build/server.js',
            kill_timeout: 3000,
            watch: './build',
            ignore_watch: ['node_modules', '.git'],
            env: {
                COMMON_VARIABLE: 'true',
                AWS_REGION: 'us-east-1',
                PRODUCTION_KEY_PAIR_LOCATION:
                    '/Users/michaeldegori/Development/openai-chat/openai-chat-production-key-pair.pem',
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 8080,
                API_URL: 'http://3.88.8.153:8080/',
            },
            env_development: {
                NODE_ENV: 'development',
                PORT: 3070,
                API_URL: 'http://localhost:3070/',
            },
        },
    ],
};
