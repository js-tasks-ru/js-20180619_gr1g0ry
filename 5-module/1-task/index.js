'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    debugger
    for (let i=1; i< table.rows.length; i+=1) {
        let row = table.rows[i];
        if (row.cells[3].dataset.available === undefined) {
            row.setAttribute('hidden', true);
        } else {
            row.classList.add((row.cells[3].dataset.available === 'true') ? "available" : "unavailable");
            row.classList.remove((row.cells[3].dataset.available === 'true') ?  "unavailable": "available");
        }
        row.classList.add(row.cells[2].innerText === 'm' ? 'male':'female');
        if (Number(row.cells[1].innerText) < 18) {
            row.style.cssText = "text-decoration: line-through";

        }
    }
}
