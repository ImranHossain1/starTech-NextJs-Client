export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/pc-builder", "/product/:path*", "/create-product"],
};
