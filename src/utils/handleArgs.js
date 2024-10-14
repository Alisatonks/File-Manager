function handleArgs(args) {
console.log('start')
    const regex = /("[^"]*"|[^"]+)/g; 
    const result = [];
    let match;

    while ((match = regex.exec(args)) !== null) {
        result.push(match[0]);
    }

    if (result.length < 2) {
        console.log('return1')
        return args.split(' ').filter(el => el !== '');
    }

    // const filteredResult = result.filter(el => el !==1).flatMap(el => el.startsWith('"') ? [el] : el.split(/\s+/));

    const newArgs = [result[0]];

    let arg = 0;

    console.log(result)

    for (let i = 1; i < result.length; i++) {
        console.log(i)
        if(result[i].startsWith(' ') && result[i] !== ' ') {
            console.log('startWith', i, 'result', result[i]);
            newArgs.push(result[i]);
            arg ++
        } else if(result[i].endsWith(' ') || result[i] === ' ') {
            console.log('endWith', i, result[i])
            newArgs[arg] += result[i];
            if((i + 1) <= result.length - 1)
            newArgs.push(result[i+1]);
            i++;
            arg++
        }
         else {
            console.log('else', i)
            newArgs[arg] += result[i]
        }
    }
    const paths = newArgs.map(arg => arg.trim());
    console.log('paths', paths)
    const res = paths.flatMap(path => path.includes('"') ? [path] : path.split(/\s+/));
    
    return res
}

const path = handleArgs('C:\\Users\\Alisa\\"One Drive"\\Desktop\\RSSchool\\Node\\FileManager\\File-Manager/filewith.txt   C:\\Users\\Alisa\\OneDrive\\Desktop\\RSSchool\\Node\\FileManager\\File-Manager')
console.log(path)
