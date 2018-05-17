var http = require('http    ')
var qs = require('querystring')

var postData = qs.stringify({
    'content': '红红火火恍恍惚惚',
    'cid': 348
})

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en-US;q=0.7,en;q=0.6',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=ea37b16a-b5dc-4cf2-a4a1-2fabd4d586ca; imooc_isnew_ct=1525225273; imooc_isnew=2; IMCDNS=0; loginstate=1; apsid=EzYWM3YzkyZjZjNTg0MDQ4MzU4ZDJhNDIyYzAwNjUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTY5NTUzMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADM0YzNkNmJjZWYxNDMxN2RhMDgxZTdiM2MyOTIyNTI4Hs37Wh7N%2B1o%3DZj; PHPSESSID=quf86ke7eab6ifmkj6l5ftp644; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1526450113,1526450361,1526519547,1526519726; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1526523049; cvde=5afcd7afcaabb-32',
        'Host': 'www.imooc.com',
        'Origin':' https://www.imooc.com',
        'Referer': 'https://www.imooc.com/qa/348/t/0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options,function(res) {
    console.log('Status: ' + res.statusCode);
    console.log('Headers: ' + JSON.stringify(res.headers));
    res.on('data',function(chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof trunk);
    })
    res.on('end',function() {
        console.log('评论完毕');
    })
})

req.on('error',function(e) {
    console.log('Error' + e.message);
})

req.write(postData)

req.end()
