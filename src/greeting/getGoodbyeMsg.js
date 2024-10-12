import { getUserName } from "../user.js";

const getGoodByeMessage = () => {
    const userName = getUserName(); 
    console.log(`Thank you for using File Manager, ${userName || 'Guest'}, goodbye!`)
};

export default getGoodByeMessage;