import { promises as fs } from 'node:fs';
import path from 'node:path';

const createFile = async (fileName) => {
    const currentDir = process.cwd();
    const filePath = path.join(currentDir, fileName);
    
    try {
        await fs.writeFile(filePath, '', {encoding: 'utf-8', flag: 'wx'});
        console.log('File created successfully');
    } catch (e) {
        console.error(`Operation failed: ${e.message}`)
    }
};

export default createFile;