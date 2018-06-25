/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    if (obj === null) {
        return null;
    }

    let result = Object.assign({}, obj);
    for (let key in result) {
        if (typeof result[key] === 'object' && obj !== null) {
            result[key] = clone(result[key]);
        }
    }

    return result;
}
