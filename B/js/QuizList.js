import {BaseComponent} from "../BaseComponent.js";



class QuizList extends BaseComponent {
    constructor() {
        super();

        this.state = {
            quizzes: [],
        };
    };

   
    render() {
        let html = ""
        for (let quiz of this.state.quizzes) {
            html += /*html*/ 
            `<quiz
                category="${quiz.props.catergory}" 
                type="${quiz.props.type}" 
                difficulty="${quiz.props.difficulty}" 
                question="${quiz.props.question}"
                correct-answer="${quiz.props["correct-answer"]}"
                incorrect-answers="${quiz.props["incorrect-answers"]}"
                choosed="${quiz.props.choosed}"
                options="${quiz.props.options}">
                <br>     
            </quiz>`
        }

        this._shadowRoot.innerHTML = /*html*/ `
            ${html}
        `
    }

    componentDidMount() {
        // Lấy dữ liệu từ APIs
        const demoData = 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple';

        fetch(demoData)
            .then((response) => response.json())
            .then((data) => handleData(data));

        function handleData(data) {
            for (let i = 0; i < data["results"].length; i++) {
                let newquiz = {
                    ""
                }
            }
            
            
            this.setState({
                quizzes: [...this.state.qizzes,
                    newqizz]
            })
        }
    }
}
window.customElements.define("quiz-list", QuizList);