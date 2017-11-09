# javaScript #

## 面试题整理：

###  Js相等比较
![](https://i.imgur.com/eqJKzRd.png)

### Q1: 运算符
-	逗号运算符,的作用是对每个表达式求值,并返回最后一个表达式的值.


### Q2: 重复声明两个函数会怎样？

#### A2: 重复申明两个函数跟重复生命两个变量本质上是一样的，都是以最后一次声明为准。

### Q3： 原型链、作用域链
- 案例一：
- 
    function Foo() {
	    getName = function () { 
	    	console.log('1');
	    };
	    return this;
    }
    Foo.getName = function () {
    	console.log('2');
    };
    Foo.prototype.getName = function () { 
    	console.log('3');
    };
    var getName = function () { 
    	console.log('4');
    };
    function getName() { 
    	console.log(5);
    }
    
    Foo.getName();  
    getName();	
    Foo().getName(); 
    getName();  
    new Foo.getName(); 
    new Foo().getName();   
    new new Foo().getName();		

#### A3：
###### JavaScript的操作符优先级,从高到低排序![](https://i.imgur.com/JHbKpqp.png)
###### 运算符优先级![](https://i.imgur.com/8ANDBE4.png)


	-	注意声明前置
    function Foo() {
    	//在函数内部声明的getName变量，前面是不带有var、let,const的，声明的getName是在全局范围内(也是就window)。也就是个全局变量
	    getName = function () {
	    	console.log('1');
	    };
	    return this;
    }
    // 为函数添加属性getName,其类型是Function，所以这里也可以看出来，Function也是一种Object
    Foo.getName = function () {
    console.log('2');
    };
    // 为Foo的原型添加方法getName
    Foo.prototype.getName = function () {
    console.log('3');
    };
    
    // var声明的变量和函数声明function都会被提升，但是函数声明的提升的级别是比var要高的
    
    var getName = function () {
    console.log('4');
    };
    function getName() {
    console.log(5);
    }
    
    Foo.getName();  // => 2 函数Foo本身并没有执行，执行的是函数的属性getName，当然输出的是：2.
    
    getName();	//   => 4在全局范围内执行了getName() ，，，实际顺序是 var getName | function getName(){} | getname = function(){}
    
    Foo().getName();  // =>  ()与.优先级相同，所以从左至右执行。首先运行Foo(), 全局 的getName被覆盖成输出console.log('1'),并且返回的this此时代表的是window。随后相当于执行的window.getName(),那么输出的实际就是1(被覆盖)。
    
    getName();   // => 1 同上
    
    new Foo.getName(); // =>2   . 操作符要比 new 优先级要高，所以实际执行的是new (Foo.getName)()
    
    new Foo().getName(); // =>3  首先看运算符优先级括号高于new。实际执行为(new Foo()).getName()。遂先执行Foo函数。new Foo()返回了新生成的对象，该对象没有getName()方法，所以在prototype中找到了getName()方法。所以输出的是3。 // 具体可看运算符优先级
    
    new new Foo().getName(); // => 3  第一步划分为：new (new Foo().getName)(); 第二步划分为：new ((new Foo()).getName)();
    

- 案例二：
-
    var a = 1;
    
    var a = 1;
    function fn(){
      console.log(a);//第一个输出值---->  undefined
      var a = 5;
      console.log(a);//第二个输出值---->  5  
      a++;
      var a;
      fn3();
      fn2();
      console.log(a);   //第五个输出值  ---->  20
    
      function fn2(){
    console.log(a); //第四个输出值  ---->   6
    a = 20;
      }
    }
    
    function fn3(){
      console.log(a)   //第三个输出值  ---->  1
      a = 200;
    }
    
    fn();
    console.log(a);   //第六个输出值---->  200
>  1、作用域在全局，调用全局变量 a，但由于函数内部变量重新声明，且根据变量声明提前但赋值不会提前，所以输出 undefined
2、作用域在函数 fn 内，调用 fn 内变量 a，此时函数内变量声明且赋值 var a = 5，所以输出为 5
3、作用域在全局，此时调用全局变量 a， 所以输出为 1
4、作用域在 fn 内，调用 fn 内变量 a，此时 fn 内由 a++ 计算后，a = 6，所以输出为 6
5、作用域在 fn 内，调用 fn 内变量 a，此时由于 fn2 函数执行，fn 内变量 a 重新赋值为 a = 20 ，所以输出为 20
6、作用域在全局，调用全局变量 a，此时由于 fn3 函数执行，全局变量 a 重新赋值为 a = 200 ，所以输出为 200

###  Q4:js等号及隐式类型转换等
    console.log( +0 ==  -0 ) // =>true
    
    console.log( +0 === -0 ) // => true
    
    console.log( Object.is(+0, -0) ) // => false   // Object.is()方法确定两个值是否相同。
    
    console.log( "1" == 1 ) // => true
    
    console.log( "1" === 1 ) // => false
    
    console.log( Object.is("1", 1) ) // => false
    
    console.log( new String("foo") == new String("foo") )  //   => false
    
    console.log( new String("foo") === new String("foo") ) // => false
    
    console.log( Object.is(new String("foo") , new String("foo") ) ) // => false
    
    console.log( new String("foo") == "foo" ) // => true
    console.log( new String("foo") === "foo" ) // => false
    console.log( Object.is(new String("foo") , "foo" ) ) // => false
    
    const a = {}
    const b = a
    console.log( a == b  ) // => true
    console.log( a === b  ) // => true
    console.log( Object.is(a, b) ) // => true

    console.log( NaN == NaN ) // => false
    console.log( NaN === NaN ) // => false
    console.log( Object.is(NaN, NaN) ) // => true

#### A4:
可参考![](https://i.imgur.com/oMfY5zJ.png)

### Q5:如何取得页面用到哪几种标签？
#### A5:
-	`document.all`能取得当前页面所有的`element`，判断`nodeType===1`就是`element`了，取`nodeName`就是标签名称，遍历做个类别统计就可以
-	`document.getElementsByTagName('*')`， 类似的还有jq`$("*")`

### Q6： 递归拆分
-	写一个函数，列出一个整数所有的分解类型，比如对于数字4，可以做拆分得到下列字符串1111|112|121|13|211|22|31|4
#### A6: 
-	`Array.from() `方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
-
    function f() {
	    // Array.from() 方法从一个类似数组或可迭代的对象中创建一个新的数组实例。
	    var arr = Array.from(arguments);
	    // console.log(arr);
	    let before = arr.slice(0, arr.length - 1);
	    // console.log(before);
	    let n = arr[arr.length - 1];
	    // console.log(n);
	    for (let i = 1; i < n; i++) {
	    f(...before, i, n - i);
	    }
	    console.log(arr);
    }

### Q7: this指向
#### A7: 
-	this绑定有四种情况；
	-	默认绑定：函数独立调用时，this默认绑定到window
	-	隐式绑定：看函数调用栈，上一个的栈点就是this，console.trace()可查看函数的调用关系
	-	显式绑定：如call,apply,bind，this指向绑定对象
	-	new绑定：this指向new出来的对象

### Q8: 从 URL 输入到页面展现发生了什么?
#### A8： 
[http://blog.csdn.net/tangxiaolang101/article/details/54670218](http://blog.csdn.net/tangxiaolang101/article/details/54670218)

### Q9: 深度克隆
#### A9: 
    function clone(Obj) {
	    var buf;
	    //instanceof判断一个对象是否为某一数据类型，或一个变量是否为一个对象的实例;返回boolean类型
	    if (Obj instanceof Array) {
	    buf = []; //创建一个空的数组
	    var i = Obj.length;
	    while (i--) {
	    buf[i] = clone(Obj[i]);
	    }
	    return buf;
	    } else if (Obj instanceof Object) {
	    buf = {}; //创建一个空对象
	    for (var k in Obj) { //为这个对象添加新的属性
	    buf[k] = clone(Obj[k]);
	    }
	    return buf;
	    } else {
	    return Obj;
	    }
    }

### Q10: 数组去重
#### A10:
-	方法一：

	1. 构建一个新的数组存放结果
	2. for循环中每次从原数组中取出一个元素，用这个元素循环与结果数组对比
	3. 若结果数组中没有该元素，则存到结果数组中
-	方法二：

	1.先将原数组进行排序
	2.检查原数组中的第i个元素 与 结果数组中的最后一个元素是否相同，因为已经排序，所以重复元素会在相邻位置
	3.如果不相同，则将该元素存入结果数组中
-	方法三：

	1.创建一个新的数组存放结果
	2.创建一个空对象
	3.for循环时，每次取出一个元素与对象进行对比，如果这个元素不重复，则把它存放到结果数组中，同时把这个元素的内容作为对象的一个属性，并赋值为1，存入到第2步建立的对象中。
	说明：至于如何对比，就是每次从原数组中取出一个元素，然后到对象中去访问这个属性，如果能访问到值，则说明重复。

[https://github.com/beer-on-ice/Example/tree/master/js/%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D](https://github.com/beer-on-ice/Example/tree/master/js/%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D)

### Q11:原生DOM操作和事件相关

- 如需替换 HTML DOM 中的元素，请使用` replaceChild(newnode,oldnode) `方法
- 从父元素中删除子元素 `parent.removeChild(child)`;
- `insertBefore(newItem,existingItem)` 在指定的已有子节点之前插入新的子节点
- `appendChild(newListItem`向元素添加新的子节点，作为最后一个子节点
document.documentElement - 全部文档
document.body - 文档的主体


http://www.w3school.com.cn/jsref/dom_obj_all.asp

- JS事件：target与currentTarget区别

target在事件流的目标阶段；currentTarget在事件流的捕获，目标及冒泡阶段。只有当事件流处在目标阶段的时候，两个的指向才是一样的， 而当处于捕获和冒泡阶段的时候，target指向被单击的对象而currentTarget指向当前事件活动的对象（一般为父级）。

#### 事件模型

事件捕捉阶段：事件开始由顶层对象触发，然后逐级向下传播，直到目标的元素；
处于目标阶段：处在绑定事件的元素上；
事件冒泡阶段：事件由具体的元素先接收，然后逐级向上传播，直到不具体的元素；
- 阻止 冒泡／捕获 `event.stopPropagation()`和IE的`event.cancelBubble=true`

- DOM事件绑定
1.绑定事件监听函数：addEventListener和attchEvent
2.在JavaScript代码中绑定：获取DOM元素 `dom.onlick = fn`
3.在DOM元素中直接绑定：`<div onclick = 'fn()'>`

DOM事件流包括三个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。首先发生的事件捕获，为截获事件提供机会。然后是实际的目标接受事件。最后一个阶段是时间冒泡阶段，可以在这个阶段对事件做出响应。

#### 事件委托

因为事件具有冒泡机制，因此我们可以利用冒泡的原理，把事件加到父级上，触发执行效果。这样做的好处当然就是提高性能了

最重要的是通过`event.target.nodeName`判断子元素

### Q12: apply, call和bind有什么区别?

参考答案：三者都可以把一个函数应用到其他对象上，call、apply是修改函数的作用域（修改this指向），并且立即执行，而bind是返回了一个新的函数，不是立即执行．apply和call的区别是apply接受数组作为参数，而call是接受逗号分隔的无限多个参数列表，

### Q13: 说说js的数据类型？  
#### A14:
	JS变量可能包含两种不同数据类型的值:基本类型值和引用类型值。  
	
	基本类型值：
		1、基本类型值指的是保存在栈内存中的简单数据段;  
		2、基本类型值按值访问，操作的是他们实际保存的值；  
		3、基本类型值从一个变量向一个变量复制时，会在栈中创建一个新值，然后把值复制到为新变量分配的位置上，改变源数据不会影响到新的变量（互不干涉）；    
	
	引用类型值：
		1、引用类型值指的是那些保存在堆内存中的对象，意思是，变量中保存的实际上只是一个指针，这个指针指向内存堆中实际的值；
		2、引用类型值按引用访问，当查询时，我们需要先从栈中读取内存地址，然后再顺藤摸瓜地找到保存在堆内存中的值;
		3、引用类型值复制的是存储在栈中的指针，将指针复制到栈中未新变量分配的空间中，而这个指针副本和原指针执行存储在堆中的同一个对象，复制操作结束后，两个变量实际上将引用同一个对象；因此改变其中的一个，将影响另一个；

	6种基本类型：
		Boolean:
		布尔表示一个逻辑实体,可以有两个值：true 和 false;
	
		Null：
		Null类型只有一个值：null;
		值null是一个JavaScript字面量表示空值（null or an "empty" value）,即没有对象被呈现（no object value is present）.它是JavaScript原始值之一。
	
		Undefined:
		1、在JavaScript中,undefined这个词有多重含义.首字母大写的Undefined表示的是一种数据类型；
		2、小写的undefined表示的是属于这种数据类型的唯一的一个值；
		3、但这两种undefined都只能存在于文档或规范中,不能存在于JavaScript代码中；
		4、在JavaScript代码中,你看到的undefined最有可能是全局对象的一个属性;
		5、该属性的初始值是就是前面所说的原始值undefined,还有种情况就是,这个undefined是个局部变量,就像其他普通变量一样,没有任何特殊性,它的值不一定是undefined,但通常情况下都是的,都指的是window.undefined这个属性.
		6、一个未初始化的变量的值为undefined;
		   一个没有传入实参的形参变量的值为undefined;
		   如果一个函数什么都不返回,则该函数默认返回undefined；
			
		Number:
		数字类型只有一个整数;
	
		String:
		JavaScript的字符串类型用于表示文本数据;
	
		Symbol (ECMAScript 6 新定义):
		符号(Symbol) 能够实现针对对象状态的访问控制，允许使用string(与ES5相同)或symbol作为键来访问属性。符号是一个新的原语类型，可选的name参数可以用于调试——但并不是符号身份的一部分。符号是独一无二的(如同gensym（所产生的符号）)，但不是私有的，因为它们可以通过类似Object.getOwnPropertySymbols的反射特性暴露出来。
	
		1、符号类型是唯一的并且是不可修改的, 并且也可以用来作为Object的key的值. 
		2、符号是一种特殊的、不可变的数据类型,可以作为对象属性的标识符使用。
		3、符号对象是一个符号 原始数据类型的隐式对象包装器。 
	
	-----------------------------------------------------------------------------------
	引用类型：
		Object

### Q14: null与undefined的不同点？ 
#### A14:	
	*null是一个字面量（而不是全局对象的一个属性,undefined 是）;
	*null是一个表示"无"的对象,转为数值时为0；undefined是一个表示"无"的原始值,转为数值时为NaN。
	*当声明的变量还未被初始化时,变量的默认值为undefined。
	*null用来表示尚未存在的对象,常用来表示函数企图返回一个不存在的对象。
	
	-----------------------------------------------------------------------------------
	undefined表示"缺少值",就是此处应该有一个值,但是还没有定义。典型用法是：
		（1）变量被声明了,但没有赋值时,就等于undefined。
		（2) 调用函数时,应该提供的参数没有提供,该参数等于undefined。
		（3）对象没有赋值的属性,该属性的值为undefined。
		（4）函数没有返回值时,默认返回undefined。
	null表示"没有对象",即该处不应该有值。典型用法是：
		（1） 作为函数的参数,表示该函数的参数不是对象。
		（2） 作为对象原型链的终点

### Q15: 闭包
#### A15:
	一、变量的作用域
		要理解闭包,首先必须理解Javascript特殊的变量作用域。
		变量的作用域无非就是两种：全局变量和局部变量。
		ECMA中所有函数的参数都是按值传递的;
		(在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量;)
		(在向参数传递引用类型的值时，会把这个值在内存的地址复制给一个局部变量;)

		Javascript语言的特殊之处,就在于函数内部可以直接读取全局变量。
		　　
	---------------------------------------分割线---------------------------------------
	二、如何从外部读取局部变量？
		出于种种原因,我们有时候需要得到函数内的局部变量。
		但是正常情况下,这是办不到的；只有通过变通方法才能实现。
		那就是在函数的内部,再定义一个函数。
		　　function f1(){
		　　　　var n=999;
		　　　　function f2(){
		　　　　　　alert(n); // 999
		　　　　}
		　　}
		在上面的代码中,函数f2就被包括在函数f1内部;
		这时f1内部的所有局部变量,对f2都是可见的;
		但是反过来就不行,f2内部的局部变量,对f1就是不可见的;
		这就是Javascript语言特有的"链式作用域"结构（chain scope）;
		子对象会一级一级地向上寻找所有父对象的变量。
		所以,父对象的所有变量,对子对象都是可见的,反之则不成立。

		既然f2可以读取f1中的局部变量,那么只要把f2作为返回值
		,我们不就可以在f1外部读取它的内部变量了吗！
		　　function f1(){
		　　　　var n=999;
		　　　　function f2(){
		　　　　　　alert(n);
		　　　　}
		　　　　return f2;
		　　}
		　　var result=f1();
		　　result(); // 999
		　　
	---------------------------------------分割线---------------------------------------
	三、闭包的概念
		上一节代码中的f2函数,就是闭包。
		各种专业文献上的"闭包"（closure）定义非常抽象,很难看懂。
		我的理解是,闭包就是能够读取其他函数内部变量的函数。
		由于在Javascript语言中,只有函数内部的子函数才能读取局部变量,
		因此可以把闭包简单理解成"定义在一个函数内部的函数"。
		所以,在本质上,闭包就是将函数内部和函数外部连接起来的一座桥梁。

	---------------------------------------分割线---------------------------------------
	四、闭包的用途
		闭包可以用在许多地方。它的最大用处有两个:
		一个是前面提到的可以读取函数内部的变量;
		另一个就是让这些变量的值始终保持在内存中。
		
	---------------------------------------分割线---------------------------------------
	五、使用闭包的注意点
		1、由于闭包会使得函数中的变量都被保存在内存中,内存消耗很大,所以不能滥用闭包,
		否则会造成网页的性能问题,在IE中可能导致内存泄露。解决方法是,在退出函数之前,
		将不使用的局部变量全部删除。
		2、闭包会在父函数外部,改变父函数内部变量的值。
		所以,如果你把父函数当作对象（object）使用,把闭包当作它的公用方法（Public Method）,
		把内部变量当作它的私有属性（private value）,这时一定要小心,不要随便改变父函数内部变量的值。



### Q16: 说说JS的对象,类和对象的继承？以及ES6对象的继承？
#### A16:
	
	一、对象的定义,及构造函数 ：Javascript 面向对象编程（一）：封装
		a、Javascript是一种基于对象（object-based）的语言,
			遇到的所有东西几乎都是对象;
		b、但是,它又不是一种真正的面向对象编程（OOP）语言,
			因为它的语法中没有class（类）;
		------------------------------------------------------------------------------------------
		1、生成对象的原始模式
			假定我们把猫看成一个对象,它有"名字"和"颜色"两个属性。
			　　var Cat = {
			　　　　name : '',
			　　　　color : ''
			　　}
			现在,我们需要根据这个原型对象的规格（schema）,生成两个实例对象。
			　　var cat1 = {}; // 创建一个空对象
			　　　　cat1.name = "大毛"; // 按照原型对象的属性赋值
			　　　　cat1.color = "黄色";
			　　var cat2 = {};
			　　　　cat2.name = "二毛";
			　　　　cat2.color = "黑色";
			好了,这就是最简单的封装了,把两个属性封装在一个对象里面。

			但是有两个缺点:
			一是如果多生成几个实例,写起来就非常麻烦；
			二是实例与原型之间,没有任何办法,可以看出有什么联系。
		------------------------------------------------------------------------------------------
		2、原始模式的改进
			我们可以写一个函数,解决代码重复的问题。
			　　function Cat(name,color){
			　　　　return {
			　　　　　　name:name,
			　　　　　　color:color
			　　　　}
			　　}
			然后生成实例对象,就等于是在调用函数：
			　　var cat1 = Cat("大毛","黄色");
			　　var cat2 = Cat("二毛","黑色");
			这种方法的问题依然是,cat1和cat2之间没有内在的联系,不能反映出它们是同一个原型对象的实例。
		------------------------------------------------------------------------------------------
		3、构造函数模式
			为了解决从原型对象生成实例的问题,Javascript提供了一个构造函数（Constructor）模式。
			所谓"构造函数",其实就是一个普通函数,但是内部使用了this变量。
			对构造函数使用new运算符,就能生成实例,并且this变量会绑定在实例对象上。
			比如,猫的原型对象现在可以这样写,
			　　function Cat(name,color){
			　　　　this.name=name;
			　　　　this.color=color;
			　　}
			我们现在就可以生成实例对象了。
			　　var cat1 = new Cat("大毛","黄色");
			　　var cat2 = new Cat("二毛","黑色");
			　　alert(cat1.name); // 大毛
			　　alert(cat1.color); // 黄色
			这时cat1和cat2会自动含有一个constructor属性,指向它们的构造函数。
			　　alert(cat1.constructor == Cat); //true
			　　alert(cat2.constructor == Cat); //true
			Javascript还提供了一个instanceof运算符,验证原型对象与实例对象之间的关系。
			　　alert(cat1 instanceof Cat); //true
			　　alert(cat2 instanceof Cat); //true
		------------------------------------------------------------------------------------------
		4、构造函数模式的问题
			构造函数方法很好用,但是存在一个浪费内存的问题。
			请看,我们现在为Cat对象添加一个不变的属性"type"（种类）,再添加一个方法eat（吃老鼠）,原型对象Cat就变成了下面这样：
		　　 function Cat(name,color){
				this.name = name;
				this.color = color;
				this.type = "猫科动物";
				this.eat = function(){alert("吃老鼠");};
		　　 }
			还是采用同样的方法,生成实例：
			　　var cat1 = new Cat("大毛","黄色");
			　　var cat2 = new Cat ("二毛","黑色");
			　　alert(cat1.type); // 猫科动物
			　　cat1.eat(); // 吃老鼠
			表面上好像没什么问题,但是实际上这样做,有一个很大的弊端。
			那就是对于每一个实例对象,type属性和eat()方法都是一模一样的内容,每一次生成一个实例,
			都必须为重复的内容,多占用一些内存。这样既不环保,也缺乏效率。
		　　	alert(cat1.eat == cat2.eat); //false
			能不能让type属性和eat()方法在内存中只生成一次,然后所有实例都指向那个内存地址呢？回答是可以的。
		------------------------------------------------------------------------------------------
		5、Prototype模式
			Javascript规定,每一个构造函数都有一个prototype属性,指向另一个对象。
			这个对象的所有属性和方法,都会被构造函数的实例继承。
			这意味着,我们可以把那些不变的属性和方法,直接定义在prototype对象上。
			　　function Cat(name,color){
			　　　　this.name = name;
			　　　　this.color = color;
			　　}
			　　Cat.prototype.type = "猫科动物";
			　　Cat.prototype.eat = function(){alert("吃老鼠")};
			然后,生成实例。
			　　var cat1 = new Cat("大毛","黄色");
			　　var cat2 = new Cat("二毛","黑色");
			　　alert(cat1.type); // 猫科动物
			　　cat1.eat(); // 吃老鼠
			这时所有实例的type属性和eat()方法,其实都是同一个内存地址,指向prototype对象,因此就提高了运行效率。
			　　alert(cat1.eat == cat2.eat); //true
		------------------------------------------------------------------------------------------
		6、Prototype模式的验证方法
			为了配合prototype属性,Javascript定义了一些辅助方法,帮助我们使用它;
			6.1 isPrototypeOf()
				这个方法用来判断,某个proptotype对象和某个实例之间的关系。
				　　alert(Cat.prototype.isPrototypeOf(cat1)); //true
				　　alert(Cat.prototype.isPrototypeOf(cat2)); //true
			6.2 hasOwnProperty()
				每个实例对象都有一个hasOwnProperty()方法,
				用来判断某一个属性到底是本地属性,还是继承自prototype对象的属性。
				　　alert(cat1.hasOwnProperty("name")); // true
				　　alert(cat1.hasOwnProperty("type")); // false
			6.3 in运算符
				in运算符可以用来判断,某个实例是否含有某个属性,不管是不是本地属性。
				　　alert("name" in cat1); // true
				　　alert("type" in cat1); // true
				in运算符还可以用来遍历某个"对象"的所有属性。
				　　for(var prop in cat1) { 
						alert("cat1["+prop+"]="+cat1[prop]); 
					}
	---------------------------------------分割线---------------------------------------
	二、对象构造函数的继承   Javascript面向对象编程（二）：构造函数的继承
		今天要介绍的是,对象之间的"继承"的五种方法:
		现在有一个"动物"对象的构造函数:
		　　function Animal(){
		　　　　this.species = "动物";
		　　}
		还有一个"猫"对象的构造函数:
		　　function Cat(name,color){
		　　　　this.name = name;
		　　　　this.color = color;
		　　}
		怎样才能使"猫"继承"动物"呢？
		------------------------------------------------------------------------------------------
		1、构造函数绑定
			第一种方法也是最简单的方法,使用call（子对象,单个参数）或apply（子对象,数组参数）方法,
			将父对象的构造函数绑定在子对象上,即在子对象构造函数中加一行：
			　　function Cat(name,color){
			　　　　Animal.apply(this, arguments);
			　　　　this.name = name;
			　　　　this.color = color;
			　　}
			　　var cat1 = new Cat("大毛","黄色");
			　　alert(cat1.species); // 动物
		------------------------------------------------------------------------------------------
		2、prototype模式
			第二种方法更常见,使用prototype属性,
			如果"猫"的prototype对象,指向一个Animal的实例,那么所有"猫"的实例,就能继承Animal了。
			　　Cat.prototype = new Animal();
			　　Cat.prototype.constructor = Cat;
			　　var cat1 = new Cat("大毛","黄色");
			　　alert(cat1.species); // 动物

			代码的第一行,我们将Cat的prototype对象指向一个Animal的实例。
			　　Cat.prototype = new Animal();

			它相当于完全删除了prototype 对象原先的值,然后赋予一个新值。但是,第二行又是什么意思呢？
			　　Cat.prototype.constructor = Cat;

			原来,任何一个prototype对象都有一个constructor属性,指向它的构造函数;
			如果没有"Cat.prototype = new Animal();"这一行,Cat.prototype.constructor是指向Cat的;
			加了这一行以后,Cat.prototype.constructor指向Animal;
			　　alert(Cat.prototype.constructor == Animal); //true

			更重要的是,每一个实例也有一个constructor属性,默认调用prototype对象的constructor属性。
			　　alert(cat1.constructor == Cat.prototype.constructor); // true

			因此,在运行"Cat.prototype = new Animal();"这一行之后,cat1.constructor也指向Animal！
			　　alert(cat1.constructor == Animal); // true

			这显然会导致继承链的紊乱（cat1明明是用构造函数Cat生成的）,因此我们必须手动纠正,
			将Cat.prototype对象的constructor值改为Cat。这就是第二行的意思;
			很重要的一点,编程时务必要遵守。下文都遵循这一点,即如果替换了prototype对象,
			　　o.prototype = {};

			那么,下一步必然是为新的prototype对象加上constructor属性,并将这个属性指回原来的构造函数。
			　　o.prototype.constructor = o;
		------------------------------------------------------------------------------------------
		3、直接继承prototype
			第三种方法是对第二种方法的改进。
			由于Animal对象中,不变的属性都可以直接写入Animal.prototype。
			所以,我们也可以让Cat()跳过 Animal(),直接继承Animal.prototype。
			现在,我们先将Animal对象改写：
			　　function Animal(){}
			　　Animal.prototype.species = "动物";

			然后,将Cat的prototype对象,然后指向Animal的prototype对象,这样就完成了继承。
			　　Cat.prototype = Animal.prototype;
			　　Cat.prototype.constructor = Cat;
			　　var cat1 = new Cat("大毛","黄色");
			　　alert(cat1.species); // 动物

			与前一种方法相比,这样做的优点是效率比较高（不用执行和建立Animal的实例了）,比较省内存。
			缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象,
			那么任何对Cat.prototype的修改,都会反映到Animal.prototype。

			所以,上面这一段代码其实是有问题的。请看第二行
			　　Cat.prototype.constructor = Cat;

			这一句实际上把Animal.prototype对象的constructor属性也改掉了,所有请看第四种方法！！！！
			　　alert(Animal.prototype.constructor); // Cat
		------------------------------------------------------------------------------------------
		4、利用空对象作为中介
			由于"直接继承prototype"存在上述的缺点,所以就有第四种方法,利用一个空对象作为中介。
			　　var F = function(){};
			　　F.prototype = Animal.prototype;
			　　Cat.prototype = new F();
			　　Cat.prototype.constructor = Cat;

			F是空对象,所以几乎不占内存。这时,修改Cat的prototype对象,就不会影响到Animal的prototype对象。
			　　alert(Animal.prototype.constructor); // Animal

			我们将上面的方法,封装成一个函数,便于使用。
			　　function extend(Child, Parent) {
			　　　　var F = function(){};
			　　　　F.prototype = Parent.prototype;
			　　　　Child.prototype = new F();
			　　　　Child.prototype.constructor = Child;
			　　　　Child.uber = Parent.prototype;
			　　}

			使用的时候,方法如下
			　　extend(Cat,Animal);
			　　var cat1 = new Cat("大毛","黄色");
			　　alert(cat1.species); // 动物

			这个extend函数,就是YUI库如何实现继承的方法。
			另外,说明一点,函数体最后一行：
			　　Child.uber = Parent.prototype;

			意思是为子对象设一个uber属性,这个属性直接指向父对象的prototype属性,uber是一个德语词,意思是"向上"、"上一层"。
			这等于在子对象上打开一条通道,可以直接调用父对象的方法。这一行放在这里,只是为了实现继承的完备性,纯属备用性质。
		------------------------------------------------------------------------------------------
		5、拷贝继承
			上面是采用prototype对象,实现继承。我们也可以换一种思路,纯粹采用"拷贝"方法实现继承。
			简单说,如果把父对象的所有属性和方法,拷贝进子对象,不也能够实现继承吗？这样我们就有了第五种方法。

			首先,还是把Animal的所有不变属性,都放到它的prototype对象上。
			　　function Animal(){}
			　　Animal.prototype.species = "动物";
			然后,再写一个函数,实现属性拷贝的目的。
			　　function extend2(Child, Parent) {
			　　　　var p = Parent.prototype;
			　　　　var c = Child.prototype;
			　　　　for (var i in p) {
			　　　　　　c[i] = p[i];
					}
			　　　　return c;
			　　}
			这个函数的作用,就是将父对象的prototype对象中的属性,一一拷贝给Child对象的prototype对象
			（但这里for in 属于浅拷贝,因为for in 会遍历原型链上的属性）	。

			使用的时候,这样写：
			　　extend2(Cat, Animal);
			　　var cat1 = new Cat("大毛","黄色");
				alert(cat1.species); // 动物
	---------------------------------------分割线---------------------------------------
	三、非构造函数的继承    Javascript面向对象编程（三）：非构造函数的继承
		第一部分介绍了"封装"；
		第二部分介绍了使用构造函数实现"继承"。
		第三部分介绍不使用构造函数实现"继承"。

		1、什么是"非构造函数"的继承？
			比如,现在有一个对象,叫做"中国人"。
			　　var Chinese = {
			　　　　nation:'中国'
			　　};
			还有一个对象,叫做"医生"。
			　　var Doctor ={
			　　　　career:'医生'
			　　}
			请问怎样才能让"医生"去继承"中国人",也就是说,我怎样才能生成一个"中国医生"的对象？
			这里要注意,这两个对象都是普通对象,不是构造函数,无法使用构造函数方法实现"继承"。
		------------------------------------------------------------------------------------------
		2、object()方法 返回new原型对象的方法   （创建jquery对象就是用这个原理,但多了一步判断）
			json格式的发明人Douglas Crockford,提出了一个object()函数,可以做到这一点。
			　　function object(o) {
			　　　　function F() {}
			　　　　F.prototype = o;
			　　　　return new F();
			　　}
			这个object()函数,其实只做一件事,就是把子对象的prototype属性,指向父对象,从而使得子对象与父对象连在一起。
			使用的时候,第一步先在父对象的基础上,生成子对象：
			　　var Doctor = object(Chinese);

			然后,再加上子对象本身的属性：
			　　Doctor.career = '医生';

			这时,子对象已经继承了父对象的属性了。
			　　alert(Doctor.nation); //中国
		------------------------------------------------------------------------------------------
		3、object.create()方法
			a.在父对象：
				var Chinese={"nation":"中国"};

			b.建立子对象：
				var Doctor= Object.create(Chinese);

			c.再加上子对象本身的属性：
				Doctor.career = '医生';

			这时,子对象已经继承了父对象的属性了。
			console.log(Doctor.nation + Doctor.career);//中国医生
		------------------------------------------------------------------------------------------
		4、浅拷贝
			除了使用"prototype链"以外,还有另一种思路：把父对象的属性,全部拷贝给子对象,也能实现继承。
			下面这个函数,就是在做拷贝：
			　　function extendCopy(p) {
			　　　　var c = {};
			　　　　for (var i in p) {
			　　　　　　c[i] = p[i];
			　　　　}
			　　　　return c;
			　　}

			使用的时候,这样写：
			　　var Doctor = extendCopy(Chinese);
			　　Doctor.career = '医生';
			　　alert(Doctor.nation); // 中国

			但是,这样的拷贝有一个问题。那就是,如果父对象的属性等于数组或另一个对象,
			那么实际上,子对象获得的只是一个内存地址,而不是真正拷贝,因此存在父对象被篡改的可能。

			请看,现在给Chinese添加一个"出生地"属性,它的值是一个数组。
			　　Chinese.birthPlaces = ['北京','上海','香港'];

			通过extendCopy()函数,Doctor继承了Chinese。
			　　var Doctor = extendCopy(Chinese);

			然后,我们为Doctor的"出生地"添加一个城市：
			　　Doctor.birthPlaces.push('厦门');

			发生了什么事？Chinese的"出生地"也被改掉了！
			　　alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
			　　alert(Chinese.birthPlaces); //北京, 上海, 香港, 厦门
			所以,extendCopy()只是拷贝基本类型的数据,我们把这种拷贝叫做"浅拷贝"。这是早期jQuery实现继承的方式。
		------------------------------------------------------------------------------------------
		5、深拷贝
			所谓"深拷贝",就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难,只要递归调用"浅拷贝"就行了。
			　　function deepCopy(p, c) {
			　　　　var c = c || {};
					for (var i in p) {
						if(p.hasOwnProperty(i)){ //只去继承p原型链上的属性
						 	if (typeof p[i] === 'object') {
				　　　　　　　　c[i] = (p[i].constructor === Array) ？ [] : {};
				　　　　　　　　deepCopy(p[i], c[i]);
				　　　　　　} else {
				　　　　　　　　　c[i] = p[i];
				　　　　　　}
						}				　　　　　　
			　　　　}
			　　　　return c;
			　　}
			使用的时候这样写：
			　　var Doctor = deepCopy(Chinese);
			现在,给父对象加一个属性,值为数组。然后,在子对象上修改这个属性：
			　　Chinese.birthPlaces = ['北京','上海','香港'];
			　　Doctor.birthPlaces.push('厦门');

			这时,父对象就不会受到影响了。
			　　alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
			　　alert(Chinese.birthPlaces); //北京, 上海, 香港
			目前,jQuery库使用的就是这种继承方法。			
	---------------------------------------分割线---------------------------------------
	四、ES6对象的继承
		ES6 的类是在基于原型的面向对象模式之上的简单语法糖，它有唯一的、便捷的声明形式，这使得类模式更容易使用，并且鼓励了互操作性。class定义的类支持基于原型的继承、super 调用、实例和静态方法以及构造函数。
		
		class Animal {
		    constructor(){
		        this.type = 'animal'
		    }
		    says(say){
		        console.log(this.type + ' says ' + say)
		    }
		}

		let animal = new Animal()
		animal.says('hello') //animal says hello

		class Cat extends Animal {
		    constructor(){
		        super()
		        this.type = 'cat'
		    }
		}

		let cat = new Cat()
		cat.says('hello') //cat says hello
	定义：
	上面代码首先用class定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。简单地说，constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。
	继承：
	Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多。上面定义了一个Cat类，该类通过extends关键字，继承了Animal类的所有属性和方法。
	指向：
	super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

	ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
	PS如果你写react的话，就会发现以上三个东西在最新版React中出现得很多。创建的每个component都是一个继承React.Component的类。


### Q17: new操作符具体干了什么呢？
#### A17:

	1、创建一个空对象,并且 this 变量引用该对象,同时还继承了该函数的原型。
	2、属性和方法被加入到 this 引用的对象中。
	3、新创建的对象由 this 所引用,并且最后隐式的返回 this 。
		var obj  = {};
		obj.__proto__ = Base.prototype;
		Base.call(obj); 

### Q18:JavaScript原型,原型链？有什么特点？ 
#### A18:
	原型：
	*  原型对象也是普通的对象,是对象一个自带隐式的 __proto__ 属性,
		原型也有可能有自己的原型,如果一个原型对象的原型不为null的话,我们就称之为原型链。
	------------------------------------------------------------------------------------------
	原型链：
	*  原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链。

### Q19: js操作获取和设置cookie？  
#### A19:
	
	//创建cookie
	function setCookie(name, value, expires, path, domain, secure) {
	    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	    if (expires instanceof Date) {
	        cookieText += '; expires=' + expires;
	    }
	    if (path) {
	        cookieText += '; expires=' + expires;
	    }
	    if (domain) {
	        cookieText += '; domain=' + domain;
	    }
	    if (secure) {
	        cookieText += '; secure';
	    }
	    document.cookie = cookieText;
	}
	-------------------------------------------------------------------------------------------------
	//获取cookie
	function getCookie(name) {
	    var cookieName = encodeURIComponent(name) + '=';
	    var cookieStart = document.cookie.indexOf(cookieName);
	    var cookieValue = null;
	    if (cookieStart > -1) {
	        var cookieEnd = document.cookie.indexOf(';', cookieStart);
	        if (cookieEnd == -1) {
	            cookieEnd = document.cookie.length;
	        }
	        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	    }
	    return cookieValue;
	}
	-------------------------------------------------------------------------------------------------
	//删除cookie
	function unsetCookie(name) {
	    document.cookie = name + "= ; expires=" + new Date(0);
	}

### Q20:web storage和cookie的区别？
#### A20:
	
	Web Storage的概念和cookie相似,区别是它是为了更大容量存储设计的:
	1、Cookie的大小是受限的,并且每次你请求一个新的页面的时候Cookie都会被发送过去,这样无形中浪费了带宽;
		另外cookie还需要指定作用域,不可以跨域调用。

	2、除此之外,Web Storage拥有setItem,getItem,removeItem,clear等方法,
		不像cookie需要前端开发者自己封装setCookie,getCookie。

	3、但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互,作为HTTP规范的一部分而存在；
		而Web Storage仅仅是为了在本地“存储”数据而生

	4、浏览器的支持除了IE７及以下不支持外,其他标准浏览器都完全支持(ie及FF需在web服务器里运行),
		值得一提的是IE总是办好事,例如IE7、IE6中的UserData其实就是javascript本地存储的解决方案。
		通过简单的代码封装可以统一到所有的浏览器都支持web storage。

	5、localStorage和sessionStorage都具有相同的操作方法,例如setItem、getItem和removeItem等


### Q21: 请你谈谈Cookie的弊端？
#### A21:
	
	cookie虽然在持久保存客户端数据提供了方便,分担了服务器存储的负担,但还是有很多局限性的。
		第一：每个特定的域名下最多生成20个cookie
			1.IE6或更低版本最多20个cookie
			2.IE7和之后的版本最后可以有50个cookie。
			3.Firefox最多50个cookie
			4.chrome和Safari没有做硬性限制
		第二：IE和Opera 会清理近期最少使用的cookie,Firefox会随机清理cookie。
		第三：cookie的最大大约为4096字节,为了兼容性,一般不能超过4095字节。
		第四：IE 提供了一种存储可以持久化用户数据,叫做uerData,从IE5.0就开始支持。
			每个数据最多128K,每个域名下最多1M。这个持久化数据放在缓存中,如果缓存没有清理,那么会一直存在。
	-------------------------------------------------------------------------------------------------
	优点：极高的扩展性和可用性
		1.通过良好的编程,控制保存在cookie中的session对象的大小。
		2.通过加密和安全传输技术（SSL）,减少cookie被破解的可能性。
		3.只在cookie中存放不敏感数据,即使被盗也不会有重大损失。
		4.控制cookie的生命期,使之不会永远有效。偷盗者很可能拿到一个过期的cookie。
	-------------------------------------------------------------------------------------------------
	缺点：
		1.Cookie数量和长度的限制。每个domain最多只能有20条cookie,每个cookie长度不能超过4KB,否则会被截掉。
		2.安全性问题。如果cookie被人拦截了,那人就可以取得所有的session信息。
			即使加密也与事无补,因为拦截者并不需要知道cookie的意义,他只要原样转发cookie就可以达到目的了。
		3.有些状态不可能保存在客户端。例如,为了防止重复提交表单,我们需要在服务器端保存一个计数器。
			如果我们把这个计数器保存在客户端,那么它起不到任何作用。

### Q22: 哪些地方会出现css阻塞,哪些地方会出现js阻塞？JS无阻塞加载具体方式？ 
#### A22:
	
	JS的阻塞特性：
		所有浏览器在下载JS的时候,会阻止一切其他活动,比如其他资源的下载,内容的呈现等等。
		直到JS下载、解析、执行完毕后才开始继续并行下载其他资源并呈现内容。
		为了提高用户体验,新一代浏览器都支持并行下载JS,但是JS下载仍然会阻塞其它资源的下载（例如.图片,css文件等）。

	*由于浏览器为了防止出现JS修改DOM树,需要重新构建DOM树的情况,所以就会阻塞其他的下载和呈现。
	*嵌入JS会阻塞所有内容的呈现,而外部JS只会阻塞其后内容的显示,2种方式都会阻塞其后资源的下载。
		也就是说外部样式不会阻塞外部脚本的加载,但会阻塞外部脚本的执行。
	------------------------------------------------------------------------------------------
	CSS怎么会阻塞加载了？
	*当CSS后面跟着嵌入的JS的时候,该CSS就会出现阻塞后面资源下载的情况;
	*而当把嵌入JS放到CSS前面,就不会出现阻塞的情况了。

	根本原因：
		*因为浏览器会维持html中css和js的顺序,样式表必须在嵌入的JS执行前先加载、解析完。
		*而嵌入的JS会阻塞后面的资源加载,所以就会出现上面CSS阻塞下载的情况。
	------------------------------------------------------------------------------------------
	嵌入JS应该放在什么位置？
	   1、放在底部,虽然放在底部照样会阻塞所有呈现,但不会阻塞资源下载。
	   2、如果嵌入JS放在head中,请把嵌入JS放在CSS头部。
	   3、使用defer（只支持IE）
	   4、不要在嵌入的JS中调用运行时间较长的函数,如果一定要用,可以用`setTimeout`来调用
	------------------------------------------------------------------------------------------
	Javascript无阻塞加载具体方式？
	1、将脚本放在底部:<link>还是放在head中,用以保证在js加载前,能加载出正常显示的页面。
		<script>标签放在</body>前。
	2、成组脚本：由于每个<script>标签下载时阻塞页面解析过程,所以限制页面的<script>总数也可以改善性能。
		适用于内联脚本和外部脚本。
	3、非阻塞脚本：等页面完成加载后,再加载js代码。也就是在window.onload事件发出后开始下载代码。 
		（1）defer属性：支持IE4和fierfox3.5更高版本浏览器 
		（2）动态脚本元素：文档对象模型（DOM）允许你使用js动态创建HTML的几乎全部文档内容。
		代码如下：
		<script>
			var script=document.createElement("script");
			script.type="text/javascript";
			script.src="file.js";
			document.getElementsByTagName("head")[0].appendChild(script);
		</script>
		此技术的重点在于：
		无论在何处启动下载,文件额下载和运行都不会阻塞其他页面处理过程,即使在head里（除了用于下载文件的http链接）;

### Q23:哪些操作会造成内存泄漏？
#### A23:
	
	*内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
		垃圾回收器定期扫描对象,并计算引用了每个对象的其他对象的数量。

	*如果一个对象的引用数量为 0（没有其他对象引用过该对象）,
		或对该对象的惟一引用是循环的,那么该对象的内存即可回收。

	*setTimeout 的第一个参数使用字符串而非函数的话,会引发内存泄漏。
	*闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时,就会产生一个循环）

### Q24:请说出三种减少页面加载时间和性能优化，文件资源优化的方法？
#### A24:
	// 一、加载时间
		1.优化图片 
		2.图像格式的选择（GIF：提供的颜色较少,可用在一些对颜色要求不高的地方） 
		3.优化CSS（压缩合并css,如margin-top,margin-left...) 
		4.网址后加斜杠（如www.campr.com/目录,会判断这个“目录是什么文件类型,或者是目录。） 
		5.标明高度和宽度（如果浏览器没有找到这两个参数,它需要一边下载图片一边计算大小,
		  如果图片很多,浏览器需要不断地调整页面。这不但影响速度,也影响浏览体验。 
		  当浏览器知道了高度和宽度参数后,即使图片暂时无法显示,页面上也会腾出图片的空位,
		  然后继续加载后面的内容。从而加载时间快了,浏览体验也更好了。） 
		6.减少http请求（合并文件,合并图片）。
	// 二、性能优化
		1、减少http请求次数：
		CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip,CDN托管,data缓存 ,图片服务器。
		2、前端模板JS+数据,减少由于HTML标签导致的带宽浪费,前端用变量保存AJAX请求结果,
		  每次操作本地变量,不用请求,减少请求次数
		3、用innerHTML代替DOM操作,减少DOM操作次数,优化javascript性能。
		4、当需要设置的样式很多时设置className而不是直接操作style。
		5、少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
		6、避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
		7、图片预加载,将样式表放在顶部,将脚本放在底部  加上时间戳。
	// 三、文件资源优化
		文件合并,文件最小化/文件压缩, 使用 CDN 托管, 缓存的使用（多个域名来提供缓存）等

### Q25: Node的优点？
#### A25:
	因为Node是基于事件驱动和无阻塞的,所以非常适合处理并发请求,
	因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
	此外,与Node代理服务器交互的客户端代码是由javascript语言编写的,
	因此客户端和服务器端都用同一种语言编写,这是非常美妙的事情。

### Q26:JSON的了解？XML和JSON的区别？  
#### A26:
	*了解：
	JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
		它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小；
		{'age':'12', 'name':'back'}
		JSON.parse('str') 				//转换string为JSON格式
		JSON.stringfy('JSON') 			//转换JSON为string格式

	*区别：
	(1).数据体积方面。	
		JSON相对于XML来讲，数据的体积小，传递的速度更快些。
	(2).数据交互方面。
		JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。
	(3).数据描述方面。
		JSON对数据的描述性比XML较差。
	(4).传输速度方面。
		JSON的速度要远远快于XML。

### Q27:说几条写JavaScript的基本规范?
#### A27:
	- 代码缩进，建议使用“四个空格”缩进
	- 代码段使用花括号{}包裹
	- 语句结束使用分号;
	- 变量和函数在使用前进行声明
	- 以大写字母开头命名构造函数，全大写命名常量
	- 规范定义JSON对象，补全双引号
	- 用{}和[]声明对象和数组

### Q28: 如何编写高性能的JavaScript？
### A28:
* 遵循严格模式："use strict";
* 将js脚本放在页面底部，加快渲染页面
* 将js脚本将脚本成组打包，减少请求
* 使用非阻塞方式下载js脚本
* 尽量使用局部变量来保存全局变量
* 尽量减少使用闭包
* 使用 window 对象属性方法时，省略 window
* 尽量减少对象成员嵌套
* 缓存 DOM 节点的访问
* 通过避免使用 eval() 和 Function() 构造器
* 给 setTimeout() 和 setInterval() 传递函数而不是字符串作为参数
* 尽量使用直接量创建对象和数组
* 最小化重绘(repaint)和回流(reflow)

### Q29:事件的代理/委托
#### A29:
* 事件委托是指将事件绑定目标元素的到父元素上，利用冒泡机制触发该事件
  * 优点：
    - 可以减少事件注册，节省大量内存占用
    - 可以将事件应用于动态添加的子元素上
  * 缺点：
    使用不当会造成事件在不应该触发时触发

### Q30:["1", "2", "3"].map(parseInt) 答案是多少？
#### A30:
-  [1, NaN, NaN] 因为 parseInt 需要两个参数 (val, radix)，其中 radix 表示解析时用的基数。
-  map 传了 3 个 (element, index, array)，对应的 radix 不合法导致解析失败。

### Q31:什么是闭包（closure），为什么要用它？
#### A31:
- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域

- 闭包的特性：
  - 函数内再嵌套函数
  - 内部函数可以引用外层的参数和变量
  - 参数和变量不会被垃圾回收机制回收

### Q32:js延迟加载的方式有哪些?
#### A32:

* 设置`<script>`属性 defer="defer" （脚本将在页面完成解析时执行）
* 动态创建 script DOM：document.createElement('script');
* XmlHttpRequest 脚本注入
* 延迟加载工具 LazyLoad

### Q33: 那些操作会造成内存泄漏？
#### A33:
- 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在
	- 未使用 var 声明的全局变量
	- 闭包函数(Closures)
	- 循环引用(两个对象相互引用)
	- 控制台日志(console.log)
	- 移除存在绑定事件的DOM元素(IE)
	- 垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收
	- setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏

### Q34:说说严格模式的限制

#### A34: 严格模式主要有以下限制：

  - 变量必须声明后再使用

  - 函数的参数不能有同名属性，否则报错

  - 不能使用with语句

  - 不能对只读属性赋值，否则报错

  - 不能使用前缀0表示八进制数，否则报错

  - 不能删除不可删除的属性，否则报错

  - 不能删除变量delete prop，会报错，只能删除属性delete global[prop]

  - eval不会在它的外层作用域引入变量

  - eval和arguments不能被重新赋值

  - arguments不会自动反映函数参数的变化

  - 不能使用arguments.callee

  - 不能使用arguments.caller

  - 禁止this指向全局对象

  - 不能使用fn.caller和fn.arguments获取函数调用的堆栈

  - 增加了保留字（比如protected、static和interface）

### Q35:列举一下JavaScript数组和对象有哪些原生方法？**
#### A35:
* 数组：
    - arr.concat(arr1, arr2, arrn);
    - arr.join(",");
    - arr.sort(func);
    - arr.pop();
    - arr.push(e1, e2, en);
    - arr.shift();
    - unshift(e1, e2, en);
    - arr.reverse();
    - arr.slice(start, end);            
    - arr.splice(index, count, e1, e2, en);  
    - arr.indexOf(el);
    - arr.includes(el);   // ES6

* 对象：
    -  object.hasOwnProperty(prop);     
    -  object.propertyIsEnumerable(prop);
    -  object.valueOf();                 
    -  object.toString();                
    -  object.toLocaleString();          
    -  Class.prototype.isPropertyOf(object);  