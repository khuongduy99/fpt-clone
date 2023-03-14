export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const clearAccessTokenToLocalStorage = () =>
  localStorage.removeItem("accessToken");
export const getAccessTokenToLocalStorage = () =>
  localStorage.getItem("accessToken");
