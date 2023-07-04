module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'WhiteboardToolbarButton.js',
        library: 'WhiteboardToolbarButton',
        libraryTarget: 'umd',
        publicPath: '/static/',
        globalObject: 'this',
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts']
    },
    // rest of your webpack config
}
