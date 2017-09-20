/**
 * @Author: lonely_Arrow
 * @Date:   20-Sep-2017
 * @Email:  li997477295@outlook.com
 * @Last modified by:
 * @Last modified time: 20-Sep-2017
 */

var express = require('express')
var app = express()
//  拿到data.json的数据
var appData = require('./data.json')
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;


// 定义模板引擎swig
var swig = require('swig');
swig.setDefaults({cache: false});//设置swig页面不缓存


app.set('views', './view'); // 指定模板文件存放位置,我将所以的模板文件存在在views文件夹
app.set('view engine', 'html');// 将模板引擎换成html
app.engine('html', swig.renderFile); // 注册html模板引擎


//  将express.static作为一个中间件,意思是在public中去加载静态文件,public位于与当前文件相同目录级
app.use(express.static('public'));
//  app.use('/public/a', express.static('static'));如果访问 /public/a/css/index.css这个url，那么就会使用后面的 static 替换 /public/a，变成了 static/css/index.css，然后根据这个地址再去读取文件，把读取到的文件内容返回给浏览器



app.get('/',function(req,res){
    // 渲染view文件夹中index.html模板，由于前面已经设置了模板引擎为swig，所以这里可以不加后缀名
    res.render('index',{ title: ['seller','goods','ratings'], message: '你好啊！'})
});

app.get('/seller', (req, res) => {
    res.json({
        errno: 0,
        data: seller
    });
});

app.get('/goods', (req, res) => {
    res.json({
        errno: 0,
        data: goods
    });
});

app.get('/ratings', (req, res) => {
    res.json({
        errno: 0,
        data: ratings
    });
});


app.listen(3000,function(){
    console.log('reading');
});
