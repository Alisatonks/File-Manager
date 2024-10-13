import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import getAbsolutePath from "../utils/getAbsolutePath.js";

const readAndPrint = async (filePath) => {
    const absolutePath = getAbsolutePath(filePath);
    const stream = createReadStream(absolutePath, { encoding: 'utf-8' });

    try {
        await pipeline(stream, new WritableStream({
            write(chunk) {
                if (!process.stdout.closed) {
                    process.stdout.write(chunk);
                }
            }
        }));
        if (!process.stdout.closed) {
            console.log('\nFile reading completed.');
        }
    } catch (error) {
        console.error(`Operation failed: ${error.message}`);
    }
};

export default readAndPrint;