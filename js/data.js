// data start
let dataQuestion = [
  {
    id: 1,
    title: "<i>JavaScript</i> nima?",
    text: "JavaScript (JS) yuqori darajali dasturlash tilidir. <br> JavaScript asosan veb-brauzerda ishlaydigan mijoz tomoni skriptlarini yaratish uchun ishlatiladi. Bu shuni anglatadiki, u serverda emas, balki foydalanuvchining kompyuterida bajariladi. ",
    level: "oddiy",
  },

  {
    id: 2,
    title: "JavaScript <i>ma'lumotlar turlari</i> qanday?",
    text: "JavaScript’da ma’lumotlar tiplari qiymatlariga qarab 2 ta turga bo’lindi, <b>Primitive</b> va <b>Non-primitive</b>. <br> <b>Primitive qiymatlarga:</b> 1. String 2. Number 3. Boolean 4. Null 5. Undefined 6. BigInt 7. Symbol <br> <b>Non-primitive:</b> 1. Object",
    level: "oddiy",
  },

  {
    id: 3,
    title: "<i>Salbiy cheksizlik</i> deganda nimani tushunasiz?",
    text: "<b>Salbiy cheksizlik</b> (-Infinity) deganda - bu Number ma’lumot turlarining biri bo’lib, bu qiymatni bir sonning boshqa son ga bo’linish natijasida hosil bo’lishi mumkin, agar bo’linuvchi son 0 ga teng bo’lsa. <br /> Misol uchun, <mark> -1/0 </mark>   ifodasi <b>-Infinity</b> ni qaytaradi. ",
    level: "oddiy",
  },

  {
    id: 4,
    title: "JavaScript-da <i>komentarya</i> qanday yaratasiz?",
    text: "JavaScript-da ikkita turi komentariya yaratish mumkin: <br /> <b>Bir qatorli komentariya:</b> Bu turi komentariya yaratish uchun // belgilaridan foydalaniladi. Bu belgilar qatorning oxiriga qo’yiladi va qatorning oxirigacha bo’lgan qism komentariya sifatida hisoblanadi. <br /> <b>Ko’p qatorli komentariya:</b> Bu turi komentariya yaratish uchun /* va */ belgilaridan foydalaniladi. Bu belgilar orasidagi barcha matn komentariya sifatida hisoblanadi. ",
    level: "oddiy",
  },

  {
    id: 5,
    title: "<i>“===”</i> operatori deganda nimani tushunasiz?",
    text: "Bu taqqoslash operatori. U ikki qiymatni <b>taqqoslaydi</b> va agar ular teng bo’lsa true , aks holda false qiymatini qaytaradi. Ammo, bu operator “==” dan farqli ravishda ishlaydi. “===” operatori qiymatlarni solishtirishdan oldin ularning turini ham tekshiradi. Shu tufayli bu operatori  <q>exact equality</q> deb  ataladi.",
    level: "oddiy",
  },

  {
    id: 6,
    title: "<i>style/class</i> ni qanday o'zgartirishimiz kerak?",
    text: "<b>Class ni o’zgartirish:</b> Elementning klassini o’zgartirish uchun <i>classList</i> obyektini ishlatishingiz mumkin. Bu obyektning add, remove, va toggle kabi usullari mavjud. <br /> <b>Style ni o’zgartirish:</b> Elementning stilini o’zgartirish uchun <i>style</i> obyektini ishlatishingiz mumkin. ",
    level: "oddiy",
  },

  {
    id: 7,
    title: "<i>Unshift()</i> usuli deganda nimani tushunasiz?",
    text: "JavaScriptda <b>unshift()</b> metodi massivning boshiga yangi elementlar qo’shish uchun ishlatiladi. Bu metod asl massivni o’zgartiradi va massivning yangi uzunligini qaytaradi.",
    level: "oddiy",
  },

 
  {
    id: 8,
    title: " <i>Delete</i> operatoridan nima maqsadda foydalaniladi?",
    text: "<b>delete</b> operatori obyektdan berilgan xususiyatni <b>o’chiradi</b>.",
    level: "oddiy",
  },

  {
    id: 9,
    title: "<i>3+2+ “7”</i> javobi qanday bo'lishi kerak?",
    text: "javob: <b>57</b> ",
    level: "oddiy",
  },

  {
    id: 10,
    title:
      "Javascriptda <i>innerHTML</i> dan foydalanishning kamchiliklarini sanab bering.",
    text: "innerHTML dan foydalanish <b>HTML</b> va <b>XML</b> dokumentlari uchun har xil natijalar qaytarishi mumkin.",
    level: "o'rta",
  },

  {
    id: 11,
    title: "<i>Optional chaining</i> nima ?",
    text: "Optional chaining - biror obyektning biror <b>property</b> va <b>method’lariga</b> “xavfsiz” kirish usuli. Bu orqali kirilgan property yoki method agar yo’q bo’lsa bizga error emas, balki <b>undefined</b> qaytaradi. ",
    level: "qiyin",
  },


  {
    id: 12,
    title: "<i>BOM</i> deganda nimani tushunasiz?",
    text: "JavaScript BOM, yoki <b>Browser Object Model</b>, brauzer obyektlar modeli,  <i>brauzerda interfeysni boshqarish</i> uchun JavaScript obyektlarini taqdim etadi. BOM brauzer va brauzerning xususiyatlariga oid ma'lumotlarni olish, o'zgartirish va boshqa amallarni bajarish uchun ishlatiladi. ",
    level: "o'rta",
  },

  {
    id: 13,
    title: "<i>Object</i> nima ?",
    text: "“Object” - bu JavaScript ning <b>ma’lumot turlaridan</b> biri.",
    level: "oddiy",
  },

  {
    id: 14,
    title: "<i>Hoisting</i> nima ?",
    text: "Hoisting jsda ishlaydigan default qiymat bo'lib , u barcha declorationlarni alohida o'qib, ularni shu scope ichida eng tepaga ko'taradi. Bu orqali declorationlarni teparoqdaham ishlatsa bo'ladi (Biroq, faqat o'zgaruvchilar ko’tariladi, boshlang’ich qiymatlar emas). Asosan funksiyalarda ishlaganda foyda beradi. <br /> <br /> <b>Declaration’larga misol</b> - let, const, var, function, class ",
    level: "o'rta",
  },
  {
    id: 15,
    title: "<i>let</i> , <i>var</i> , <i>const</i> haqida aytib bering ?",
    text: "JavaScriptda var, let va const o’zgaruvchilarni e’lon qilish uchun ishlatiladi. Ular bir-biridan <b>scope</b>, o’zidagi ma’lumotni qay tarzda saqlay olishi bilan farqlanadi.",
    level: "oddiy",
  },

  {
    id: 16,
    title: "Nima uchun sizga <i>JSON</i> kerak ?",
    text: "JavaScript Object Notation - ma'lumotlar <b>almashinish</b> formati, ma'lumotlarni almashinishning oson usuli sifatida <b>mashhur</b> bo'lgan bir formatdir. <b>JSON</b> oddiy  <b>string</b>, <b>number</b>, <b>object</b> lar, <b>massivlar</b> va <b>boolean</b> qiymatlari qabul qiladi va ularni JavaScript object lariga moslashtiradi.",
    level: "o'rta",
  },

  {
    id: 17,
    title: " <i>BOM</i> nima ?",
    text: "JavaScript BOM, yoki \"Browser Object Model\", <b>brauzer obyektlar modeli</b>, brauzerda <b>interfeysni</b> boshqarish uchun JavaScript obyektlarini taqdim etadi. BOM brauzer va brauzerning xususiyatlariga oid <b>ma'lumotlarni olish</b>, <b>o'zgartirish</b> va boshqa amallarni bajarish uchun ishlatiladi.",
    level: "oddiy",
  },

  {
    id: 18,
    title: " <i>Undefined</i> va <i>Null</i> farqi?",
    text: "JavaScript tilida undefined va null ikkala qiymat ham <b>ma’noga ega bo’lmagan</b> qiymatlarni ifodalash uchun ishlatiladi, lekin ularning farqi bor. <br /> <br /> <b>Undefined:</b> O’zgaruvchi e’lon qilingan, lekin hali qiymati belgilanmagan. <br /> <b>Null:</b> Bu o’zgaruvchiga hech qanday qiymat yo’q deb belgilash uchun ishlatiladi. ",
    level: "oddiy",
  },

  {
    id: 19,
    title: " <i>setTimeout</i> dan qanday foydalanish kerak ?",
    text: "JavaScript tilida setTimeout funksiyasi belgilangan <b>vaqt o’tgandan</b> so’ng funksiyani bajarish uchun ishlatiladi. Ushbu funksiya faqat <b>bir marta</b> bajariladi",
    level: "oddiy",
  },

  {
    id: 20,
    title: "<i>Web Storage</i> nima ? Qanday turdagi storagelar mavjud?",
    text: "Web Storage - bu brauzerda ma'lumotni saqlash uchun ishlatiladigan bir texnologiya. Ular brauzerda foydalanuvchilarning ma'lumotlarini saqlash uchun xizmat qiladi va ular brauzer yopilsa ham saqlanadi. <br /> Web Storage ning ikkita turi mavjud: <b>Local Storage</b> va <b>Session Storage</b> ",
    level: "qiyin",
  },

  {
    id: 21,
    title: "<i>Session storage</i> va <i>Local storage</i>ni farqi nimada?",
    text: "sessionStorage va localStorage ikkala turdagi Web Storage hisoblanadi, lekin ularning asosiy farqi <b>ma’lumotlarni saqlashda</b>. <br /> <br /> sessionStorage faqatgina <b>joriy brauzer oynasi</b> (yoki tab) uchun mavjud, ammo localStorage <b>barcha oynalar</b> uchun ham mavjud. Bu degani, agar siz localStorage’da ma’lumot saqlasangiz, shu ma’lumotni brauzer oynalarining barchasida ko’rishingiz mumkin. Ammo, agar siz sessionStorage’da ma’lumot saqlasangiz, shu ma’lumotni faqatgina shu oynada ko’rishingiz mumkin.",
    level: "qiyin",
  },

  {
    id: 22,
    title: "JavaScript <i>single threaded</i>  yoki  <i>multi-threaded</i> ?",
    text: "JavaScript <b>single-threaded</b> dasturlash tili hisoblanadi. Bu degani, JavaScriptda bir vaqtning o’zida faqat <i>bitta vazifani bajarishi</i> mumkin.",
    level: "qiyin",
  },
  {
    id: 23,
    title: "Qaysi yo'llar bilan <i>asinxron</i> kod yozishimiz mumkin?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 24,
    title: "<i>Splice (array method)</i> — ning vazifasi nima ?",
    text: "<b>splice() </b> —  metodi massiv elementlarini <i>qo’shish</i>, <i>o’chirish</i> yoki <i>almashtirish</i> uchun ishlatiladi.",
    level: "oddiy",
  },

  {
    id: 25,
    title: "<i>Promise</i>larni asosiy statelari qaysilar?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 26,
    title: "<i>Promise chain</i>ing nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 27,
    title: "null == 0 nimaga teng ?",
    text: " <b>javob:</b> false ",
    level: "oddiy",
  },

  {
    id: 28,
    title: "<i>Callback hell</i> nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 29,
    title:
      "<i>Promise.race</i> va <i>Promise.all</i> metodlarining farqi nimada?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 30,
    title: "JavaScript <i>compiled</i> yoki <i>interpreted</i> tilmi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 31,
    title: "<i>IIFE</i> nima?",
    text: "IIFE - Immediately Invoked Function Expression yani e'lon qilinishi bilan ishga tushadigan funksiya. Ko'proq global scopedan qochish uchun ishlatiladi.",
    level: "o'rta",
  },

  {
    id: 32,
    title: "<i>Clean Code</i> yozish deganda nimani tushunasiz?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 33,
    title:
      "<i>Hoisting</i> nima? <i>Variable hoisting</i> va <i>function hoisting</i> qanday ishlaydi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 34,
    title:
      "<i>Obyekt</i> hususiyatlarini qanday qilib o'zgarmas qilishimiz mumkin?",
    text: "JavaScriptda obyektning hususiyatlari o’zgarmas qilish uchun <b>Object.defineProperty</b> yoki <b>Object.defineProperties</b> metodlaridan foydalanish mumkin. Bu metodlar obyektning hususiyatlarini  o’zgartirish imkoniyatini cheklash uchun ishlatiladi. <br> Agar siz obyektning barcha hususiyatlarini o’zgarmas qilmoqchi bo’lsangiz,<b> Object.freeze</b> metodi yordamida buni amalga oshirishingiz mumkin: ",
    level: "oddiy",
  },

  {
    id: 35,
    title:
      "<i>Const</i> yordamida yasalgan obyektni o'zgartirish imkoni bormi?",
    text: "Ha bor.",
    level: "oddiy",
  },

  {
    id: 36,
    title: "<i>Event delegation </i> nima ?",
    text: "<b>Event delegation</b> - bu texnika. Biz hodisani boshqarishni ota elmentga beramiz. Biz alohida elmentlarga <i>addEventListener</i> bermaymiz va bu royxat lar bilan ishlaganda juda qulaylik beradi.",
    level: "oddiy",
  },

  {
    id: 37,
    title: "<i>Hoisting</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 38,
    title: "<i>TDZ</i> (Tempororal dead zone) nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 39,
    title:
      "<i>Obyektlar</i> qanday ishlaydi ? <i>Primitive</i> qiymatlardan nima farqi bor ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 40,
    title: "<i>Garbage collection</i> vazifasi va maqsadi nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 41,
    title: "<i>this</i> kalit so’zi nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 42,
    title: "<i>call</i>, <i>apply</i> va <i>bind</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 43,
    title: "<i>Map</i>, <i>Set</i>, <i>WeakMap</i> va <i>WeakSet</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "qiyin",
  },

  {
    id: 44,
    title: "<i>Type coercion</i> va <i>type conversion</i> farqi nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 45,
    title: "<i>Operatorlar</i> turlari haqida gapiring.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 46,
    title: "<i>Oddiy</i> va <i>chiziqli</i> funksiyalar farqi nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 47,
    title: "<i>Optional chaining</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 48,
    title: "Tagged template literals (tagged strings) nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 49,
    title: "<i>Constructor</i> functions nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "o'rta",
  },

  {
    id: 50,
    title:
      "Nechta <i>Array metodlarini</i> bilasiz ? <i>Reduce</i> va <i>map</i> farqi va ishlashi qanday",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 51,
    title: "<i>Destructuring assignment</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 52,
    title: "<i>Pure</i> va <i>impure</i> funksiya nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 53,
    title: "<i>First-class functions</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 54,
    title: "<i>Higher-order functions</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 55,
    title: "<i>Currying</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 56,
    title: "<i>Logical Operation</i> haqida aytib bering.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 57,
    title: "<i>Ternary operator</i> haqida aytib bering.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 58,
    title: "<i>Nullish</i> operator nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 59,
    title: "<i>for loop</i>  nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 60,
    title: "<i>Math objecti</i> haqida aytib bering.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 61,
    title: "<i>Distructure</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 62,
    title: "<i>Scope</i> nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 63,
    title: "Nega <i>var</i> bugungi kunda kam ishlatiladi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 64,
    title: "<i>setTimeout</i> qanday ishlaydi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 65,
    title: "<i>this</i> qaysi holatlarda <i>undefined</i> bo'lib qoladi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 66,
    title: "<i>prototype</i> vs <i>proto</i> farqi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 67,
    title: "Nimaga <i>curry function</i> kerak?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 68,
    title: "<i>DOM</i> haqida aytib bering.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 69,
    title: "<i>Range</i> nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 70,
    title: "<i>Event loop</i> nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 71,
    title: "<i>Currying</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 72,
    title: "<i>Blob</i> nima?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 73,
    title: "<i>fetch</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 74,
    title: "<i>LocalStorage</i> haqida aytib bering.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 75,
    title: "<i>if else</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 76,
    title: "<i>Mantiqiy operatorlar</i> haqida aytib bering.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 77,
    title: "<i>true === 'true'</i>",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 78,
    title:
      "Qaysi <i>string metodi</i>  matn boshida va oxiridagi bo'sh joylarni olib tashlaydi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 79,
    title:
      "Qaysi <i>array</i> metodi massivning <i>oxirgi elementi</i>ni olib tashlaydi va uning qiymatini qaytarad?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 80,
    title: "<i>1+2+'3'</i>",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 81,
    title: "<i>true === 'true'</i>",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 82,
    title: "<i>NaN</i> nima ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 83,
    title: "<i>Console</i> haqida aytib bering.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 84,
    title: "<i>this === window</i>",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 85,
    title:
      "Agar <i>getElementById</i> bilan tanlangan element topilmasa, u nima qaytaradi?  ",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 86,
    title:
      "Agar <i>querySelectorAll</i> bilan tanlangan element topilsa, u nima qaytaradi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 87,
    title:
      "Agar <i>querySelector</i> bilan tanlangan element topilsa, u nima qaytaradi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 88,
    title:
      "<i>DOM</i> , Qanday qilib elementdan bitta keyingi elementni tanlab olish mumkin?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 89,
    title:
      "<i>DOM</i> , Qanday qilib elementdan bitta oldingi elementni tanlab olish mumkin?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 90,
    title:
      "Agar <i>getElementsByTagName</i> bilan tanlangan element topilsa, u nima qaytaradi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 91,
    title:
      "Agar <i>getElementsByClassName</i> bilan tanlangan element topilmasa, u nima qaytaradi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 92,
    title:
      "JavaScript dasturlashda  <i>kodning qiyinchilik</i> yuzaga kelishi va boshqarilishi qiyin bo'lgan holat nima deb nomlanadi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 93,
    title:
      "Qaysi javascript metodi <i>Promiseni</i> muvaffaqiyatli yakunlaganida (fulfilled) ishga tushiriladi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 94,
    title:
      "Qaysi javascript metodi <i>Promiseni</i> xato (rejected) holatda ishga tushiriladi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 95,
    title: "<i>Intervalli</i> taymerni to'xtatish funktsiyasi qaysi?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 96,
    title: "Javascriptdagi <i>**</i> operatori vazifasi.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 97,
    title: "<i>isNaN('abs_javaScript')</i> ",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 98,
    title: "<i>100</i> gacha bo'lgan raqamlardan <i>random</i> qiling.",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 99,
    title: "<i>true + ('true' - 0)</i> ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },

  {
    id: 100,
    title: "<i>Matn</i> - qanday data type hisoblanadi ?",
    text: "Maqul javobni bilsangiz adminga yuborishingiz mumkin.",
    level: "oddiy",
  },
];
