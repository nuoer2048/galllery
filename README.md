# galllery
a photo created by reactJS
这个项目时根据mooc上面Materliu老师学习的，利用yeoman来构建项目的，利用的时webpack构造器，版本时3.3.4，在使用yeoman之前，要确保你本机电脑上面安装了node
这个可以自行百度，然后在控制台上:npm install -g yo;查看版本:yo -version,然后下载webpack可以去官网查看下载方式，然后就是构建项目，在你想要存放的目录下执行
命令：yo react-webpack（构造器的名字） galllery(项目名字)
项目构建完成以后，需要根据自己的需要选择下载css前缀插件，
可以利用css前缀处理器，来处理不同浏览器厂商问题，webpack3.左右，添加前缀器的步骤是
1:npm install --save-dev css-loader style-loader
2:然后下载npm install --save-dev sass-loader node-sass postcss-loader autoprefixer postcss
3：webpack3.版本左右，需要在项目的根目录添加一个postcss.json.js文件，具体内容是
module.exports = {
    plugins: [
        require('postcss-import'), //需要安装 npm install postcss-import --save-dev,这句代码是会对一个js文件里面import进来的多个css放在同一个style里面，如果是多个文件引入就会生成多个
        require('autoprefixer')({
            broswers: ['>1%', 'last 5 versions', 'Firefox ESR', 'not ie < 9']
        })
    ]
}
配置工作已经完成了，推荐看https://www.imooc.com/video/11778老师的视频，不过由于版本的原因，在开发过程中，你需要自己修改一些代码，以及配置，百度都知道
