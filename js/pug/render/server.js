var http = require('http');
var pug = require('pug');

http.createServer(function(req,res) {
    res.writeHead(200,{
        'Content-Type': 'text/html'
    })
    // 1. compile
    // var fn = pug.compile('div #{course}',{})
    // var html = fn({course: 'pug'})


    // 2.render
    // var html = pug.render('div #{course}',{course: 'pug render'})


    // 3. pug.renderFile
    var html = pug.renderFile('./../five.pug',{course: 'Pug renderFile',pretty: true})


    res.end(html )
}).listen(1337,'localhost',function() {
    console.log('success');
});
