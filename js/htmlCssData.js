// data start
let dataQuestion = [
    {
        id: 1,
        title: "HTML nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 2,
        title: "HTMLda DOCTYPE nimani anglatadi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 3,
        title: "<b><i>meta </i> </b> tegining maqsadi nimada?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 4,
        title: "HTML va XHTML o'rtasidagi farq nimada?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 5,
        title: "Semantik HTML nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 6,
        title: "<b><i>div </i> </b> va <b><i>span </i> </b> o'rtasidagi farqni tavsiflang.",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 7,
        title: "<b><i>canvas </i> </b> elementidan foydalanishni tushuntiring.",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 8,
        title: "HTML5dagi ma'lumot atributlari nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 9,
        title: "<b><i>img </i> </b> tegidagi alt atributi qanday maqsadda ishlatiladi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 10,
        title: "HTMLda gipermurojaatni qanday yaratish mumkin?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 11,
        title: "HTMLda <b><i>head </i> </b> tegi qanday maqsadda ishlatiladi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 12,
        title: "<b><i>ol </i> </b> va <b><i>ul </i> </b> elementlari o'rtasidagi farqni tushuntiring.",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 13,
        title: "HTMLda lang atributining ahamiyati nimada?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 14,
        title: "HTMLda <b><i>form </i> </b> elementining maqsadi nimada?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },

    {
        id: 15,
        title: "HTML formalarida target atributi qanday ishlaydi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "oddiy"    },



    {
        id: 16,
        title: "<i>CSS </i> nima va u nimani anglatadi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 17,
        title: "<i>Inline </i>, <i>block </i> va <i>inline-block </i> elementlari o'rtasidagi farqni tushuntiring.",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 18,
        title: "<i>CSS </i>da <i>box model </i>ni tavsiflang.",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 19,
        title: "<i>CSS </i>da <i>clear </i> xususiyatining maqsadi nimada?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 20,
        title: "<i>position: relative; </i> va <i>position: absolute; </i> o'rtasidagi farqni tushuntiring.",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 21,
        title: "<i>CSS selektori </i>ning <i>aniqlovchiligi </i> nima va u qanday hisoblanadi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 22,
        title: "<i>CSS </i> yordamida elementni <i>gorizontal </i> va <i>vertikal </i> ravishda qanday markazlash mumkin?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 23,
        title: "<i>CSS </i>da <i>float </i> xususiyatining maqsadi nimada?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 24,
        title: "<i>Padding </i> va <i>margin </i> o'rtasidagi farqni tavsiflang.",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 25,
        title: "<i>display: none; </i> xususiyati <i>visibility: hidden; </i> dan qanday farq qiladi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 26,
        title: "<i>CSS oldindan ishlovchi (preprocessor) </i> nima va uni nima uchun ishlatish mumkin?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 27,
        title: "<i>CSS </i>da <i>box-sizing </i> xususiyati nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 28,
        title: "<i>Tashqi css </i> fayllarni <i>HTML </i>ga qanday kiritish mumkin?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 29,
        title: "<i>CSS </i>da <i>em </i> va <i>rem </i> o'lchov birligi o'rtasidagi farq nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },

    {
        id: 30,
        title: "<i>CSS </i>da <i>z-index </i> xususiyati qanday ishlaydi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "o'rta"    },


    {
        id: 31,
        title: "<i>JavaScript</i> nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 32,
        title: "<i>JavaScriptda</i> let, const, va var o'rtasidagi farqni tushuntiring.",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 33,
        title: "<i>JavaScriptda</i> hoisting (ko'tarilish) jarayonini tavsiflang.",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 34,
        title: "<i>JavaScriptda</i> this kalit so'zi qanday maqsadda ishlatiladi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 35,
        title: "<i>JavaScriptda</i> yopiq (closures) nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 36,
        title: "<i>JavaScriptda</i> prototip meros qabul qilish tushunchasini tushuntiring.",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 37,
        title: "<i>JavaScriptda</i> hodisalar delegatsiyasi qanday ishlaydi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 38,
        title: "<i>JavaScriptda</i> == va === o'rtasidagi farqni tavsiflang.",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 39,
        title: "<i>JavaScriptda</i> async kalit so'zi qanday maqsadda ishlatiladi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 40,
        title: "<i>JavaScriptda</i> xatolarni qanday qilib boshqarish mumkin?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 41,
        title: "<i>Callback</i> funksiyalari tushunchasini tushuntiring.",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 42,
        title: "<i>JavaScriptda</i> null va undefined o'rtasidagi farq nima?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 43,
        title: "<i>JavaScriptda</i> bind metodining roli nimada?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 44,
        title: "<i>JavaScriptda</i> map funksiyasi qanday maqsadda ishlatiladi?",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

    {
        id: 45,
        title: "<i>JavaScriptda</i> va'dalar (promises) tushunchasini tavsiflang.",
        text: "Hali javoblar yoylanmadi :)",
        level: "qiyin"
    },

];
