const path = require("path");
const autoprefixer = require('autoprefixer');

function resolve(dir) {
	return path.join(__dirname, "..", dir);
}

module.exports = {
  "stories": [
    "../packages/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "webpackFinal": (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.less$/,
				use: [
				  "style-loader",
					"css-loader",
          {
              loader: 'postcss-loader',
              options: {
                  postcssOptions: {
                      plugins: [autoprefixer()]
                  }
              }
          },
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true,
							// modules: true,
							// localIndexName: "[name]__[local]___[hash:base64:5]",
							// modifyVars: {
							// 	hack: "true; @import \"~@tntd/antd-cover/tnt.less\";"
							// }
						}
					}
				]
      }
    ];
    return config;
  }
}