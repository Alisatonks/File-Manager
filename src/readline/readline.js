import readline from 'node:readline';
import getGoodByeMessage from '../greeting/getGoodbyeMsg.js';
import printCurrentDir from '../current/printCurrentDir.js';
import catalog from '../catalog/catalog.js';

const createReadLine = () => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> '

    })

    rl.prompt();

    rl.on('line', async (line) => {
        const trimmedLine = line.trim();
        const command  = trimmedLine.split(' ')[0];
        const trimmedArgs  = trimmedLine.split(' ').slice(1).join(' ').trim();

        if(command === '.exit') {
            rl.close();
        } else {
            await catalog[command](trimmedArgs);
            printCurrentDir(process.cwd());
            rl.prompt();
        }
    }).on('close', () => {
        getGoodByeMessage();
        process.exit(0);
    })
}

export default createReadLine;