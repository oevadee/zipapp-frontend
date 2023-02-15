import { appUrl } from ".";

export const publicRoutes = ["/signin", "/signup"].map((url) => appUrl + url);
