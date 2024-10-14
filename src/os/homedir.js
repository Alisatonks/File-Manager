import os from 'node:os';

const getHomeDir = () => {
    const homeDir = os.homedir();
    console.log(`\n Home directory: ${homeDir}\n`);
};

export default getHomeDir;