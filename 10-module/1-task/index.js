(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
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
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;

            this.tableHead = document.createElement('thead');
            this.tableBody = document.createElement('tbody');

            this.tableHead.innerHTML = "" +
                "<tr>" +
                "  <td>Name</td>" +
                "  <td>Age</td>" +
                "  <td>Salary</td>" +
                "  <td>City</td>" +
                "  <td></td>" +
                "</tr>";

            this.data
                .forEach(user => {
                    let tr = document.createElement('tr');
                    tr.dataset.userId = user.id;
                    tr.innerHTML = `<td>
                                        ${Object.values(user).slice(1).join('</td><td>')}
                                    </td>
                                    <td><a>X</a></td>`;
                    this.tableBody.appendChild(tr);
                });

            this.el.appendChild(this.tableHead);
            this.el.appendChild(this.tableBody);
            this.el.addEventListener('click', e => {
                if (e.target.outerHTML === '<a>X</a>') {

                    let removingUserTr = e.target.closest('tr');
                    let removingUserId = removingUserTr.dataset.userId;
                    removingUserTr.parentElement.removeChild(removingUserTr);
                    this.data = this.data.filter(user => user.id !== removingUserId);
                    this.onRemoved(Number(removingUserId));
                }
            })
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {}
    }

    window.ClearedTable = ClearedTable;
})();
