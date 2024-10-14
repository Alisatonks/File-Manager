import os from 'node:os';

const getCPUs = () => {
    const cpus = os.cpus();
    console.log(`Total CPUs: ${cpus.length}\n`);

    cpus.forEach((cpu, index) => {
        const model = cpu.model;
        const clockRateGHz = (cpu.speed / 1000).toFixed(2); 
        console.log(`CPU ${index + 1}:`);
        console.log(`Model: ${model}`);
        console.log(`Clock Rate: ${clockRateGHz} GHz\n`);
    });
};

export default getCPUs;