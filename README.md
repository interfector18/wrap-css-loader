# wrap-css-loader
[CSS Wrap](https://github.com/benignware/css-wrap) Loader for webpack

Uses [loader-utils](https://github.com/webpack/loader-utils).getOptions() to get the options, hence avoids any depreciation warnings related to parseQuery()

## Usage

##### Basic Usage
```javascript
module.exports = {
  /* webpack config */
  module: {
    loaders: [{
     test: /\.css$/,
      loader: "wrap-css-loader",
      options: {
        selector: "namespace"
      }
    },
    //other loaders
  ]},
}
```

#### Example with a typical webpack config using babel-loader, sass-loader and extract text plugin

```javascript
module.exports = {
  /* Webpack config */
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract({
        use: [
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "wrap-css-loader",
            options: {
              selector: config.namespace
            }
          },          
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      })
    },
  ]},
  
plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
}
```
