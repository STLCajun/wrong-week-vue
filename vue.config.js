require("dotenv").config();

const webpack = require("webpack");

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        LAMBDA_ENDPOINT: JSON.stringify(process.env.LAMBDA_ENDPOINT)
      })
    ]
  }
};
