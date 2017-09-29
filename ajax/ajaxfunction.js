/*
    参数：
        method: get/post
        url
        data: 类似 ?username=leo&age=12
*/
function ajax( method , url , data , success) {
    var xhr
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    // 如果是get方法，且有 data
    if(method === 'get' && data) {
        url += '?' + data
    }

    xhr.open("GET",'getNews.php',true)
    if(method === 'get') {
        xhr.send()
    } else {
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        xhr.send(data)
    }

    xhr.onreadystatechange = function() {
        if( xhr.readyState === 4 && xhr.status === 200) {
            success && success( xhr.responseText )
        }
    }
}
