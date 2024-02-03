let quiz = document.querySelector("#quiz");
let quizQuestion = document.querySelector(".quiz-question");
let quizOptionsAnswer = document.querySelectorAll(".quiz-options-answer");
let a_text = document.querySelector("#a_text");
let b_text = document.querySelector("#b_text");
let c_text = document.querySelector("#c_text");
let d_text = document.querySelector("#d_text");
let quizBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswere();

  const currentQuizData = quizData[currentQuiz];

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
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if ((score / 10) * 9 < quizData.length) {
        quiz.innerHTML = `<div class="quiz-resualt">
        <h2 >Siz ${quizData.length} ta dan  ${score} taga javob topdingiz.</h2> <h1>Eng yuqori daraja 🥇</h1>
        </div>`;
        function happyFun() {
          const duration = 15 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

          function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }

          const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
              })
            );
            confetti(
              Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
              })
            );
          }, 250);
        }
        happyFun()
      } else{
        quiz.innerHTML = `<h2 class="quiz-resualt">Sizning javobingiz ${score}/ ${quizData.length}</h2>`;
      }
    }
  }
});
