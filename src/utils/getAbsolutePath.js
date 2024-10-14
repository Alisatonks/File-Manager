import path from 'node:path';

const getAbsolutePath = (newPath) => {
    const currentDir = process.cwd();
    return path.isAbsolute(newPath) ? newPath : path.join(currentDir, newPath);
};

export default getAbsolutePath;