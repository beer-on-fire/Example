# json

-	JSON 是存储和交换文本信息的语法。类似 XML。
-	JSON 比 XML 更小、更快，更易解析。

### 与 XML 相同之处
-	JSON 是纯文本
-	JSON 具有"自我描述性"（人类可读）
-	JSON 具有层级结构（值中存在值）
-	JSON 可通过 JavaScript 进行解析
-	JSON 数据可使用 AJAX 进行传输
### 与 XML 不同之处
-	没有结束标签
-	更短
-	读写的速度更快
-	能够使用内建的 JavaScript eval() 方法进行解析
-	使用数组
-	不使用保留字

## JSON.parse()
-	JSON 通常用于与服务端交换数据。
-	在接收服务器数据时一般是字符串。
-	我们可以使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

## JSON.stringify()
-	JSON 通常用于与服务端交换数据。
-	在向服务器发送数据时一般是字符串。
-	我们可以使用 JSON.stringify() 方法将 JavaScript 对象转换为字符串


# Jsonp(JSON with Padding) 
-	是 json 的一种"使用模式"，可以让网页从别的域名（网站）那获取资料，即跨域读取数据。
-	JSONP也叫填充式JSON,是应用JSON的一种新方法,只不过是被包含在函数调用中的JSON,例如: callback({"name","trigkit4"});

JSONP由两部分组成：回调函数和数据：
	-	回调函数是当响应到来时应该在页面中调用的函数,
	-	数据就是传入回调函数中的JSON数据。

### 在js中,我们直接用XMLHttpRequest请求不同域上的数据时,是不可以的。但是,在页面上引入不同域上的js脚本文件却是可以的,jsonp正是利用这个特性来实现的。例如：
	<script type="text/javascript">     
		function dosomething(jsondata){         
			//处理获得的json数据     
		}
	</script>
	<script src="http://example.com/data.php？callback=dosomething"></script>

js文件载入成功后会执行我们在url参数中指定的函数,并且会把我们需要的json数据作为参数传入。
所以jsonp是需要服务器端的页面进行相应的配合的。

	<？php
		$callback = $_GET['callback'];//得到回调函数名
		$data = array('a','b','c');//要返回的数据
		echo $callback.'('.json_encode($data).')';//输出
	？>

最终,输出结果为：dosomething(['a','b','c']);


	JSONP的优点是：
		1、它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；
		2、它的兼容性更好,在更加古老的浏览器中都可以运行,不需要XMLHttpRequest或ActiveX的支持；
		3、并且在请求完毕后可以通过调用callback的方式回传结果。

	JSONP的缺点则是：
		1、它只支持GET请求而不支持POST等其它类型的HTTP请求；
		2、它只支持跨域HTTP请求这种情况,不能解决不同域的两个页面之间如何进行JavaScript调用的问题。