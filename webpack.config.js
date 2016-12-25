module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {
          presets:['react', 'es2015', 'stage-1'],
        } }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
  }
}
