'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let words = str.split(/[ ,]/);
    let max = -Infinity;
    let min =  Infinity;
    for (let i=0; i< words.length; i++) {
        let num = parseFloat(words[i]);

        if (isNaN(words[i])) {
            continue;
        }

        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    return {min, max};
}

