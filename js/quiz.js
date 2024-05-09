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
      } else if((dataNewTen.length / 100) * 70 <= score){
        quiz.innerHTML = `<div class="quiz-resualt">
        <h2 >Siz ${dataNewTen.length} ta dan  ${score} taga javob topdingiz.</h2> <h1>O'rta  daraja 🥈</h1>
        </div>`;
        function happyFun() {
          const count = 200,
          defaults = {
            origin: { y: 0.7 },
          };
        
        function fire(particleRatio, opts) {
          confetti(
            Object.assign({}, defaults, opts, {
              particleCount: Math.floor(count * particleRatio),
            })
          );
        }
        
        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        
        fire(0.2, {
          spread: 60,
        });
        
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
        });
        
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
        });
        
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
        }
        happyFun()
       
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
