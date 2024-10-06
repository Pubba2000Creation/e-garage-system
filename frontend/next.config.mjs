// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',               // Root URL
                destination: '/user/home', // Redirect to /user/home, not /home
                permanent: true,           // True for permanent (301), false for temporary (302)
            },
        ];
    },
};

export default nextConfig;
