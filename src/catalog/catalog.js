import goUp from "../navigation/up.js";
import navigate from "../navigation/navigate.js";
import printContent from "../navigation/printContent.js";
import readAndPrint from "../filesOperations/readAndPrint.js";
import createFile from "../filesOperations/createFile.js";

const catalog = {
    up: goUp,
    cd: navigate,
    ls: printContent,
    cat: readAndPrint,
    add: createFile,
}

export default catalog;
