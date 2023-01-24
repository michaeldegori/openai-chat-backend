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
                    '/Users/michaeldegori/Development/chatGPT-siri-shortcut/openai-chat-production-key-pair.pem',
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 8080,
            },
            env_development: {
                NODE_ENV: 'development',
                PORT: 3000,
            },
        },
    ],
};
