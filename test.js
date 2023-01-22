// USERS TABLE
users = [
    {
        userId: '123',
        name: 'John Doe',
        email: 'johndoe@example.com',
        chatHistory: ['1', '2'], // each index is conversationId
    },
];

// MESSAGES TABLE
messages = [
    {
        messageId: '1',
        conversationId: '1',
        message: 'I love giraffes',
        timestamp: 1674240688,
        sender: 'user',
    },
    {
        messageId: '2',
        conversationId: '1',
        message: 'Giraffes are beautiful animals',
        timestamp: 1674240689,
        sender: 'openai',
    },
    {
        messageId: '1',
        conversationId: '2',
        message: 'Hello, can you tell me more about giraffes?',
        timestamp: 1674240690,
        sender: 'user',
    },
    {
        messageId: '2',
        conversationId: '2',
        message: 'Giraffes are the tallest land animals, with males reaching up to 18 feet...',
        timestamp: 1674240691,
        sender: 'openai',
    },
    {
        messageId: '3',
        conversationId: '2',
        message: "That's interesting, thank you!",
        timestamp: 1674240692,
        sender: 'user',
    },
];
