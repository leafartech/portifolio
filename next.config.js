module.exports = {
    async rewrites() {
      return [
        {
          source: '/rotas/:slug*',
          destination: '/rotas/[slug]',
        },
      ];
    },
  };