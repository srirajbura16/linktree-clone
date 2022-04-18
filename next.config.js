module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/settings",
        destination: "/settings/profile",
        permanent: true,
      },
    ];
  },
};
