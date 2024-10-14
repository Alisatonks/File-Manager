import os from 'node:os';

const getEOL = () => {
    const eol = JSON.stringify(os.EOL); 
    console.log(`End-of-Line (EOL) character(s): ${eol}`);
};

export default getEOL;