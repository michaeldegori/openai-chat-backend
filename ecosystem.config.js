module.exports = {
    apps: [
        {
            name: 'openai-chat-backend',
            script: 'build/server.js',
            kill_timeout: 3000,
            watch: '.',
            ignore_watch: ['node_modules', '.git'],
            env: {
                COMMON_VARIABLE: 'true',
            },
            env_production: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
        },
    ],
};
