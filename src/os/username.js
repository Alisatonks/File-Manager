import os from 'node:os';
import path from 'node:path';

const getUserName = () => {
  
    const homeDir = os.homedir();
    const username = path.basename(homeDir);
    console.log(`\nUsername: ${username}\n`);

};

export default getUserName;