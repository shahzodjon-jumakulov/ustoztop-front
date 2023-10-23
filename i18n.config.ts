export default defineI18nConfig(() => ({
  legacy: false,
  locale: "uz",
  messages: {
    uz: {
      welcome: "Salom",
      sticky: {
        main: "Asosiy",
        category: "Kategoriyalar",
        post: "E‘lon",
        saved: "Saqlanganlar",
        profile: "Profil",
      },
      profile: {
        center: "O'quv muassasasi",
        tutor: "Repetitor",
        stats: "Profil statistikasi",
        myAds: "Mening e'lonlarim",
        wallet: "Hamyon",
        settings: "Profil sozlamalari",
        logout: "Chiqish",
      },
      currLang: "Sayt tili: O‘zbekcha",
      about: "Biz haqimizda",
      faq: "Savol-javob",
      login: {
        title: "Kirish",
        loginbtn: "Kirish",
        confirmPhone: "Telefon raqamingizni tasdiqlang",
        enterSms: "SMS kodni kiriting",
      },
      signup: {
        title: "Ro‘yxatdan o‘tish",
      },
      submit: "Tasdiqlash",
      categories: {
        select: "Kategoriyani tanlang",
        all: "Barcha kategoriyalar",
        allAnnouncements: "Barcha e’lonlar",
      },
      saved: {
        tabs: ["Saqlangan e‘lonlar", "Yaqinda ko‘rilganlar"],
      },
      terms: {
        title: "Ustoztop.uz xizmati qoidalari",
        tabs: ["Foydalanish shartlari", "Maxfiylik siyosati"],
      },
      faqPage: {
        title: "Ko‘p so‘raladigan savollar",
      },
      myAds: ["Faol", "Kutilmoqda", "To'lanmagan", "Faol emas", "Rad etilgan"],
      adButton: {
        edit: "Tahrirlash",
        delete: "O‘chirish",
        deactivate: "Faolsizlantirish",
        activate: "Faollashtirish",
        promote: "TOPga joylash",
      },
      myWallet: ["Hamyon", "To‘lovlar tarixi", "Xizmatlar"],
      filter: {
        for: {
          title: "Kim uchun",
          options: [
            "Farqi yo'q",
            "Maktabgacha yoshdagi bolalar",
            "O'quvchilar",
            "Abituriyentlar",
            "Studentlar",
            "Kattalar",
          ],
        },
        tutor: {
          title: "Kim o'rgatadi",
          options: [
            "Farqi yo'q",
            "Erkak",
            "Ayol",
          ],
        },
        format: {
          title: "Darslar o'tkaziladigan joy",
          options: [
            "Farqi yo'q",
            "O'quvchinikida",
            "O'qituvchinikida",
            "Online",
          ],
        },
        group: {
          title: "Dars turi",
          options: [
            "Farqi yo'q",
            "Guruh",
            "Individual",
          ],
        },
        lang: {
          title: "Dars tili",
          options: [
            "Farqi yo'q",
            "O'zbek tili",
            "Rus tili",
            "Ingliz tili",
          ],
        },
      },
    },
    ru: {
      welcome: "Привет",
      sticky: {
        main: "Главная",
        category: "Категории",
        post: "Разместить",
        saved: "Избранное",
        profile: "Профиль",
      },
      profile: {
        center: "Учебное заведение",
        tutor: "Репетитор",
        stats: "Статистика профиля",
        myAds: "Мои объявления",
        wallet: "Кошелёк",
        settings: "Настройки профиля",
        logout: "Выйти",
      },
      currLang: "Язык сайта: Русский ",
      about: "О сервисе",
      faq: "Вопрос-ответ",
      login: {
        title: "Вход",
        loginbtn: "Войти",
        confirmPhone: "Подтвердите номер телефона",
        enterSms: "Введите код из СМС",
      },
      signup: {
        title: "Регистрация",
      },
      submit: "Подтвердить",
      categories: {
        select: "Выберите категорию",
        all: "Все категории",
        allAnnouncements: "Все объявления",
      },
      saved: {
        tabs: ["Избранные объявления", "Недавно просмотренные"],
      },
      terms: {
        title: "Правила сервиса ustoztop.uz",
        tabs: ["Условия использования", "Политика конфиденциальности"],
      },
      faqPage: {
        title: "Ko‘p so‘raladigan savollar",
      },
      myAds: [
        "Активные",
        "Ожидающие",
        "Неоплаченные",
        "Неактивные",
        "Отклоненные",
      ],
      adButton: {
        edit: "Редактировать",
        delete: "Удалить",
        deactivate: "Деактивировать",
        activate: "Активировать",
        promote: "Разместить в ТОП",
      },
      myWallet: ["Кошелёк", "История операций", "Услуги"],
      filter: {
        for: {
          title: "Для кого",
          options: [
            "Без разницы",
            "Дошкольники",
            "Школьники",
            "Абитуриенты",
            "Студенты",
            "Взрослые",
          ],
        },
        tutor: {
          title: "Кто преподает",
          options: [
            "Без разницы",
            "Мужчина",
            "Женщина",
          ],
        },
        format: {
          title: "Место занятий",
          options: [
            "Без разницы",
            "У ученика",
            "У репетитора",
            "Онлайн",
          ],
        },
        group: {
          title: "Тип занятий",
          options: [
            "Без разницы",
            "Групповые",
            "Индивидуальные",
          ],
        },
        lang: {
          title: "Язык занятий",
          options: [
            "Без разницы",
            "Узбекский",
            "Русский",
            "Английский",
          ],
        },
      },
    },
  },
}));
