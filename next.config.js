module.exports = {
  webpack: (config, { webpack }) => {
    const newConfig = {
      ...config,
      module: {
        rules: [
          ...config.module.rules,
          {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|jpeg)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]',
              },
            },
          },
        ],
      },
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };

    return newConfig;
  },
};
