import goUp from "../navigation/up.js";
import navigate from "../navigation/navigate.js";
import printContent from "../navigation/printContent.js";

const catalog = {
    up: goUp,
    cd: navigate,
    ls: printContent,
}

export default catalog;
