# AJAX

### 概念：AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。
-	AJAX = 异步 JavaScript 和 XML。
-	AJAX 是一种用于创建快速动态网页的技术。
-	通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
-	传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。

## 步骤：
#### AJAX - 创建 XMLHttpRequest 对象
-	所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

```

    var xmlhttp;
    
    if (window.XMLHttpRequest){
	    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	    xmlhttp=new XMLHttpRequest();
    }
    else{
	    // IE6, IE5 浏览器执行代码
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

```
#### AJAX - 向服务器发送请求请求
    
    xmlhttp.open("GET","ajax_info.txt",true);
    xmlhttp.send();
    


![](https://i.imgur.com/lFQ7guE.png)


-	如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：    
    xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("fname=Henry&lname=Ford");

#### AJAX - 服务器 响应
-	responseText:	获得字符串形式的响应数据。
-	responseXML: 	获得 XML 形式的响应数据。

##### AJAX - onreadystatechange 事件
-	onreadystatechange 事件当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时，就会触发 onreadystatechange 事件。readyState 属性存有 XMLHttpRequest 的状态信息。

![](https://i.imgur.com/Bq8Nw53.png)

    xmlhttp.onreadystatechange=function() {
	    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	    	document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	    }
    }

![](https://i.imgur.com/GDLgIfO.png)



## jQuery.ajax()

    $.ajax({  
	     type: 'GET',  
	     url: "http://192.168.33.114:8080/UIDTraceAdmin/transportnode/pagelist/jsonp?callbackFunction=jsonpCallback",  
	     async: false,  
	     dataType: "jsonp",  
	     jsonp: "jsonpCallback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)  
	     success: function(o){},  
	     timeout:3000
    }).responseText;  

![](https://i.imgur.com/5FVQStI.png)