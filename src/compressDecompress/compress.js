import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import path from 'node:path';
import getPathToFile from '../utils/getPathToFile.js';
import getAbsolutePath from '../utils/getAbsolutePath.js'

const compress = async (args) => {
    try {
        const { pathToDirectory, pathToFile } = getPathToFile(args);

        const absolutePathToDir = getAbsolutePath(pathToDirectory);
        const absolutePathToFile = getAbsolutePath(pathToFile);
        
        const compressedFileName = path.basename(absolutePathToFile) + '.br';
        const destinationPath = path.join(absolutePathToDir, compressedFileName);

        await new Promise((resolve, reject) => {
            const readStream = createReadStream(absolutePathToFile);
            const brotli = createBrotliCompress();
            const writeStream = createWriteStream(destinationPath);

            readStream.pipe(brotli).pipe(writeStream);

            writeStream.on('finish', () => {
                console.log(`\n File compressed from ${absolutePathToFile} to ${destinationPath}\n`);
                resolve();
            });

            readStream.on('error', (err) => {
                console.error(`\n Error reading file: ${err.message}\n`);
                reject();
            });

            brotli.on('error', (err) => {
                console.error(`\nError during compression: ${err.message}\n`);
                reject();
            });

            writeStream.on('error', (err) => {
                console.error(`Error writing file: ${err.message}`);
                reject();
            });
        })

    } catch (error) {
        console.error(`Operation failed`);
    }
};

export default compress;