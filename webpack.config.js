module.exports = {
    entry: './src/js/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            }
        ]
        },
        resolve: {
        extensions: ['*', '.js']
        },
    devServer: {
      contentBase: './dist'
    }
  };