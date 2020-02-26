const {override, fixBabelImports} = require('customize-cra');
//针对引用样式打包(只打包引入的样式) ,使用babel-plugin-import实现ls
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
