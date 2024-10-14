import path from 'node:path';
import { IN_ROOT } from '../utils/constants.js';

const goUp = () => {
    const currentDir = process.cwd();
    const parentDir = path.dirname(currentDir);

    if (parentDir !== currentDir) {
        process.chdir(parentDir);
    } else {
        console.log(IN_ROOT); 
    }
}

export default goUp;