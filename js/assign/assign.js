import _ from "../index";

_.assign = (des, ...sources) => {
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        for (let key in source) {
            if (source.hasOwnProperty(key)) des[key] = source[key];
        }
    }
    return des;
}

export default _;