const getPathToFile = (args) => {
    const regex = /(["']?)(.*?)\1\s+(.+)/; 

    const match = args.match(regex);

    let pathToFile;
    let pathToDirectory;

    if (match) {
        pathToFile = match[2].trim(); 
        pathToDirectory = match[3].trim().replace(/^['"]|['"]$/g, ''); 
    } else {
        console.log("No match found");
    }

    return {pathToFile, pathToDirectory};
};

export default getPathToFile;