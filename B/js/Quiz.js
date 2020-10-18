import {BaseComponent} from "../BaseComponent.js";
const style = /*html*/ `
<style>
    
</style>
`

//Hàm xáo trộn ngẫu nhiên dãy câu trả lời
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
 
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
 
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
 
    return array;
}


class Quiz extends BaseComponent {
    constructor() {
        super();

        this.props = {
            'category': '',
            'type': '',
            'difficulty': '',
            'question': '',
            'correct-answer': '',
            'incorrect-answers': [],
            'choosed': '',
            'options': [],
        };
    }

    static get observedAttributes() {
        return ['category', 'type', 'difficulty', 'question', 'correct-answer', 'incorrect-answers', 'choosed']
    }

    render() {

        //ghép true option và false options thành mảng chung
        this.props.options = this.props["incorrect-answers"].push(this.props["correct-answer"])

        //xáo trộn ngẫu nhiên mảng options:
        shuffle(this.props.options)


        //lập Container chứa các Options của câu hỏi 
        let options = "";
        for (let option of this.props.options) {
            options += /*html*/ `
            <div class="answerContainer">
                <input class="myCheck" type="checkbox">
                <label> ${option}</label>
                <br>
            </div>` 
        }

        //hiện câu hỏi kèm các câu trả lời
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="quiz-container"> 
                <div class="question">${this.props.question}</div>
                <div class="options">
                    ${options}
                </div>
            </div>
        `
    }
}

window.customElements.define("quiz-container", Quiz);