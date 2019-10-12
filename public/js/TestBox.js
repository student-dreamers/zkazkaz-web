export class TestBox {
    constructor(test, targetElement) {
        this.test = test;
        this.targetElement = targetElement;
        this.render();
    }

    render() {
        if(Math.floor(Math.random() * 4) == 0) {
            this.result = "Chyba"
        } else {
            this.result = "V pořádku";
        }
        this.container = document.createElement('tr');
        this.container.classList.add('test');
        this.month = this.test.date.getMonth() + 1;
        var url = "https://firebasestorage.googleapis.com/v0/b/zkazkaz.appspot.com/o/" + encodeURIComponent(this.test.image_name) + "?alt=media";
        this.container.innerHTML = `
    <tr class="test">
        <td>
            <div class="date">${this.test.date.getDate()}. ${this.month}. ${this.test.date.getFullYear()}</div>
            <div class="time">${this.test.date.getHours()}:${this.test.date.getMinutes()}</div>
        </td>
        <td class="author">${this.test.user_id}</td>
        <td class="result">
            <div>${this.result}</div>
        </td>
        <td class="photos">
            
            <img src="${url}">
        </td>
    </tr>
        `;
        this.targetElement.appendChild(this.container);
    }
}
