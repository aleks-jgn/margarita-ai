
//import type { NextConfig } from "next";

//const nextConfig: NextConfig = {
  /* config options here */
//};

//export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Игнорирование ошибок TypeScript при сборке (для быстрого деплоя)
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true, // добавляет `/` в конце URL (удобно для некоторых хостингов)
};

export default nextConfig;