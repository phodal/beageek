#无处不在的Javascript#

Javascript现在已经无处不在了，也许你正打开的某个网站他可能是node.js+json+javascript+mustache.js完成的，虽然你还没理解上面那些是什么，也正是因为你不理解才需要去学习更多的东西。但是Javascript已经无处不在了，可能会在你手机上的某个app里，在你浏览的网页里，在你IDE中的某个进程中运行的。

##Javascript的Hello,world##
这里我们还需要有一个helloworld.html，Javascript是专为网页交互而设计的脚本语言，所以我们一点点来开始这部分的旅途，先写一个符合标准的helloworld.html

	<!DOCTYPE html>
	<html>
		<head></head>
		<body></body>
	</html>
	
然后开始融入我们的javascript，向HTML中插入Javascript的方法，就需要用到html中的\<script>标签，我们先用页面嵌入的方法来写helloworld。

	<!DOCTYPE html>
	<html>
		<head>
			<script>
				document.write('hello,world');
			</script>
		</head>
		<body></body>
	</html>

按照标准的写法，我们还需要声明这个脚本的类型

	<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript">
				document.write('hello,world');
			</script>
		</head>
		<body></body>
	</html>
	
没有显示hello,world?试试下面的代码

	<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript">
				document.write('hello,world');
			</script>
		</head>
		<body>
			<noscript>
				disable Javascript
			</noscript>
		</body>
	</html>
	
###更js一点###
我们需要让我们的代码看上去更像是js，同时是以js结尾。C语言的源码但是以C结尾的，所以我们要让我们的代码看上去更正式一点。于是我们需要在helloworld.html的同文件夹下创建一个app.js，里面写着

<pre><code class="javascript">document.write('hello,world');
</code></pre>

同时我们的helloworld.html还需要告诉我们的浏览器js代码在哪里

	<!DOCTYPE html>
	<html>
		<head>
			<script type="text/javascript" src="app.js"></script>
		</head>
		<body>
			<noscript>
				disable Javascript
			</noscript>
		</body>
	</html>
	
###从数学出发###
让我们回到第一章讲述的小明的问题，<strong>从实际问题下手编程，更容易学会编程</strong>。小学时代的数学题最喜欢这样子了——某商店里的糖一个5块钱，小明买了3个糖，小明一共花了多少钱的问题。在编程方面，也许我们还算是小学生。最直接的方法就是直接计算3x5=?

<pre><code class="javascript">document.write(3*5);
</code></pre>

document.write实际也我们可以理解为输出，也就是往页面里写入3*5的结果，在有双引号的情况下会输出字符串。我们便会在浏览器上看到15，这便是一个好的开始，也是一个不好的开始。

###设计和编程###
对于我们的实际问题如果总是止于所要的结果，很多年之后，我们成为了code monkey。对这个问题进行一次设计，所谓的设计有些时候会把简单的问题复杂化，有些时候会使以后的扩展更加简单。这一天因为这家商店的糖价格太高了，于是店长将价格降为了4块钱。

<pre><code class="javascript">
document.write(3*4);
</code></pre>

于是我们又得到了我们的结果，但是下次我们看到这些代码的时候没有分清楚哪个是糖的数量，哪个是价格，于是我们重新设计了程序

<pre><code class="javascript">
tang=4;
num=3;
document.write(tang*num);
</code></pre>

这才能叫得上是程序设计，或许你注意到了";"这个符号的存在，我想说的是这是另外一个标准，我们不得不去遵守，也不得不去fuck。

###函数###
记得刚开始学三角函数的时候，我们会写
  
    sin 30=0.5
    
而我们的函数也是类似于此，换句话说，因为很多搞计算机的先驱都学好了数学，都把数学世界的规律带到了计算机世界，所以我们的函数也是类似于此，让我们做一个简单的开始。
<pre><code class="javascript">
function hello(){
	return document.write("hello,world");
}
hello();
</code></pre>
当我第一次看到函数的时候，有些小激动终于出现了。我们写了一个叫hello的函数，它返回了往页面中写入hello,world的方法，然后我们调用了hello这个函数，于是页面上有了hello,world。

<pre><code class="javascript">
function sin(degree){
	return document.write(Math.sin(degree));
}
sin(30);
</code></pre>
在这里degree称之为变量，也就是可以改变的量。
于是输出了-0.9880316240928602，而不是0.5，因为这里用的是弧度制，而不是角度制。

    sin(30)
    
的输出结果有点类似于sin 30。写括号的目的在于，括号是为了方便解析，这个在不同的语言中可能是不一样的，比如在ruby中我们可以直接用类似于数学中的表达:

<pre><code class="ruby">
2.0.0-p353 :004 > Math.sin 30
=> -0.9880316240928618
2.0.0-p353 :005 >
</code></pre>

我们可以在函数中传入多个变量，于是我们再回到小明的问题，就会这样去写代码。

<pre><code class="javascript">
function calc(tang,num){
	result=tang*num;
	document.write(result);
}
calc(3,4);
</code></pre>

但是从某种程度上来说，我们的calc做了计算的事又做了输出的事，总的来说设计上有些不好。

###重新设计###
我们将输出的工作移到函数的外面，
<pre><code class="javascript">
function calc(tang,num){
	return tang*num;
}
document.write(calc(3,4));
</code></pre>

接着我们用一种更有意思的方法来写这个问题的解决方案
<pre><code class="javascript">
function calc(tang,num){
	return tang*num;
}
function printResult(tang,num){
	document.write(calc(tang,num));
}
printResult(3, 4)
</code></pre>
看上去更专业了一点点，如果我们只需要计算的时候我们只需要调用calc，如果我们需要输出的时候我们就调用printResult的方法。

###object和函数###
我们还没有说清楚之前我们遇到过的document.write以及Math.sin的语法看上去很奇怪，所以让我们看看他们到底是什么，修改app.js为以及内容

    document.write(typeof document);
    document.write(typeof Math);

typeof document会返回document的数据类型，就会发现输出的结果是

    object object
    
所以我们需要去弄清楚什么是object。对象的定义是

<blockquote>无序属性的集合，其属性可以包含基本值、对象或者函数。</blockquote>

创建一个object，然后观察这便是我们接下来要做的 
