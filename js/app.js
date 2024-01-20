
ScrollReveal().reveal('.headline', {
  duration: 5100,
  reset: true
});
let a  = [23 , 23, 4,3]
console.log(delete a[0]);
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
  {
    id:9,
    title:"<i>3+2+ “7”</i> javobi qanday bo'lishi kerak?",
    text:"57"
  },
  {
    id:10,
    title:"Javascriptda <i>innerHTML</i> dan foydalanishning kamchiliklarini sanab bering.",
    text:"Tez kunda ...."
  },
  {
    id:11,
    title:"<i>Ekran obyektlari</i> deganda nimani tushunasiz? Tushuntirish.",
    text:"NULL qiymati yo'qlik yoki ob'ekt yo'qligini ko'rsatish uchun ishlatiladi."
  },
  {
    id:12,
    title:" <i>Delete</i> operatoridan nima maqsadda foydalaniladi?",
    text:"JavaScript-da delete operator ob'ektdan xususiyatni olib tashlash uchun ishlatiladi. U massivdan elementni olib tashlash uchun ham ishlatilishi mumkin. Massivlar bilan foydalanilganda, u massivda teshik qoldiradi. Biroq, ob'ektlar bilan foydalanilganda, u belgilangan xususiyatni olib tashlaydi. "
  },
  {
    id:13,
    title:"<i>Object</i> nima ?",
    text:"Obyectni malumotlarini saqlash uchun ishlatiladi. Objectlar Call stace da reference saqlaydi. U reference bizni u Objectni Heap dagi manzilda turgan qiymatiga olib boradi. Primitive lar Cal staceda value saqlashadi."
  },
  {
    id:14,
    title:"<i>Hoisting</i> nima ?",
    text:"Tepaga kotarish degan manoni anglatadi. Agar o'zgatuvchilarda ko'radigan bo'lsak ,  var o'zgaruvchisini yaratilgan joydan tepada chaqiradigan bo'lsak Hoisting bizga uni chaqirib olishimizdan oldinga chiqarib beradi. (var i; ) . Hosting o'zgaruvchini qiymatini emas , nomini tepaga ko'taryabdi.  "
  },{
    id:15,
    title:"<i>let</i> , <i>var</i> , <i>const</i> haqida aytib bering ?",
    text:" var o'zgaruvchilarni hoisting qiladi va uni qiymati aniqlangan Undefined bo'ladi. var fuvtion scope bo'ladi va funksiya ichida yaratilgan var (ozgaruvchi) funksiyaning istagan joyida ishlatilishi mumkin.  var da bir xil nomli o'zgaruvchilarni yaratish mumkin. let hoisting bo'ladi lekin uni qiymati anqlanmagan. Let block scope bo'ladi va {}  ichidan tashqariga chiqib keta olmaydi. bir hil nomli o'zgaruvchilarni yaratish mukin emas. "
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