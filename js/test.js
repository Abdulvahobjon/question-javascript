document.getElementById('submitBtn').addEventListener('click', showResults);

function showResults() {
  // Javoblar olish uchun kodlar
  var answers = {
    'question1': 'Javob 1',
    'question2': 'Javob 2',
    'question3': 'Javob 3'
  };

  var resultList = document.getElementById('answersList');
  resultList.innerHTML = '';

  for (var question in answers) {
    var listItem = document.createElement('li');
    listItem.textContent = document.getElementById(question).textContent + ': ' + answers[question];
    resultList.appendChild(listItem);
  }

  document.getElementById('test').style.display = 'none';
  document.getElementById('results').style.display = 'block';
}






