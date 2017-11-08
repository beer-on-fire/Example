# css3 #

### CSS3新特性：

- 新增选择器     p:nth-child(n){color: rgba(255, 0, 0, 0.75)}
- 弹性盒模型     display: flex;
- 多列布局       column-count: 5;
- 媒体查询       @media (max-width: 480px) {.box: {column-count: 1;}}
- 个性化字体     @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
- 颜色透明度     color: rgba(255, 0, 0, 0.75);
- 圆角           border-radius: 5px;
- 渐变           background:linear-gradient(red, green, blue);
- 阴影           box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
- 倒影           box-reflect: below 2px;
- 文字装饰       text-stroke-color: red;
- 文字溢出       text-overflow:ellipsis;
- 背景效果       background-size: 100px 100px;
- 边框效果       border-image:url(bt_blue.png) 0 10;
- 转换
  - 旋转          transform: rotate(20deg);
  - 倾斜          transform: skew(150deg, -10deg);
  - 位移          transform: translate(20px, 20px);
  - 缩放          transform: scale(.5);
- 平滑过渡       transition: all .3s ease-in .1s;
- 动画           @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;
 
-----------
## 面试题整理：

###	Q1: css是否区分大小写？

#### A1: 
	-	不区分，html和css都对大小写不严格，但为了可读性而采用小写


###	Q2： 替换元素和非替换元素？
#### A2： 
	-	替换元素是浏览器根据其标签的元素与属性来判断显示具体的内容。如(X)HTML中的`<img>、<input>、<textarea>、<select>、<object>`都是替换元素，这些元素都没有实际的内容。
	-	(X)HTML 的大多数元素是不可替换元素，他们将内容直接告诉浏览器，将其显示出来。比如`<p>、<div>`


###	Q3: 	设置`p`的`font-size:10rem`，当用户重置或拖曳浏览器窗口时，文本大小是否会也随着变化？
#### A3: 
	-	不会，`rem`是以`html`根元素中`font-size`的大小为基准的相对度量单位，文本的大小不会随着窗口的大小改变而改变。
	
###	Q4： 伪类选择器`:checked`将作用与`input`类型为`radio`或者`checkbox`,不会作用于`option`
#### A4:
	-	不对。
	> :root选择器用匹配文档的根元素。在HTML中根元素始终是HTML元素。


###	Q5:`translate()`方法能移动一个元素在z轴上的位置？
#### A5: 
	-	不能。`translate()`方法只能改变x轴，y轴上的位移。

###	Q6:  `only` 选择器的作用是？
#### A6：
	-	停止旧版本浏览器解析选择器的其余部分。
    -	only 用来指定某种特定的媒体类型，可以用来排除不支持媒体查询的浏览器。其实only很多时候是用来对那些不支持Media Query 但却支持Media Type 的设备隐藏样式表的。其主要有：支持媒体特性（Media Queries）的设备，正常调用样式，此时就当only 不存在；对于不支持媒体特性(Media Queries)但又支持媒体类型(Media Type)的设备，这样就会不读了样式，因为其先读only 而不是screen；另外不支持Media Qqueries 的浏览器，不论是否支持only，样式都不会被采用。
  
###	Q7: `overflow:hidden` 是否形成BFC（Block Formatting Contexts）块级格式化上下文？	
#### A7：
	-	会形成BFC（Block Formatting Contexts）块级格式化上下文。
	-	BFC:如果一个元素符合了成为BFC的条件，该元素内部元素的布局和定位就和外部元素互不影响(除非内部的盒子建立了新的 BFC)，是一个隔离了的独立容器。
   > BFC作用：
   
	-	 包含浮动元素(使父级边框包住子级)
	-	 阻止margin向外传递
	-	 不被浮动元素覆盖

   > 会触发BFC的条件有：

    - float的值不为none。
    - overflow的值不为visible。
    - display的值为table-cell, table-caption, inline-block 中的任何一个。
    - position的值不为relative 和static。
    
  > BFC的作用
   
	 -	清除内部浮动：对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把把父元素变成一个BFC就行了。 常用的办法是给父元素设置overflow:hidden。
	 -	上下margin重合问题，可以通过触发BFC来解决
   

###	Q8: `screen`关键词是指设备物理屏幕的大小还是指浏览器的视窗？
#### A8: 
	-	浏览器视窗

### Q9： 为何会出现浏览器兼容性问题？如何解决？
#### A9：
-	为何出现?
	-	同一产品，版本越老 bug 越多
	-	同一产品，版本越新，功能越多
	-	不同产品，不同标准，不同实现方式
-	如何解决？
	1. 要不要做
		-	产品的角度（产品的受众、受众的浏览器比例、效果优先还是基本功能优先）
		-	成本的角度 (有无必要做某件事)
	2. 做到什么程度
		-	让哪些浏览器支持哪些效果
	3. 如何做
		-	根据兼容需求选择技术框架（库/jq）
		-	根据兼容需求选择兼容工具（html5shiv.js、respond.js、css reset、normalize.css、Modernizr）
		-	postCss提供了一个解析器，它能够将 CSS 解析成抽象语法树。	
		-	条件注释、CSS Hack、js 能力检测做一些修补
			-	CSS Hack原理：利用不同浏览器对CSS的支持和解析结果不一样编写针对特定浏览器样式。
				- 	常见的hack有
			  	- 	属性hack
			  	- 	选择器hack
			  	- 	IE条件注释	
	4. 两种方案
		-	渐进增强(progressive enhancement): 针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
		-	优雅降级 (graceful degradation): 一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

### Q10： 如何居中一个浮动元素？
#### A10： 
-	父元素和子元素同时左浮动，然后父元素相对左移动50%，再然后子元素相对右移动50%，或者子元素相对左移动-50%也就可以了
![](https://i.imgur.com/H12yAIB.png)	

### Q11: css实现水平垂直居中
#### A11:
-	负边距+定位：水平垂直居中（Negative Margin）
     * 使用绝对定位将content的定点定位到body的中心，然后使用负margin（content宽高的一半），
     * 将content的中心拉回到body的中心，已到达水平垂直居中的效果。
![](https://i.imgur.com/GUBEpki.png)

### Q12： 三栏布局,中间自适应？
#### A12: 
-	自身浮动法。左栏左浮动，右栏右浮动
测试代码：[https://github.com/beer-on-ice/Example/blob/master/css/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/index.html](https://github.com/beer-on-ice/Example/blob/master/css/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/index.html)
-	margin负值法
测试代码：[https://github.com/beer-on-ice/Example/blob/master/css/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/index2.html](https://github.com/beer-on-ice/Example/blob/master/css/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/index2.html)
-	绝对定位法。左右两栏采用绝对定位，分别固定于页面的左右两侧，中间的主体栏用左右margin值撑开距离
测试代码：[https://github.com/beer-on-ice/Example/blob/master/css/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/index3.html](https://github.com/beer-on-ice/Example/blob/master/css/%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/index3.html)

### Q13：`display: none;` 与 `visibility: hidden;` 的区别
#### A13:
- 	相同：它们都能让元素不可见
- 	区别：
  	- 	`display:none`;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；`visibility: hidden`;不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见

### Q14：CSS3新增伪类有那些？
#### A14:
```

p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child        选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。

:after          在元素之前添加内容,也可以用来做清除浮动。
:before         在元素之后添加内容
:enabled        
:disabled       控制表单控件的禁用状态。
:checked        单选框或复选框被选中

```
### Q15:为什么要初始化CSS样式
#### A15:
-	因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异

### Q16:display:inline-block 什么时候会显示间隙？
#### A16:
-	移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing

### Q17: 请列举几种隐藏元素的方法

* visibility: hidden;   这个属性只是简单的隐藏某个元素，但是元素占用的空间任然存在
* opacity: 0;           CSS3属性，设置0可以使一个元素完全透明
* position: absolute;   设置一个很大的 left 负值定位，使元素定位在可见区域之外
* display: none;        元素会变得不可见，并且不会再占用文档的空间。
* transform: scale(0);  将一个元素设置为缩放无限小，元素将不可见，元素原来所在的位置将被保留
* `<div hidden="hidden">` HTML5属性,效果和display:none;相同，但这个属性用于记录一个元素的状态
* height: 0;            将元素高度设为 0 ，并消除边框
* filter: blur(0);      CSS3属性，将一个元素的模糊度设置为0，从而使这个元素“消失”在页面中

### Q18: 请解释一下 CSS3 的 Flexbox（弹性盒布局模型）以及适用场景？
#### A18:
- Flexbox 用于不同尺寸屏幕中创建可自动扩展和收缩布局

### Q19: 在CSS样式中常使用 px、em 在表现上有什么区别？
#### A19:
* px 相对于显示器屏幕分辨率，无法用浏览器字体放大功能
* em 值并不是固定的，会继承父级的字体大小： em = 像素值 / 父级font-size

### Q20:在CSS样式中常使用 px、em 在表现上有什么区别？
#### A20:
* px 相对于显示器屏幕分辨率，无法用浏览器字体放大功能
* em 值并不是固定的，会继承父级的字体大小： em = 像素值 / 父级font-size


### Q21: CSS优化、提高性能的方法有哪些？
#### A21:
* 多个css合并，尽量减少HTTP请求
* 将css文件放在页面最上面
* 移除空的css规则
* 避免使用CSS表达式
* 选择器优化嵌套，尽量避免层级过深
* 充分利用css继承属性，减少代码量
* 抽象提取公共样式，减少代码量
* 属性值为0时，不加单位
* 属性值为小于1的小数时，省略小数点前面的0
* css雪碧图

### Q22:`::before` 和 `:after` 中双冒号和单冒号有什么区别？
#### A22:
* 在 CSS 中伪类一直用 : 表示，如 :hover, :active 等
* 伪元素在CSS1中已存在，当时语法是用 : 表示，如 :before 和 :after
* 后来在CSS3中修订，伪元素用 :: 表示，如 ::before 和 ::after，以此区分伪元素和伪类
* 由于低版本IE对双冒号不兼容，开发者为了兼容性各浏览器，继续使使用 :after 这种老语法表示伪元素
* 综上所述：::before 是 CSS3 中写伪元素的新语法； :after 是 CSS1 中存在的、兼容IE的老语法

### Q23：怎么让Chrome支持小于12px 的文字？
#### A23：
1. 以图换字
2. 
```css
  .shrink{
    -webkit-transform:scale(0.8);
    -o-transform:scale(1);
    display:inline-block;
  }
```

### Q24: 为什么要初始化CSS样式?   
#### A24:
	1、因为浏览器的兼容问题,不同浏览器对有些标签的默认值是不同的,如果没对CSS初始化往往会出现浏览器之间的页面显示差异。 
	2、当然,初始化样式会对SEO有一定的影响,但鱼和熊掌不可兼得,但力求影响最小的情况下初始化。  
	a、最简单的初始化方法就是：`* {padding: 0; margin: 0;} `（不建议）
	b、[淘宝的样式初始化](http://nec.netease.com/framework/css-reset.html)

### Q25: CSS中 link 和@import 的区别是？   
#### A25:
-	link方式的样式的权重,高于@import的权重；
-	link是HTML方式,@import是CSS方式；
-	link最大限度支持并行下载,@import过多嵌套导致串行下载,出现FOUC;
-	link可以通过rel="alternate stylesheet"指定候选样式；
-	@import只在IE5以上才能识别,可以使用@import对老浏览器隐藏样式；
-	@import必须在样式规则之前,可以在css文件中引用其他文件；
	-	 总体来说：link优于@import
	
### Q26: 解释下 CSS sprites,以及你要如何在页面或网站中使用它？
#### A26:
>	CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中;
	再利用CSS的“background-image”,“background- repeat,background-position”的组合进行背景定位;
	background-position可以用数字能精确的定位出背景图片的位置;

>	这样可以减少很多图片请求的开销,因为请求耗时比较长；请求虽然可以并发,但是也有限制,一般浏览器都是6个;
	对于未来而言,就不需要这样做了,因为有了`http2`;

-	 优点：
	-	减少HTTP请求数,极大地提高页面加载速度;
	-	增加图片信息重复度,提高压缩比,减少图片大小;
	-	更换风格方便,只需在一张或几张图片上修改颜色或样式即可实现;

-	 缺点：
	-	图片合并麻烦;
	-	维护麻烦,修改一个图片可能需要从新布局整个图片,样式;

### Q27: CSS选择器有哪些？
#### A27:	
	**通用选择器：选择所有元素,不参与计算优先级*,兼容性IE6+
	#X id选择器：选择id值为X的元素,兼容性：IE6+
	.X 类选择器： 选择class包含X的元素,兼容性：IE6+
	X Y后代选择器： 选择满足X选择器的后代节点中满足Y选择器的元素,兼容性：IE6+
	X 元素选择器： 选择标所有签为X的元素,兼容性：IE6+
	:link,：visited,：focus,：hover,：active链接状态： 选择特定状态的链接元素,顺序LoVe HAte,兼容性: IE4+
	
	---------------------------------------分割线---------------------------------------	
	X + Y直接兄弟选择器：在X之后第一个兄弟节点中选择满足Y选择器的元素,兼容性： IE7+
	X > Y子选择器： 选择X的子元素中满足Y选择器的元素,兼容性： IE7+
	X ~ Y兄弟： 选择X之后所有兄弟节点中满足Y选择器的元素,兼容性： IE7+
	[attr]：选择所有设置了attr属性的元素,兼容性IE7+
	[attr=value]：选择属性值刚好为value的元素
	[attr~=value]：选择属性值为空白符分隔,其中一个的值刚好是value的元素
	[attr|=value]：选择属性值刚好为value或者value-开头的元素
	[attr^=value]：选择属性值以value开头的元素
	[attr$=value]：选择属性值以value结尾的元素
	[attr*=value]：选择属性值中包含value的元素
	[:checked]：选择单选框,复选框,下拉框中选中状态下的元素,兼容性：IE9+
	X:after, X::after：after伪元素,选择元素虚拟子元素（元素的最后一个子元素）
	
	---------------------------------------分割线---------------------------------------
	CSS3中::表示伪元素。兼容性:after为IE8+,::after为IE9+
	:hover：鼠标移入状态的元素,兼容性a标签IE4+, 所有元素IE7+
	:not(selector)：选择不符合selector的元素。不参与计算优先级,兼容性：IE9+
	::first-letter：伪元素,选择块元素第一行的第一个字母,兼容性IE5.5+
	::first-line：伪元素,选择块元素的第一行,兼容性IE5.5+
	:nth-child(an + b)：伪类,选择前面有an + b - 1个兄弟节点的元素,其中n >= 0, 兼容性IE9+
	:nth-last-child(an + b)：伪类,选择后面有an + b - 1个兄弟节点的元素 其中n >= 0,兼容性IE9+
	X:nth-of-type(an+b)：伪类,X为选择器,解析得到元素标签,选择前面有an + b - 1个相同标签兄弟节点的元素。兼容性IE9+
	X:nth-last-of-type(an+b)伪类,X为选择器,解析得到元素标签,选择后面有an+b-1个相同标签兄弟节点的元素。兼容性IE9+
	X:first-child：伪类,选择满足X选择器的元素,且这个元素是其父节点的第一个子元素。兼容性IE7+
	X:last-child：伪类,选择满足X选择器的元素,且这个元素是其父节点的最后一个子元素。兼容性IE9+
	X:only-child：伪类,选择满足X选择器的元素,且这个元素是其父元素的唯一子元素。兼容性IE9+
	X:only-of-type：伪类,选择X选择的元素,解析得到元素标签,如果该元素没有相同类型的兄弟节点时选中它。兼容性IE9+
	X:first-of-type：伪类,选择X选择的元素,解析得到元素标签,如果该元素 是此此类型元素的第一个兄弟。选中它。兼容性IE9+

### Q28: 如何竖直居中一个元素?
#### A28:   
	[垂直居中6种方法](http://blog.csdn.net/freshlover/article/details/11579669)
## 以往学习笔记 

### 盒模型
-	box-sizing属性主要用来控制元素的盒模型的解析模式。默认值是content-box。
	-	标准盒模型：
	width/height = content;
	可视宽/高 =  content + padding + border;

	-	怪异盒模型：
	width/height = 可视宽/高;
	content = width - padding - border; 


### float: 浮动

	1. 在一行显示,父级的宽度放不下了，会自己折行
	2. 支持宽高等样式
	3. 不设置宽度的时候，宽度由内容撑开
	4. 会按照我们指定的方向移动，碰到父级的边界或者前边的浮动元素停止
	5. 元素浮动之后，上下margin不在叠加
	6. 脱离文档流(标准流) -- 元素在页面不在占位置	
-	文档流是文档中可显示对象在排列时所占用的位置。
-	元素浮动之后，就撑不开父级的高度了，必须要给父级加浮动，或者进行清浮动处理

### 清浮动：使浮动元素依然可以撑开父级的高度


1. 在浮动元素下边添加
```
.clearFix {
	clear: both;
}
```
2. 在浮动元素下边添加 
```
<br clear= "all"/>
.clear: all / left / right;
```
3. 给浮动元素的父级加 
```
.clearFix:after { content: ""; display: block;clear: both;}
```
-	元素浮动之后，如果父级的高度可以固定，就给父级设置高度，如果父级的高度需要内容撑开，就给父级清浮动

### Resize
-	允许用户修改元素的宽高
```
Resize   {
	None；不允许
	Vertical；垂直
	Horizontal；横向
	Both
}
```
-	必须配合overflow:auto使用。
------------
### 选择器
- id选择器（ # myid）
- 类选择器（.myclassname）
- 标签选择器（div, h1, p）
- 相邻选择器（h1 + p）
- 子选择器（ul > li）
- 后代选择器（li a）
- 通配符选择器（ * ）
- 属性选择器（a[rel = "external"]）
- 伪类选择器（a:hover, li:nth-child）
### 属性选择器
    -   E [attr] 找到所有具有attr属性的E类型元素
    -   E [attr="value"] 找到所有具有attr属性的E类型元素,并且属性名为Value
    -   E [attr ~ ="value"] 找到所有具有attr属性的E类型元素，并且属性为Value（指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写）
    -   E [attr ^="value"] 指定了属性名，并且有属性值，属性值是以Value开头的
    -   E [attr $="value"] 属性值以value结束的
    -   E [attr *="value"] 属性值中包含了value
    -   E [attr |="value"] 属性值是以value或者value- 开头的值，（比如说zh-cn）

### 结构选择器
    -   .p + h3 找到.p的下一个兄弟元素，并且是h3元素
    -   .p ~ h3 找到.p后面所有的h3标签
    -   :target 表示当前的URL片段的元素类型，这个元素必须是E
    -   ::selection 设置文本选中的背景和文字颜色 
    -   :not(.p) 排除class为p的元素

## 选择器
    -   E:nth-child()：E元素父级下的第几个子元素,并且元素的类型还得是E，支持odd（奇数）
even（偶数）    如： p:nth-child(4) p标签父级下的第4个子元素 ，并且标签类型还得是p标签
    -   > ：只找第一层子元素，如：
       
    -   *或者空格： 所有元素下第四个子级   
    
    -   E:nth-of-type() 找到E元素父级下的第几个E类型的元素，也支持even 、odd
       
    -   E:only-child E元素是他的父级下唯一的子元素
    
    -   E:empty E元素是个空标签
    
    -   :first-letter 文本第一个字

    -   :first-line 文本第一行

------------------------

## 移动端
1.viewport 视口

- 不设置viewport时，视口宽度一般为980
- `<meta name="viewport" content="width=400">`
- 部分安卓手机不支持设置或具体的数值
- `<meta name="viewport" content="width=device-width">`
- width=device-width 和设备宽度保持一致
- 可以改变视口宽度大小

2.DPI

- 每平方英寸所能打印像素点的个数
- DPI越大 像素也就越大，像素比越高，显示的东西就越小

3.像素比window.devicePixelRatio DPR

- 可以在JS提取但不能设置
	- 1px的内容放大N倍显示
	- 像素比为2，整个页面放大两倍显示

4.user-scalable 是否允许用户缩放（no||yes）

-	IOS10不支持，近乎无解
-	默认是yes

initial-scale 初始缩放比例：

	-	minimum-scale 最小缩放比例
	-	maximum-scale 最大缩放比例

页面宽度 =  device-width/scale;



------------------------

## Media Query 媒体查询
    -  媒询 设置了媒体类型之后，那只有在对应的媒体下，媒询中的样式才会被解析
    
    
###  媒体类型
        -   all 所有媒体
		-	braille 盲文触觉设备
		-	embossed 盲文打印机
		-	handheld 手持设备
		-	print 打印预览 
		-	projection 投影设备
		-	screen 彩屏设备
		-	speech '听觉'类似的媒体类型
		-	tty 不适用像素的设备
		-	tv  电视
		
###  关键字
		-	only 只有
		-	not 排除
		-	and 连接媒体类型和媒体特征
		
###  媒体特性:(min) (max)
		-	width
		-	divice-width
		-	orientation     (landscape横屏样式||portrait竖屏样式 )
		-	device-aspect-ratio             (高宽比:device-aspect-ratio:16/10)
            常见高宽比:
            			4/3
            			16/9
            			16/10

###  写法：
        
```
	-   `<link rel="stylesheet" type="text/css" href="index.css" media="">`
		
	-   @media {}

	-   @import url() 媒询条件;
```

```
	`@media all and (min-width:400px) and (max-width: 600px)  {}`
    所有的设备，宽度大于等于400px并且宽度小于等于600px的时候，识别其中的样式
```

###  meta标签
    

```
	<meta name="viewport" content="width=device-width, initial-scale=1">
```

###  屏幕大小
        -   超小屏幕
                手机 (<768px) xs
        -   小屏幕
                平板 (≥768px) sm
        -   中等屏幕
                桌面 (≥992px) md
        -   大屏幕
                桌面 (≥1200px) lg
                
                
==栅格布局，设置小尺寸之后，大尺寸会自动继承,设置了大尺寸之后，在小尺寸下样式会无效==

###  列偏移 
    
    ```
        col-xs-offset-n
    	col-sm-offset-n
    	col-md-offset-n
    	col-lg-offset-n
    ```
-----------
## 老版本弹性盒模型
    -   display:box;   
    -   display:inline-box;
    1.     老版本在使用时需要加前缀
    2.     块级子元素会在一行显示

###  box-orient  
        定义主轴方向
    -   horizontal水平
    -   vertical垂直
    
###  box-direction
        定义元素的排列顺序
    -   normal  左到右
    -   reverse 倒序
    
###  box-pack
        主轴方向富裕空间管理
    -   start
    -   end
    -   center
    -   justify
    
###  box-align
        侧轴（垂直于主轴方向）方向富裕空间管理
    -   start
    -   end
    -   center
    
###  box-flex
        定义子元素的弹性尺寸
    -   元素的尺寸 = box-flex
    -   元素的尺寸 = 元素的box-flex/所有元素的box-flex之和 * 父级的剩余空间;
	-   剩余空间 = 元素的总宽度 - 固定宽度的内容的宽度
    

    
###  box-ordinal-group
        定义子元素的排列顺序
1.     最小值1
2.     默认值大小为1
3.     数值越大排列越靠后
  
==**box的子元素不会自己换行**==



## display:flex(box的进化版)
    -       内嵌元素也支持宽高


###  flex-direction:
        主轴方向设置
    
    -   row 从左到右
    -   row-reverse 从右到左
    -   column 从左到右
    -   column-reverse 从右到左
    
    
###  justify-content:
        主轴对齐（主轴方向富裕空间管理）
        
    -   flex-start
    -   flex-end
    -   center
    -   space-between
    -   space-around
    
    
###  align-items:
        侧轴对齐（默认上到下、左到右）
        
    -   flex-start
    -   flex-end
    -   center
    
###  flex-wrap:
        换行
        
    -   nowrap 不换行（默认）
    -   wrap 换行
    -   wrap-reverse 反向换行
    
###  align-content
        行对齐
     
    -   flex-start
    -   flex-end
    -   center
    -   space-between
    -   space-around   
    
###  flex-flow: flex-direction flex-wrap;
        复合样式
        
        
###  flex:
    -   number
    -   auto
    -   none
    ==加给子级==
    元素的尺寸 = 元素的flex/flex之和 * 父级的宽度
    
###  order
        排序（数值越大，越往后排）
    ==加给子级==  
    默认值0，可接受负值
    


###  align-self
        对齐自身
        
    -   flex-start
    -   flex-end
    -   center

----------------------
## 布局容器 
    -   所有的内容都是放在布局容器中
    -   写栅格布局的时候，一定先写row，然后在row添加col
    -   1200 container 1170   
	    992  container 970
	    768  container 750
	    <768
	    
## 伪元素：
	-   after 在元素内容的末尾添加一块内容
	-   before 在元素内容的开始添加一块内容

	-   after 和 before要添加的内容写在content里,而且after和before必须有content	
	
##  考虑所有设备
	常见分辨率:
	-	1400以上(4k屏，高清屏)
	-	1366和1280 常规电脑
	-	1024 (平板横屏和老版本电脑)
	-	800和768 (平板竖屏和电脑的最小分辨率)
	-	480 手机横屏
	-	414 375 360 320 (手机) 
		
		

    -	1024或1280的电脑页面
    -	768的平板页面
    -	768一下的手机页面(通常做成自适应宽度)

    -   1400以上(4k屏，高清屏)
    -   1366和1280 常规电脑
    -   1024 (平板横屏和老版本电脑)
    
    
##  第一种写法：
    - 第一套样式写三种屏幕下通用的样式
	   


```
 <link rel="stylesheet" href="">
```


    - 第二套样式写屏幕宽度小于768的时候的样式，也就是手机
	   
```
 <link rel="stylesheet" media="(max-width:767px)" href="indexA.css">
```

	
    - 第三套样式写屏幕宽度小于1024大于等于768的时候的样式，也就是平板的竖屏
	   
```
 <link rel="stylesheet" media="(min-width:768px) and (max-width:1023px)" href="indexB.css">
```


	- 第四套样式写屏幕宽度大于等于1024的时候的样式，也就是平板的横屏和电脑
	  
```
  <link rel="stylesheet" media="(min-width:1024px)" href="indexC.css">
```

		
==注意这种写法写出来的内容，ABC三套样式不存同时被引入的情况，所有三套样式之间没有任何关系,所以在书写书序上，可以随意的写==


##  第二种写法：
    -   写通用样式，以及屏幕宽度小于768的样式
	       
```
 <link rel="stylesheet" href="indexA.css">
```

	-   屏幕大于等于768的时候引入
	        
```
 <link rel="stylesheet" media="(min-width:768px)" href="indexB.css">
```

	- 屏幕大于等于1024的时候引入
	        
```
<link rel="stylesheet" media="(min-width:1024px)" href="indexC.css">
```


    -	1. 所有屏幕下都会引入indexA
	-   2. 屏幕宽度大于等于768的时候，会引入indexA,indexB
	-   3. 屏幕宽度大于等于1024的时候，会引入indexA,indexB,indexC

==先写最小屏的，当屏幕宽度变宽的时候,会引入大屏下的样式表，同时小屏下的样式表也会被引入进来,我们只需要在大屏样式表中覆盖添加和小屏不一致的样式,所以有明确的先后顺序，先写小屏，再写大屏==


## 第三种写法：

    -   写通用样式，以及屏幕宽度大于等于1024的样式 
	
```
<link rel="stylesheet" href="indexA.css">
```

	-   屏幕宽度小于1024-->
	
```
<link rel="stylesheet" media="(max-width:1023px)" href="indexB.css">
```

	-   屏幕宽度小于768
	
```
<link rel="stylesheet" media="(max-width:767px)" href="indexC.css">
```

	-	1. 所有屏幕下都会引入indexA
	-	2. 屏幕宽度小于1024的时候，会引入indexA,indexB
	-	3. 屏幕宽度小于768的时候，会引入indexA,indexB,indexC

==先写最大屏的，当屏幕宽度变小的时候,会引入下屏下的样式表，同时大屏下的样式表也会被引入进来,我们只需要在小屏样式表中覆盖添加和大屏不一致的样式,所以有明确的先后顺序，先写大屏，再写小屏==

---------------
# 3D变换

##  transform:
		-	rotate 旋转
		-	skew 斜切
		-	scale 缩放
		-	translate 位移

## 	transform-origin 设置变换的原点
	    -transform-origin: center center 0;

	==后写先执行，rotate,skew,scale都是围绕着origin点进行的,而**位移不受origin点影响**==
	
## box-reflect 倒影
		-	*(webkit 私有样式)*
		-	above | below | left | right
		-	距离(可选项)
		-	渐变(可选项)
		

		
## rotate
		-	rotateX
		-	rotateY
		-	rotateZ
		-	rotate3d

		

## scale
		-	scaleX
		-	scaleY
		-	scaleZ
		-	scaleX3d
		


## skew
		-	skewX
		-	skewY

		
## translate
		-	translateX
		-	translateY
		-	translateZ
		-	translate3d


## perspective 景深(透视)

		当前我们的视线和变换元素之间的距离
		==景深加给变换元素的父级==
		
## transform-style:(3d空间,元素在做3D变换的时候，是否保留子元素的3D变换)  
	-	flat(默认值) 平面空间 不保留子元素的3d效果
	-	preserve-3d 3D空间 保留子元素的3d效果
	-	父级有3D变换，子元素也有时，一定要加给父级



##  backface-visibility:hidden;
    -   隐藏背面(背面，角度和父级的角度相对的面，叫背面)
    -   样式加给组成盒子的面
	
## perspective-origin 景深原点(center center) 视线方向


    -   正N边形外角和 = 360
	-	正N边形外角 = 360/N;
	-	(180 - 正N边形外角)/2
	-	正切：Math.tan();
	-	直角三角形，对边和临边的比值
	
---------------------
## 渐变
1、linear-gradient 线性渐变

- 渐变颜色设置，或者说过渡点,每个点之间用","隔开，如：linear-gradient(red,blue,yellow)
- 过渡点的位置设置
	- 百分比
	- 具体数值
	- 当两个颜色的过渡点位置是重叠的，颜色和颜色之间就没有过渡，而是直接跳转
- 渐变方向设置
	- 关键字设置起点(需要加各个浏览器的前缀之后，才能被识别)
	- 角度设置
		- 0deg从下向上渐变
		- 角度增加为顺时针旋转	
- repeating-linear-gradient 重复渐变
- 渐变属性 background-image	

2、 radial-gradient 径向渐变	

- 渐变颜色设置，或者说过渡点,每个点之间用","隔开
- 过渡点的位置设置
	- 百分比
	- 具体数值
	- 当两个颜色的过渡点位置是重叠的，颜色和颜色之间就没有过渡，而是直接跳转
- 大小设置
	- 具体数值，火狐老版本不支持,以及加了前缀moz依然不支持
	- 最近端，最近角，最远端，最远角，包含或覆盖 closest-side, closest-corner, farthest-side, farthest-corner, contain or cover	
- 形状设置 ellipse||circle
	- 形状设置和大小只能同时设置一个 	
- 圆心点设置	
	- 必须加前缀才可以设置
	- 关键字
	- 具体数值






-----------

#TIPS:
> 浏览器CSS匹配顺序：

-    浏览器CSS匹配不是从左到右进行查找，而是从右到左进行查找。比如`#divBox p span.red{color:red;}`，浏览器的查找顺序如下：先查找html中所有class='red'的span元素，找到后，再查找其父辈元素中是否有p元素，再判断p的父元素中是否有id为divBox的div元素，如果都存在则匹配上。浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素。

> `display:none` 和`visibilty:hidden`的区别：

-    `display:none`和`visibility:hidden`都是把网页上某个元素隐藏起来的功能，但两者有所区别，使用`visibility:hidden`属性会使对象不可见，而 `display:none`属性会使这个对象彻底消失,不占高度。