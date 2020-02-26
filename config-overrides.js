// 针对应用模块按需打包
const {override, fixBabelImports} = require('customize-cra');

module.exports = override(
    //针对antd 实现按需打包 根据impot引用来打包(根据babel-plugin-import模块)
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
