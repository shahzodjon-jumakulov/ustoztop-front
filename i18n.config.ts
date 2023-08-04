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
      currLang: "Sayt tili: O‘zbekcha",
      about: "Biz haqimizda",
      faq: "Savol-javob",
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
      currLang: "Язык сайта: Русский ",
      about: "О сервисе",
      faq: "Вопрос-ответ",
    },
  },
}));
