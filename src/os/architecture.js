const getArchitecture = () => {
    const architecture = process.arch;
    console.log(`\n CPU Architecture: ${architecture}\n`);
};

export default getArchitecture;
