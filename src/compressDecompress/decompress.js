import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import path from 'node:path';
import getPathToFile from '../utils/getPathToFile.js';
import getAbsolutePath from '../utils/getAbsolutePath.js'

const decompress = async(args) => {

    const { pathToDirectory, pathToFile } = getPathToFile(args);

    const absolutePathToDir = getAbsolutePath(pathToDirectory);
    const absolutePathToFile = getAbsolutePath(pathToFile);

    const outputFileName = path.basename(absolutePathToFile, '.br');
    const outputFilePath = path.join(absolutePathToDir, outputFileName);

    const readStream = createReadStream(absolutePathToFile);
    const writeStream = createWriteStream(outputFilePath);
    const brotliDecompress = createBrotliDecompress();

    try {
        await new Promise((resolve, reject) => {
            readStream.pipe(brotliDecompress).pipe(writeStream);

            writeStream.on('finish', () => {
                console.log(`File decompressed from ${absolutePathToFile} to ${outputFilePath}`);
                resolve();
            });

            readStream.on('error', (err) => {
                console.error(`Error reading file: ${err.message}`);
                reject();
            });
            writeStream.on('error', (err) => {
                console.error(`Error writing file: ${err.message}`);
                reject();
            });
        }) 
    } catch (e) {
        console.error('Operation Failed')
    }
};

export default decompress;