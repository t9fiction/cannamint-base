/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes wallet connect dependency issue
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  output: 'export', // Moved outside of module.exports
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;