import jwtDecode from "jwt-decode";

export const decodeJwtToken = <T>(token: string) => {
  const decoded = jwtDecode<T>(token);
  return decoded;
};
