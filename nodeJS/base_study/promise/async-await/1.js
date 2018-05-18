async function timeout(flag) {
    if (flag) {
        return 'hello world'
    } else {
        throw 'my god, failure'
    }
}
timeout(false).then(result => {
    console.log(result);
}).catch(error =>{
    console.log(error);
})
console.log('虽然在后面，但是我先执行');
