import fs from 'node:fs/promises';
import path from 'node:path';

const printContent = async() => {

    const currentDir = process.cwd();

    try {

        const content = await fs.readdir(currentDir);

        const directories = [];
        const files = [];

        for (const el of content) {
            const fullPath = path.join(currentDir, el);
            const details = await fs.stat(fullPath); 

            if (details.isDirectory()) {
                directories.push(el);
            } else {
                files.push(el);
            }
        }

        directories.sort();
        files.sort();

        const combined = [...directories.map((dir, i) => ({'Name': dir, 'Type': 'directory' })), 
                          ...files.map((file, i) => ({'Name': file, 'Type': 'file' }))];


        console.table(combined);
    
    } catch(e) {
        console.error(`Operation failed: ${e.message}`)
    }
    
}

export default printContent;