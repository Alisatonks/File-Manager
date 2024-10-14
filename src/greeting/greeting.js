
import { getUserName } from "../user.js";
import { homeDirectory, setHomeDirectory } from "../home/homeDirectory.js";
import { GREETING, ADDRESS_TEXT } from "../utils/constants.js";
import printCurrentDir from "../current/printCurrentDir.js";
import createReadLine from "../readline/readline.js";

const greetings = () => {
  const name = getUserName();
  console.log(`${GREETING}, ${name || 'Guest'}!`); 
  setHomeDirectory(homeDirectory);
  printCurrentDir(homeDirectory);
  console.log(process.cwd())
  createReadLine();

}

export default greetings;