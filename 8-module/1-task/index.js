'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    this.tableHead = document.createElement('thead');
    this.tableBody = document.createElement('tbody');

    this.tableHead.innerHTML = "" +
        "<tr>" +
        "  <td>Name</td>" +
        "  <td>Age</td>" +
        "  <td>Salary</td>" +
        "  <td>City</td>" +
        "</tr>";

    items
        .forEach(user => {
            let tr = document.createElement('tr');
            tr.innerHTML = '<td>' + Object.values(user).join('</td><td>') + '</td>';
            this.tableBody.appendChild(tr);
        });

    this.el.appendChild(this.tableHead);
    this.el.appendChild(this.tableBody);


    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) {

        this.el
            .querySelectorAll('tr')
            .forEach(tr => tr.parentNode.removeChild(tr));

        let sortingKey = Object.keys(items[0])[column];

        items
            .sort((userA, userB) => {
                let isDesc = desc === true ? -1 : 1;
                return (userA[sortingKey] > userB[sortingKey] ? 1 : -1) * isDesc;
            })
            .forEach(user => {
                let tr = document.createElement('tr');
                tr.innerHTML = '<td>' + Object.values(user).join('</td><td>') + '</td>';
                this.tableBody.appendChild(tr);
            });
    };
}

