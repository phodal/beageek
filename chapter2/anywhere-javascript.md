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
			<script type="text/javscript">
				document.write('hello,world');
			</script>
		</head>
		<body></body>
	</html>
	
	