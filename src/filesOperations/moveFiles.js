import copy from "./copy.js";
import deleteFile from "./delete.js";
import getPathToFile from "../utils/getPathToFile.js";

const moveFiles = async(args) => {
    try {
   
        await copy(args);  
        const {pathToFile} = getPathToFile(args);
        await deleteFile(pathToFile);
        
    } catch(e) {
        console.log(`Operation Failed: ${e.message}`)
    }
};

export default moveFiles;