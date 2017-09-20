/**
 * @Author: lonely_Arrow
 * @Date:   20-Sep-2017
 * @Email:  li997477295@outlook.com
 * @Last modified by:
 * @Last modified time: 20-Sep-2017
 */

var hs = document.querySelectorAll('a');
var p = document.querySelector('p');
hs.forEach((item,index)=> {
    item.onclick = function() {
        console.log(index);
    }
})
