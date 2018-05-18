var ball1 = document.querySelector('.ball1')
var ball2 = document.querySelector('.ball2')
var ball3 = document.querySelector('.ball3')
function animates(ball,distance,callback){
    setTimeout(function() {
        var marginLeft = parseInt(ball.style.marginLeft,10);
        if(marginLeft == distance) {
            callback && callback()
        }
        else {
            if(marginLeft< distance) {
                marginLeft++ ;
            }
            else {
                marginLeft-- ;
            }
            ball.style.marginLeft = marginLeft + 'px'
            animates(ball,distance,callback)
        }
    },16)
}
// animates(ball1,100,function() {
//     animates(ball2,200,function() {
//         animates(ball3,300,function() {
//             animates(ball3,150,function() {
//                 animates(ball2,150,function() {
//                     animates(ball1,150,function() {})
//                 })
//             })
//         })
//     })
// })

function promiseAnimate(ball,distance) {
    return new Promise(function(resolve,reject) {
        function animate(){
            setTimeout(function() {
                var marginLeft = parseInt(ball.style.marginLeft,10);
                if(marginLeft == distance) {
                    resolve()
                }
                else {
                    if(marginLeft< distance) {
                        marginLeft++ ;
                    }
                    else {
                        marginLeft-- ;
                    }
                    ball.style.marginLeft = marginLeft + 'px'
                    animate()
                }
            },16)
        }
        animate()
    })
}
promiseAnimate(ball1,100)
.then(function(){return promiseAnimate(ball2,200)})
.then(function(){return promiseAnimate(ball3,300)})
.then(function(){return promiseAnimate(ball3,150)})
.then(function(){return promiseAnimate(ball2,150)})
.then(function(){return promiseAnimate(ball1,150)})
