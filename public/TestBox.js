export class TestBox {
    constructor(test, targetElement) {
        this.test = test;
        this.targetElement = targetElement;
        this.render();
    }

    render() {
        this.month = this.test.date.getMonth() + 1;
        this.targetElement.innerHTML = `
    <tr class="test">
        <td>
            <div class="date">${this.test.date.getDate()}. ${this.month}. ${this.test.date.getFullYear()}</div>
            <div class="time">${this.test.date.getHours()}:${this.test.date.getMinutes()}</div>
        </td>
        <td class="author">${this.test.user_id}</td>
        <td class="result">
            <div>V pořádku</div>
            <div>Chyba v {kde}</div>
        </td>
        <td class="photos">
            ${this.test.image_name}
            <!--<img src="">-->
        </td>
    </tr>
        `;
    }
}
