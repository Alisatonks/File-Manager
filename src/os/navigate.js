import catalog from "./catalog.js";

const osNavigate = (args) => {
    if (!catalog[args]) {
        console.error('Invalid input')
    } else {
         catalog[args]();
    }
}

export default osNavigate;