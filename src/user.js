let userName = process.env.npm_config_username || 'Guest';

export const setUserName = (newName) => {
    userName = newName
};

export const getUserName = () => userName;