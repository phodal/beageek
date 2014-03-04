#Python#
你可能听过，也可能了解过，不过在这里我们可能不会去讲述那些基础的语法的东西，我们想说的是代码格式的重要性，在html中你可以这样去写你的代码

	<html><head><title>This is a Title
	</title></head><body><div class="content">
	<p>flakjfaklfjalfa</p></div>
	</body></html>
	
又或者是js的minify，它可能会使你的代码看起来像是这样的:

	function NolTracker(b,a){this.pvar=b;this.mergeFeatures(a)}
	
可能的是如果是python的话，你可能会遇到下面的问题。。

    File "steps.py", line 10
       try:
       ^
    IndentationError: expected an indented block
    
整洁的代码至少应该看上去要有整洁的衣服，就好像是我们看到的一个人一样，而后我们才会有一个好的印象。更主要的一点是代码是写给人看的，而衣服更多的时候对于像我这样的人来说，他首先应该是要保暖的，其次对于一个懒的人来说。。。

##开始之前##
我们终于又从一种语言跳到了另外一种语言，我们可能习惯了一种模式，而不敢于去尝试新的东西，这些或许是我们的一些习惯又或者是因为害怕等等。



##Python的Hello,World##
Python的Hello,World有两种形式，作为一种脚本语言来说，Javascript也是一种脚本语言，只是两者之间有太多的不同之处，每个人都会有不同的选择对于一种语言用来作为其的习惯。于是这就是我们的

    print "Hello,World"
    
当我们把我们的脚本在shell环境下运行时
<pre><code class="bash">
>>>  print "Hello,world"
  File "<stdin>", line 1
    print "Hello,world"
    ^
IndentationError: unexpected indent
>>> print "Hello,world"
Hello,world
>>>
</code></pre>

如果你没有预料到缩进带来的问题的时候，这就是一个问题了。

和我们在Javascript或者是CSS里面一样，我们也可以用一个文件的方式来写入我们的代码，文件后缀名是py，所以创建一个helloworld.py，输入上面的代码，然后执行

    python helloworld.py

一个理想的结果，或许你试过C语言的helloworld，如果了解过GCC的话应该是可以这样的:


    ./a.out
    
也就是执行编译完后的程序，需要注意的是helloworld.py没有编译，不过也会输出

    Hello,world

##我们想要的Hello,World##

	import cherrypy
	class HelloWorld(object):
    	def index(self):
        	return "Hello World!"
    	index.exposed = True

	cherrypy.quickstart(HelloWorld())