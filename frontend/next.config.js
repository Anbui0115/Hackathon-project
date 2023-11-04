/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/"
      }
    ]
  },
  rewrites: async () => {
    return [
      {
        source: '/api/chatbot/routes',
        destination: '/api/chatbot/routes',  // Pointing to the same path, so it won't be redirected elsewhere
      },
      {
        source: '/api/:path*',
        destination:
        process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5000/api/:path*' // This just takes any path
            : '/api/',
      },
    ]
  },
}

module.exports = nextConfig

