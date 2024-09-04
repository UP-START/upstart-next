/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.evbuc.com'], // Adicione outros domínios conforme necessário
  },
  env: {
    EVENTBRITE_API_KEY: process.env.EVENTBRITE_API_KEY,
  },
}

module.exports = nextConfig