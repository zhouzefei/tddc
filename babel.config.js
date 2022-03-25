module.exports = {
  presets: [
    '@babel/env',
    '@babel/preset-react'
  ],
  plugins: [
    [
      "import", 
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      },
      "antd"
    ],
    [
      '@babel/plugin-proposal-optional-chaining',
      {
        loose: true,
      },
    ]
  ]
};
