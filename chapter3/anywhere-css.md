#无处不在的CSS#

CSS或许你觉得他一点儿也不重要，HTML好比是建筑的框架，CSS就是用于装修房子。那么Javascript呢，我听到的最有趣的说法是小三，先让我们回到代码上来吧。

##CSS##

下面就是我们之前说到的代码，css将Red三个字母变成了红色。

	<!DOCTYPE html>
	<html>
	<head>
	</head>
	<body>
		<p id="para" style="color:red">Red</p>
	</body>
		<script type="text/javascript" src="app.js"></script>
	</html>
	
只是，

	var para=document.getElementById("para");
	para.style.color="blue";
	
将字体变成了蓝色，CSS+HTML让页面有序的工作着，但是Javascript打乱了这些秩序，不过却也让生活多姿多彩，小三不都是这样的么——终于可以理解，为什么以前人们对于Javascript没有好感了？不过这里要讲的是正室，也就是CSS，这时还没有Javascript。
	
![Alt text](./src/redfonts.png)

##关于CSS##

这不是一篇好的关于讲述CSS的书籍，所以不会去说CSS是怎么来的，有些东西既然我们可以很容易从其他地方知道，也就不需要花太多时间去重复。诸如重构等这些的目的之一也在于去除重复的代码，不过有些重复是不可少的，也是有必要的，而通常这些东西可能是由其他地方复制过来的。

到目前为止我们没有依赖于任何特殊的硬件或者是软件，对于我们来说我们最基本的需求就是一台电脑，或者可以是你的平板电脑，当然也可以是你的智能手机，因为他们都有个浏览器，而这些都是能用的，对于我们的CSS来说也不会有例外的。

CSS是来自于(Cascading Style Sheets)，到今天我也没有记得他的全称，CSS还有一个中文名字是层叠式样式表，翻译成什么样的可能并不是我们关心的内容，我们需要关心的是他能做些什么。作为三剑客之一，它的主要目的在于可以让我们方便灵活地去控制Web页面的外观表现。我们可以用它做出像淘宝一样复杂的界面，也可以像我们的书本一样简单，不过如果要和我们书本一样简单的话，可能不需要用到CSS。HTML一开始就是依照报纸的格式而设计的，我们还可以继续用上面说到的编辑器，又或者是其他的。如果你喜欢DreamWeaver那也不错，不过一开始使用IDE可无助于我们写出良好的代码。

忘说了，CSS也是有版本的，和windows，Linux内核等等一样，但是更新可能没有那么频繁，HTML也是有版本的，JS也是有版本的，复杂的东西不是当前考虑的内容。

##代码结构##

对于我们的上面的Red示例来说，如果没有一个好的结构，那么以后可能就是这样子。

	<!DOCTYPE html>
	<html>
	<head>
	</head>
	<body>
		<p style="font-size: 22px;color:#f00;text-align: center;padding-left: 20px;">如果没有一个好的结构</p>
		<p style="	font-size:44px;color:#3ed;text-indent: 2em;padding-left: 2em;">那么以后可能就是这样子。。。。</p>
	</body>
	</html>
	
虽然我们看到的还是一样的:
	
![Alt text](./src/nostyle.png)
	