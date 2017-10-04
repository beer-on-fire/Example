# jsonp

-	Jsonp(JSON with Padding) 是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。
	-	script标签
	-	用script标签加载资源是没有跨域问题的


-	在资源加载进来之前定义好一个函数，这个函数接收一个参数（数据），函数里面利用这个参数做一些事情。然后需要的时候通过script标签加载对应远程文件资源，当远程的文件资源加载进来的时候，就会去执行我们之前定义好的函数，并且把这个函数的参数传进去


## 如何解决跨域问题?

- jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

- 如何解决跨域问题?

  * document.domain + iframe：要求主域名相同 //只能跨子域
  * JSONP(JSON with Padding)：response: callback(data) //只支持 GET 请求
  * 跨域资源共享CORS(XHR2)：Access-Control-Allow //兼容性 IE10+
  * 跨文档消息传输(HTML5)：postMessage + onmessage  //兼容性 IE8+
  * WebSocket(HTML5)：new WebSocket(url) + onmessage //兼容性 IE10+
  * 服务器端设置代理请求：服务器端不受同源策略限制