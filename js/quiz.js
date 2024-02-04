let quiz = document.querySelector("#quiz");
let quizQuestion = document.querySelector(".quiz-question");
let quizOptionsAnswer = document.querySelectorAll(".quiz-options-answer");
let a_text = document.querySelector("#a_text");
let b_text = document.querySelector("#b_text");
let c_text = document.querySelector("#c_text");
let d_text = document.querySelector("#d_text");
let quizBtn = document.querySelector("#submit");

let uniqueQuizData = [...new Set(quizData)];
let dataNewTen = uniqueQuizData
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswere();

  const currentQuizData = dataNewTen[currentQuiz];

  quizQuestion.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswere() {
  quizOptionsAnswer.forEach((element) => {
    element.checked = false;
  });
}

function getSelected() {
  let answer;
  quizOptionsAnswer.forEach(function (item) {
    if (item.checked) {
      answer = item.id;
    }
  });
  return answer;
}




quizBtn.addEventListener("click", function () {
  const answer = getSelected();
  if (answer) {
    if (answer == dataNewTen[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < dataNewTen.length) {
      loadQuiz();
    } else {
      setTimeout(function(){
        window.location.href = 'https://www.javascript-savollar.uz/'
      } , 8000)
      if ((dataNewTen.length / 100) * 90 <= score) {
        quiz.innerHTML = `<div class="quiz-resualt">
        <h2 >Siz ${dataNewTen.length} ta dan  ${score} taga javob topdingiz.</h2> <h1>Eng yuqori daraja 🥇</h1>
        </div>`;
       
      } else if((dataNewTen.length / 100) * 70 <= score){
        quiz.innerHTML = `<div class="quiz-resualt">
        <h2 >Siz ${dataNewTen.length} ta dan  ${score} taga javob topdingiz.</h2> <h1>O'rta  daraja 🥈</h1>
        </div>`;
       
      } else if((dataNewTen.length / 100) * 50 <= score){
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        quiz.innerHTML = `<div class="quiz-resualt">
        <h2 >Siz ${dataNewTen.length} ta dan  ${score} taga javob topdingiz.</h2> <h1>Boshlang'ich  daraja 🥉</h1>
        </div>`;
      } else{
       
        quiz.innerHTML = `<div class="quiz-resualt">
        <h2 >Siz ${dataNewTen.length} ta dan  ${score} taga javob topdingiz.</h2> <h1>Darajangiz yoq 🤥</h1>
        </div>`;
      }

     
    }
  }
});
