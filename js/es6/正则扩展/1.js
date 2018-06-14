{
    let regex = new RegExp('yxz','i')
    let regex2 = new RegExp(/xyz/i)
    console.log(regex.test('xyz123'),regex2.test('xyz123'));
    
}