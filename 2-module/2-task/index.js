/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {
    "use strict";
    let paths = [];
    for (let key in obj) {
        if (obj[key] === value) {
            paths.push(key);
        }

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            let branchRes = find(obj[key], value);
            if ({}.toString.call(branchRes) === '[object Array]') {
                for (let i = 0; i < branchRes.length; i++) {
                    paths.push(`${key}.${branchRes[i]}`);
                }
            } else if ({}.toString.call(branchRes) === '[object String]') {
                paths.push(`${key}.${branchRes}`)
            }
        }

    }

    if (paths.length === 0) {
        return null;
    }
    if (paths.length === 1) {
        return paths[0];
    }
    return paths;
}
