/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "s.gravatar.com"],
  },
  transpilePackages: ["@authy/data-persistance"],
};

export default nextConfig;
