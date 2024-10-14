import { promises as fs } from 'node:fs';
import getAbsolutePath from '../utils/getAbsolutePath.js';

const deleteFile = async(args) => {

    const absolutePath = getAbsolutePath(args);

    try {
        await fs.unlink(absolutePath);
        console.log('File has been removed');

    } catch(error) {
        console.error(`Operation Failed: ${error.message}`);
    }
};

export default deleteFile;