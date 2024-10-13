import fs from 'fs';
import path from 'path';
import getPathToFile from "../utils/getPathToFile.js";
import getAbsolutePath from "../utils/getAbsolutePath.js";

const copy = async (args) => {

    const {pathToDirectory, pathToFile} = getPathToFile(args);

    const absolutePathToDir = getAbsolutePath(pathToDirectory);
    const absolutePathToFile = getAbsolutePath(pathToFile);
    const destination = path.join(absolutePathToDir, path.basename(absolutePathToFile)) 

    try {

        await new Promise((resolve, reject) => {
            const readStream = fs.createReadStream(absolutePathToFile);
            const writeStream = fs.createWriteStream(destination);
            
            readStream.pipe(writeStream);

            writeStream.on('finish', () => {
                console.log(`File copied from ${pathToFile} to ${destination}`);
                resolve();
            });

            readStream.on('error', (err) => {
                console.error(`Error reading file: ${err.message}`);
                reject(err);
            });

            writeStream.on('error', (err) => {
                console.error(`Error writing file: ${err.message}`);
                reject(err);
            });
        });
    } catch(e) {
        console.error(`Operation failed: ${e.message}`)
    }
    

};

export default copy;