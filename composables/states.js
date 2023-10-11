export const useAuthenticated = () => useState("isAuthenticated", () => false);

export const useUserInfo = () => useState("userInfo", () => null);

export const useTabs = () =>
  useState("tabs", () => [
    {
      name: "Активные",
      count: 19,
      link: "active",
    },
    {
      name: "Ожидающие",
      count: 19,
      link: "pending",
    },
    {
      name: "Неоплаченные",
      count: 19,
      link: "not-paid",
    },
    {
      name: "Неактивные",
      count: 19,
      link: "not-active",
    },
    {
      name: "Отклоненные",
      count: 19,
      link: "rejected",
    },
  ]);
