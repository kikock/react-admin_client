// 针对应用模块按需打包js(修改此配置文件需重启项目)
const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    //针对antd 实现按需打包 根据impot引用来打包(根据babel-plugin-import模块)
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, //自动打包相关的样式
    }),
    //使用less-loader模块 对源码less变量进行重新指定
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#00ffff'}, //antd 定制主题
    }),
);
