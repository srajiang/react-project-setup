# react-project-setup

### Simple starter setups for 
  * A React app w/ webpack
  * A React app using react-scripts
  
### Notes
  * `npm run start`
  * `npm i` - to install dependencies
  * `open index.html with live-server` to open in local environment

### Other Resources: 
  * [Webpack Documentation](https://webpack.js.org/concepts/)
  * Webpack.config.js config file 
  ``` 
const path = require('path');  // node module for accessing file paths

module.exports = { 
  entry: './src/index.js',     // which module webpack should use to begin building out its internal dependency graph
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'     
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: { 
          loader: 'babel-loader', 
          query: {
          presets: ['@babel/env', '@babel/react']
        }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  devtool: 'inline-source-map'
}
```
