import os from 'node:os'

const homeDirectory = os.homedir();

const setHomeDirectory = () => process.chdir(homeDirectory);

export  {homeDirectory, setHomeDirectory};
