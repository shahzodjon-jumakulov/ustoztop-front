export const useAuthUser = async ({ phone_number, password }, lang) => {
  const config = useRuntimeConfig();
  const isAuthenticated = useAuthenticated();
  const userInfo = useUserInfo();
  const returnVal = ref(false);

  const body = {
    phone_number: phone_number,
    password: password,
  };

  await useMyFetch(`/api/users/login/`, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => {
      console.log(res);
      if (res.data.value) {
        console.log(res.data.value);
        const token = useCookie("token");
        const refresh = useCookie("refresh");
        token.value = res.data.value.access; // set access token to cookie
        refresh.value = res.data.value.refresh; // set refresh token to cookie
        isAuthenticated.value = true; // set authenticated  state value to true
        userInfo.value = res.data.value.user;

        returnVal.value = true;
      } else {
        returnVal.value = false;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return returnVal.value;
};

export const useLogOut = () => {
  const token = useCookie("token");
  const refresh = useCookie("refresh");
  const isAuthenticated = useAuthenticated();

  token.value = null; // clear the access token cookie
  refresh.value = null; // clear the refresh token cookie
  isAuthenticated.value = false; // set authenticated state value to false
};

export const useRefreshToken = async (lang) => {
  const config = useRuntimeConfig();
  const refresh = useCookie("refresh");
  const token = useCookie("token");
  const isAuthenticated = useAuthenticated();
  const body = {
    refresh_token: refresh.value,
  };

  await useFetch(`${lang}/api/v1/accounts/token/refresh/`, {
    baseURL: config.public.BASE_URL,
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: "Bearer " + token.value,
    },
  }).then((res) => {
    if (res.data.value) {
      token.value = res.data.value.access_token;
      isAuthenticated.value = true;
      console.log("refreshed");
    }
    if (res.error.value) {
      useLogOut();
      useUserInfo().value = null;
    }
  });
};

export const usePersonalData = async (lang) => {
  const config = useRuntimeConfig();
  const userInfo = useUserInfo();

  const { data, error } = await useMyFetch("/api/users/me/?format=json", {
    headers: {
      Authorization: `Bearer ${useCookie("token").value}`,
    },
  });
    if (error.value && error.value.statusCode == 401) {
      console.log("error 401");
    //   useRefreshToken(lang);
    } else if (data.value) {
      userInfo.value = data.value;
    }
};
