let quiz = document.querySelector('#quiz')
let quizQuestion = document.querySelector('.quiz-question')
let quizOptionsAnswer = document.querySelectorAll('.quiz-options-answer')
let a_text = document.querySelector('#a_text')
let b_text = document.querySelector('#b_text')
let c_text = document.querySelector('#c_text')
let d_text = document.querySelector('#d_text')
let quizBtn  = document.querySelector('#submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

  deselectAnswere()

  const currentQuizData = quizData[currentQuiz]

  quizQuestion.innerHTML = currentQuizData.question

  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b
  c_text.innerHTML = currentQuizData.c
  d_text.innerHTML = currentQuizData.d
}

function deselectAnswere(){
  quizOptionsAnswer.forEach(element=>{
    element.checked = false
  })
}

function getSelected(){
  quizOptionsAnswer.forEach(function(item){
    if(item.checked){
      answer = item.id
    }
  })
  return answer
}


quizBtn.addEventListener('click' , function(){
    const answer = getSelected()
    if(answer){
      if(answer == quizData[currentQuiz].correct){
        score++
      }
      currentQuiz++

      if(currentQuiz < quizData.length){
        loadQuiz()
      } else{
        quiz.innerHTML = `<h2>Sizning javobingiz ${score}/ ${quizData.length}</h2>`
      }
    }
})