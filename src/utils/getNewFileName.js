const getNewFileName = (args) => {

    const regex = /^(.*?)(?:\s+|$)(?:["']([^"']+)["']|(\S+))$/;

    const match = args.match(regex);

    let filePath;
    let newFileName;
    
    if (match) {
        filePath = match[1].trim(); 
        newFileName = match[2] ? match[2] : match[3];
    } else {
        console.error('No match found!');
    }
    return {filePath, newFileName}
};

export default getNewFileName;
