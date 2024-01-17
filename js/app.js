
ScrollReveal().reveal('.headline', {
  duration: 5100,
  reset: true
});
let dataQuestion = [
  {
    id:1,
    title:"<i>JavaScript</i> nima?",
    text:"JavaScript - bu brauzerlarda ishlatiladigan skriptlash tili."
  },
  {
    id:2,
    title:"JavaScript <i>ma'lumotlar turlari</i> qanday?",
    text:"Asosan, JavaScript ma'lumotlarining ikki turi mavjud. 1.Primitiv ma'lumotlar turlari. 2Primitiv bo'lmagan ma'lumotlar turlari"
  },
  {
    id:3,
    title:"<i>Salbiy cheksizlik</i> deganda nimani tushunasiz?",
    text:"Salbiy cheksizlik JavaScript-dagi manfiy sonlarni nolga bo'lish orqali hosil bo'ladi."
  },
  {
    id:4,
    title:"JavaScript-da <i>komentarya</i> qanday yaratasiz?",
    text:"Bir qatorli izohlar uchun: -“//” ishlatiladi. Ko‘p qatorli izohlar uchun:-“/* ko‘p qatorli izoh uchun */” ishlatiladi."
  },
  {
    id:5,
    title:"<i>“===”</i> operatori deganda nimani tushunasiz?",
    text:"Bu operator qat'iy tenglik operatori deb ataladi."
  },
  {
    id:6,
    title:"<i>style/class</i> ni qanday o'zgartirishimiz kerak?",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur, mollitia nesciunt id cumque, consequuntur quis ex nam, nostrum dolor sint saepe animi aliquid? Hic animi sit consequuntur labore recusandae culpa, quidem aperiam possimus."
  },
  {
    id:7,
    title:"<i>Unshift()</i> usuli deganda nimani tushunasiz?",
    text:"unshift() massivning old qismiga massiv elementlarini qo‘shadi."
  },
  {
    id:8,
    title:"<i>Ekran obyektlari</i> deganda nimani tushunasiz? Tushuntirish.",
    text:"Ekran ob'ekti joriy veb-sahifa ko'rsatiladigan brauzer ekrani haqida ma'lumot olish uchun ishlatiladi. U ko'rsatilgan ekranning o'lchamlari haqida ma'lumot beradi, masalan: width, height , availWidth , availHeight  , colorDepth , pixelDepth"
  },
]
let list = document.querySelector(".question-list");

dataQuestion.forEach(function (item, index) {
  let questionItem = createQuestionItem(item);
  list.appendChild(questionItem);
});

function createQuestionItem(item) {
  let questionItem = document.createElement("li");
  questionItem.classList.add("question-item");
  questionItem.classList.add("headline");
  questionItem.innerHTML = `
    <div class="question-item-top">
      <h3 class="question-item-title">${item.title}</h3>
      <i class="fa-solid fa-angle-down"></i>
    </div>
    <div class="question-item-answer">
      <p class="question-item-answer-text">
        ${item.text}
      </p>
    </div>
  `;
  questionItem.style.listStyle = 'decimal';

  questionItem.addEventListener('click', function () {
    // Toggle active class for the clicked item
    let answer = questionItem.querySelector('.question-item-answer');
    if (answer.classList.contains('active')) {
      answer.classList.remove('active');
    } else {
      // Close all other answers before opening this one
      let questionItemAnswerAll = document.querySelectorAll('.question-item-answer');
      questionItemAnswerAll.forEach(function (item) {
        item.classList.remove('active');
      });
      answer.classList.add('active');
    }
  });

  return questionItem;
}