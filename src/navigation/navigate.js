import path from 'node:path';
import getAbsolutePath from '../utils/getAbsolutePath.js';

const navigate = (newPath) => {

    try {
        const absolutePath = getAbsolutePath(newPath);
        process.chdir(absolutePath);
    } catch(e) {
        console.error(`Operation failed: ${e.message}`)
    }
}

export default navigate;