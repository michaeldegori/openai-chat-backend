import { dynamoClient } from './dynamo_config';
import { User, Message } from '../../models/types';

const USERS_TABLE_NAME = 'openai_chat_users';

const getUsers = async () => {
    const params = {
        TableName: USERS_TABLE_NAME,
    };
    const users = await dynamoClient.scan(params).promise();
    console.log({ users });
    return users;
};

const getUserById = async (id: string) => {
    const params = {
        TableName: USERS_TABLE_NAME,
        Key: {
            id,
        },
    };
    return dynamoClient.get(params).promise();
};

const addOrUpdateUser = async (user: User) => {
    const params = {
        TableName: USERS_TABLE_NAME,
        Item: user,
    };
    return dynamoClient.put(params).promise();
};

const deleteUser = async (id: string) => {
    const params = {
        TableName: USERS_TABLE_NAME,
        Key: {
            id,
        },
    };
    return dynamoClient.delete(params).promise();
};

/** This method takes a Message object and submits it to the array of messages in the DB */
const addMessage = async (message: Message) => {};

export { getUsers, getUserById, addOrUpdateUser, deleteUser, addMessage };
