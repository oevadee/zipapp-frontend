import { appUrl } from ".";

export const publicRoutes = ["/signin", "/signup"].map((url) => appUrl + url);

export const protectedRoutes = ["/", "/profile"].map((url) => appUrl + url);
