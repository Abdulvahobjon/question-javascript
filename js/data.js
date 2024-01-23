// data start
let dataQuestion = [
  {
    id:1,
    title:"<i>JavaScript</i> nima?",
    text:"JavaScript (JS) yuqori darajali dasturlash tilidir. <br> JavaScript asosan veb-brauzerda ishlaydigan mijoz tomoni skriptlarini yaratish uchun ishlatiladi. Bu shuni anglatadiki, u serverda emas, balki foydalanuvchining kompyuterida bajariladi. "
  },

  {
    id:2,
    title:"JavaScript <i>ma'lumotlar turlari</i> qanday?",
    text:"JavaScript’da ma’lumotlar tiplari qiymatlariga qarab 2 ta turga bo’lindi, <b>Primitive</b> va <b>Non-primitive</b>. <br> <b>Primitive qiymatlarga:</b> 1. String 2. Number 3. Boolean 4. Null 5. Undefined 6. BigInt 7. Symbol <br> <b>Non-primitive:</b> 1. Object"
  },

  {
    id:3,
    title:"<i>Salbiy cheksizlik</i> deganda nimani tushunasiz?",
    text:"<b>Salbiy cheksizlik</b> (-Infinity) deganda - bu Number ma’lumot turlarining biri bo’lib, bu qiymatni bir sonning boshqa son ga bo’linish natijasida hosil bo’lishi mumkin, agar bo’linuvchi son 0 ga teng bo’lsa. <br /> Misol uchun, <mark> -1/0 </mark>   ifodasi <b>-Infinity</b> ni qaytaradi. "
  },

  {
    id:4,
    title:"JavaScript-da <i>komentarya</i> qanday yaratasiz?",
    text:"JavaScript-da ikkita turi komentariya yaratish mumkin: <br /> <b>Bir qatorli komentariya:</b> Bu turi komentariya yaratish uchun // belgilaridan foydalaniladi. Bu belgilar qatorning oxiriga qo’yiladi va qatorning oxirigacha bo’lgan qism komentariya sifatida hisoblanadi. <br /> <b>Ko’p qatorli komentariya:</b> Bu turi komentariya yaratish uchun /* va */ belgilaridan foydalaniladi. Bu belgilar orasidagi barcha matn komentariya sifatida hisoblanadi. "
  },

  {
    id:5,
    title:"<i>“===”</i> operatori deganda nimani tushunasiz?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:6,
    title:"<i>style/class</i> ni qanday o'zgartirishimiz kerak?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:7,
    title:"<i>Unshift()</i> usuli deganda nimani tushunasiz?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:8,
    title:"<i>Ekran obyektlari</i> deganda nimani tushunasiz? Tushuntirish.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:9,
    title:"<i>3+2+ “7”</i> javobi qanday bo'lishi kerak?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:10,
    title:"Javascriptda <i>innerHTML</i> dan foydalanishning kamchiliklarini sanab bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:11,
    title:"<i>Ekran obyektlari</i> deganda nimani tushunasiz? Tushuntirish.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:12,
    title:" <i>Delete</i> operatoridan nima maqsadda foydalaniladi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:13,
    title:"<i>Object</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:14,
    title:"<i>Hoisting</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },{

    id:15,
    title:"<i>let</i> , <i>var</i> , <i>const</i> haqida aytib bering ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:16,
    title:"Nima uchun sizga <i>JSON</i> kerak ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:17,
    title:" <i>BOM</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:18,
    title:" <i>Undefined</i> va <i>Null</i> farqi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:19,
    title:" setTimeout dan qanday foydalanish kerak ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:20,
    title:"<i>Web Storage</i> nima ? Qanday turdagi storagelar mavjud?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:21,
    title:"<i>Session storage</i> va <i>Local storage</i>ni farqi nimada?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:22,
    title:"JavaScript <i>single threaded</i>  yoki <i>multi-threaded</i>?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  }, {

    id:23,
    title:"Qaysi yo'llar bilan <i>asinxron</i> kod yozishimiz mumkin?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:24,
    title:"Qaysi yo'llar bilan <i>asinxron</i> kod yozishimiz mumkin?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:25,
    title:"<i>Promise</i>larni asosiy statelari qaysilar?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:26,
    title:"<i>Promise chain</i>ing nima?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:27,
    title:"null == 0 nimaga teng ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:28,
    title:"<i>Callback hell</i> nima?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:29,
    title:"<i>Promise.race</i> va <i>Promise.all</i> metodlarining farqi nimada?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:30,
    title:"JavaScript <i>compiled</i> yoki <i>interpreted</i> tilmi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:31,
    title:"<i>IIFE</i> nima?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:32,
    title:"<i>Clean Code</i> yozish deganda nimani tushunasiz?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:33,
    title:"<i>Hoisting</i> nima? <i>Variable hoisting</i> va <i>function hoisting</i> qanday ishlaydi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:34,
    title:"<i>Obyekt</i> hususiyatlarini qanday qilib o'zgarmas qilishimiz mumkin?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:35,
    title:"<i>Const</i> yordamida yasalgan obyektni o'zgartirish imkoni bormi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:36,
    title:"<i>O'zgaruvchilar</i> turlari va farqlari haqida gapiring.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:37,
    title:"<i>Hoisting</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:38,
    title:"<i>TDZ</i> (Tempororal dead zone) nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:39,
    title:"<i>Obyektlar</i> qanday ishlaydi ? <i>Primitive</i> qiymatlardan nima farqi bor ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:40,
    title:"<i>Garbage collection</i> vazifasi va maqsadi nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:41,
    title:"<i>this</i> kalit so’zi nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },


  {
    id:42,
    title:"<i>call</i>, <i>apply</i> va <i>bind</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:43,
    title:"<i>Map</i>, <i>Set</i>, <i>WeakMap</i> va <i>WeakSet</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:44,
    title:"<i>Type coercion</i> va <i>type conversion</i> farqi nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:45,
    title:"<i>Operatorlar</i> turlari haqida gapiring.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:46,
    title:"<i>Oddiy</i> va <i>chiziqli</i> funksiyalar farqi nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:47,
    title:"<i>Optional chaining</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:48,
    title:"Tagged template literals (tagged strings) nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },


  {
    id:49,
    title:"<i>Constructor</i> functions nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:50,
    title:"Nechta <i>Array metodlarini</i> bilasiz ? <i>Reduce</i> va <i>map</i> farqi va ishlashi qanday",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:51,
    title:"<i>Destructuring assignment</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:52,
    title:"<i>Pure</i> va <i>impure</i> funksiya nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:53,
    title:"<i>First-class functions</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:54,
    title:"<i>Higher-order functions</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:55,
    title:"<i>Currying</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:56,
    title:"<i>Logical Operation</i> haqida aytib bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:57,
    title:"<i>Ternary operator</i> haqida aytib bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:58,
    title:"<i>Nullish</i> operator nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:59,
    title:"<i>for loop</i>  nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:60,
    title:"<i>Math objecti</i> haqida aytib bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:61,
    title:"<i>Distructure</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:62,
    title:"<i>Scope</i> nima?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:63,
    title:"Nega <i>var</i> bugungi kunda kam ishlatiladi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:64,
    title:"<i>setTimeout</i> qanday ishlaydi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:65,
    title:"<i>this</i> qaysi holatlarda <i>undefined</i> bo'lib qoladi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:66,
    title:"<i>prototype</i> vs <i>proto</i> farqi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:67,
    title:"Nimaga <i>curry function</i> kerak?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:68,
    title:"<i>DOM</i> haqida aytib bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:69,
    title:"<i>Range</i> nima?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:70,
    title:"<i>Event loop</i> nima?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:71,    
    title:"<i>Currying</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:72,
    title:"<i>Blob</i> nima?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:73,
    title:"<i>fetch</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:74,
    title:"<i>LocalStorage</i> haqida aytib bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:75,
    title:"<i>if else</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:76,
    title:"<i>Mantiqiy operatorlar</i> haqida aytib bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:77,
    title:"<i>true === 'true'</i>",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:78,
    title:"Qaysi <i>string metodi</i>  matn boshida va oxiridagi bo'sh joylarni olib tashlaydi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:79,
    title:"Qaysi <i>array</i> metodi massivning <i>oxirgi elementi</i>ni olib tashlaydi va uning qiymatini qaytarad?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:80,
    title:"<i>1+2+'3'</i>",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:81,
    title:"<i>true === 'true'</i>",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:82,
    title:"<i>NaN</i> nima ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:83,
    title:"<i>Console</i> haqida aytib bering.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:84,
    title:"<i>this === window</i>",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:85,
    title:"Agar <i>getElementById</i> bilan tanlangan element topilmasa, u nima qaytaradi?  ",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:86,
    title:"Agar <i>querySelectorAll</i> bilan tanlangan element topilsa, u nima qaytaradi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:87,
    title:"Agar <i>querySelector</i> bilan tanlangan element topilsa, u nima qaytaradi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:88,
    title:"<i>DOM</i> , Qanday qilib elementdan bitta keyingi elementni tanlab olish mumkin?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:89,
    title:"<i>DOM</i> , Qanday qilib elementdan bitta oldingi elementni tanlab olish mumkin?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:90,
    title:"Agar <i>getElementsByTagName</i> bilan tanlangan element topilsa, u nima qaytaradi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:91,
    title:"Agar <i>getElementsByClassName</i> bilan tanlangan element topilmasa, u nima qaytaradi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:92,
    title:"JavaScript dasturlashda  <i>kodning qiyinchilik</i> yuzaga kelishi va boshqarilishi qiyin bo'lgan holat nima deb nomlanadi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:93,
    title:"Qaysi javascript metodi <i>Promiseni</i> muvaffaqiyatli yakunlaganida (fulfilled) ishga tushiriladi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:94,
    title:"Qaysi javascript metodi <i>Promiseni</i> xato (rejected) holatda ishga tushiriladi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:95,
    title:"<i>Intervalli</i> taymerni to'xtatish funktsiyasi qaysi?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:96,
    title:"Javascriptdagi <i>**</i> operatori vazifasi.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:97,
    title:"<i>isNaN('abs_javaScript')</i> ",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:98,
    title:"<i>100</i> gacha bo'lgan raqamlardan <i>random</i> qiling.",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:99,
    title:"<i>true + ('true' - 0)</i> ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

  {
    id:100,
    title:"<i>Matn</i> - qanday data type hisoblanadi ?",
    text:"Maqul javobni bilsangiz adminga yuborishingiz mumkin."
  },

]