import getEOL from "./eol.js";
import getCPUs from "./cpus.js";
import getHomeDir from "./homedir.js";
import getUserName from "./username.js";

const catalog = {
  "--EOL": getEOL,
  "--cpus": getCPUs,
  "--homedir": getHomeDir,
  "--username": getUserName,
}

export default catalog;