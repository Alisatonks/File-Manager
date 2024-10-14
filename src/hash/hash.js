import { createHash } from 'node:crypto';
import {createReadStream} from 'node:fs';
import getAbsolutePath from '../utils/getAbsolutePath.js';

const calcHash = async (filePath) => {
    try {
        const absolutePath = getAbsolutePath(filePath);

        await new Promise((resolve, reject) => {
            const hash = createHash('sha256');
            const stream = createReadStream(absolutePath);
            hash.setEncoding('hex');
            let hashResult = '';

            hash.on('data', (chunk) => {
                hashResult += chunk;
            });

            hash.on('end', () => {
                console.log(hashResult); 
                resolve();
            });

        
            stream.on('error', (err) => reject(`Error reading file: ${err.message}`));
            hash.on('error', (err) => reject(`Error hashing file: ${err.message}`));

            stream.pipe(hash);
        });
    } catch (e) {
        console.error(`Operation failed: ${e.message}`);
    }
};

export default calcHash;