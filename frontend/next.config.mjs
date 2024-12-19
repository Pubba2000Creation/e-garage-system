// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin/dashboard', // Redirect to login page
        permanent: false, // Temporary redirect (302)
      },
    ]
  },
}

export default nextConfig
