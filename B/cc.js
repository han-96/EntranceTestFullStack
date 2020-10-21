// import "./js/Quiz.js"
// import "./js/QuizList.js"

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



let showQuiz = async () => {
    let demoData = await fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');
    let temp = await demoData.json();
    var data = temp["results"];

    let quizList = document.getElementById("quiz-list");

    for (let i = 0; i < data.length; i++) {
        //ghép true option và false options thành mảng chung
        data[i]["incorrect_answers"].push(data[i]["correct_answer"])
        let options = data[i]["incorrect_answers"];
 
        //xáo trộn ngẫu nhiên mảng options:
        shuffle(options)   

        //hiện quiz
        quizList.innerHTML += /*html*/`
            <div class="quiz" > 
                <p class="question"> ${i+1}, ${data[i].question} </p>
                <form class= "options" id=${i}>
                    <input type="radio" name="quiz#${i}" value="${options[0]}">
                    <label for="quiz#${i}">${options[0]}</label>
                    <br>

                    <input type="radio" name="quiz#${i}" value="${options[1]}">
                    <label for="quiz#${i}">${options[1]}</label>
                    <br>

                    <input type="radio" name="quiz#${i}" value="${options[2]}">
                    <label for="quiz#${i}">${options[2]}</label>
                    <br>

                    <input type="radio" name="quiz#${i}" value="${options[3]}">
                    <label for="quiz#${i}">${options[3]}</label>
                    <br>
                </form>
            </div>
        `;
    }

    //tính điểm
    let showScore = document.getElementById("submit");
    showScore.onclick = () => {
        let score = 0;
        for (let i = 0; i < data.length; i++) {
            let x = document.getElementById(`${i}`);
            for (let j = 0; j < 4; j++) {
                if(x[j].checked) {
                    if (x[j].value == data[i]["correct_answer"]) {
                        score += 10;
                        x.innerHTML += /*html*/ `
                        <br>
                        <p> :) Very good </p>`
                    } else {
                        x.innerHTML += /*html*/ `
                        <br>
                        <p> WRONG!!! </p>`
                    }

                }
            }
        }
        alert("You've got " + `${score}` + " scores")
    }
}

//gọi hàm để hiện câu hỏi ra màn hình
showQuiz();

//nút chơi lại
let again = document.getElementById("again");
again.onclick = () => {
    location.reload();
}




