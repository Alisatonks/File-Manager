import { promises as fs } from 'node:fs';
import path from 'node:path';
import getNewFileName from "../utils/getNewFileName.js";

const rename = async (args) => {
  
    try {
        const {filePath, newFileName} = getNewFileName(args);
        const fileDir = path.dirname(filePath);
        const newPath = path.join(fileDir, newFileName);
        await fs.rename(filePath, newPath);
        console.log('file successfully renamed')

    } catch (e) {
        console.error(`Operation failed: ${e.message}`)
    }
    
};


export default rename;