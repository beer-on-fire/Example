// {
//     let ajax = function(callback) {
//         console.log('执行');

//         setTimeout(function() {
//             callback&&callback.call()
//         },1000)
//     }
//     ajax(function() {
//         console.log('timeout1');
//         ajax(function() {
//             console.log('timeout2');

//         })
//     }) 
// }

// {
//     let ajax = function () {
//         console.log('promise-执行');
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 resolve()
//             }, 1000)
//         })
//     }
//     ajax()
//         .then(function () {
//             console.log('promise', 'timeout2');
//         })

// }

{
    let ajax = function () {
        console.log('promise-执行-2');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000)
        })
    }
    ajax()
        .then(function () {
            return new Promise(function (resolve, reject) {
                console.log('promise', 'timeout-a');
                setTimeout(() => {
                    resolve()
                }, 1000);
            })
        })
        .then(function () {
            console.log('promise', 'timeout-b');
        })
}

{
    // 全部上传完成后添加
    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img')
            img.src = src
            img.onload = function() {
                resolve(img)
            }
            img.onerror = function() {
                reject(err)
            }
        })
    }
    function showimgs(imgs) {
        imgs.forEach(item => {
            document.body.appendChild(img)
        });
    }
    Promise.all([
        loadImg('http://ouzg16u5n.bkt.clouddn.com/02.png'),
        loadImg('http://ouzg16u5n.bkt.clouddn.com/2.gif'),
        loadImg('http://ouzg16u5n.bkt.clouddn.com/anta.png')
    ]).then(showimgs)
}

{
    // 上传一张添加一张
    function loadImg(src) {
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img')
            img.src = src
            img.onload = function() {
                resolve(img)
            }
            img.onerror = function() {
                reject(err)
            }
        })
    }
    function showimgs(imgs) {
        let p = document.createElement('p')
        p.appendChild(img)
        document.appendChild(p)
    }
    Promise.race([
        loadImg('http://ouzg16u5n.bkt.clouddn.com/02.png'),
        loadImg('http://ouzg16u5n.bkt.clouddn.com/2.gif'),
        loadImg('http://ouzg16u5n.bkt.clouddn.com/anta.png')
    ]).then(showimgs)
}