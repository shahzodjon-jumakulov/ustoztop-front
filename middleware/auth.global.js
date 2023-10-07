export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("token");
  const authenticated = useAuthenticated();

  // check if token exists
  if (token.value) {
    // update the state to authenticated
    authenticated.value = true;
  }
  // const toName = to.name.slice(0, -5);
  // if (!token.value && toName == "profile") {
  //   abortNavigation();
  //   if (to.name.slice(-2) == "ru") {
  //     return navigateTo("/ru");
  //   } else if (to.name.slice(-2) == "en") {
  //     return navigateTo("/en");
  //   } else {
  //     return navigateTo("/");
  //   }
  // }
});
