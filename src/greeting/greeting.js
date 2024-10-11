
const greetings = () => {
  const name = process.env.npm_config_username;
  console.log(`Welcome to the File Manager, ${name}!`)  
}

export default greetings;