import goUp from "../navigation/up.js";
import navigate from "../navigation/navigate.js";
import printContent from "../navigation/printContent.js";
import readAndPrint from "../filesOperations/readAndPrint.js";
import createFile from "../filesOperations/createFile.js";
import rename from "../filesOperations/rename.js";
import copy from "../filesOperations/copy.js";
import deleteFile from "../filesOperations/delete.js";
import moveFiles from "../filesOperations/moveFiles.js";

const catalog = {
    up: goUp,
    cd: navigate,
    ls: printContent,
    cat: readAndPrint,
    add: createFile,
    rn: rename,
    cp: copy,
    mv: moveFiles,
    rm: deleteFile,
}

export default catalog;
