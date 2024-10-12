import path from 'node:path';

const navigate = (newPath) => {
    const currentDir = process.cwd();
    console.log('newPath', newPath)

    try {
        const absolutePath = path.isAbsolute(newPath) ? newPath : path.join(currentDir, newPath); 
        process.chdir(absolutePath);
    } catch(e) {
        console.error(`Operation failed: ${e.message}`)
    }
}

export default navigate;