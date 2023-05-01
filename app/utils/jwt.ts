import jwtDecode, { JwtPayload } from "jwt-decode";

export const decodeJwtToken = <T>(token: string) => {
  const decoded = jwtDecode<T>(token);
  return decoded;
};

export const validateAccessToken = (token: string) => {
  const decoded = jwtDecode<JwtPayload>(token);
  if (decoded.exp) {
    const expirationDate = new Date(decoded.exp * 1000);
    const currentDate = new Date();
    return expirationDate > currentDate;
  }
  return false;
};
