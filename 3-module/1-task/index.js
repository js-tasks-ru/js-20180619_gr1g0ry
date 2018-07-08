/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let resultLines = [];
    for (let user of data) {
        if (user.age <= age) {
            resultLines.push(`${user.name}, ${user.balance}`);
        }
    }
    return resultLines.join('\n');
}
