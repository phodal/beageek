#无处不在的三剑客#
这时我们终于了解了我们的三剑客，就这么可以结合到一起了，HTML+Javascript+CSS是这一切的基础。而我们用到的其他语言如PHP、Python、Ruby等等的最后都会变成上面的结果，当然还有Coffeescript之类的语言都是以此为基础，这才是我们需要的知识。

##Hello,Geek##
有了一些些的基础之后，我们终于能试着去写一些程序了。也是时候去创建一个像样的东西，或许你在一些见面设计方面的书籍看过类似的东西，可能我写得也没有那些内容好，只是这些都是一些过程。过去我们都是一点点慢慢过来的，只是现在我们也是如此，技术上的一些东西，事实上大家都是知道的。就好比我们都觉得我们可以开个超市，但是如果让我们去开超市的话，我们并不一定能赚钱。

学习编程的目的可能不在于我们能找到一份工作，那只是在编程之外的东西，虽然确实也是很确定的。但是除些之处，有些东西也是很重要的。、

过去没有理解为什么会一些人会不厌其烦地去回答别人的问题，有时候可能会想是一种能力越大责任越大的感觉，但是有时候在写一些博客或者回答别人的问题的时候我们又重新思考了这些问题，又重新学习了这些技能。所以这里可能说的不是关于编程的东西而是一些编程以外的东西，关于学习或者学习以外的东西。

##从源码学习##
过去总会觉得学了一种语言的语法便算是学了一种语言，于是有一天发现到了这个语言的项目上的时候，虽然会写上几行代码，但是却不像这语言的风格。于是这也是这一篇的意义所在了：

###HTML###
写好HTML的一个要点在于看别人写的代码，这只是一方面，我们所说的HTML方面的内容可能不够多，原因有很多，很多东西都需要在实战中去解决。读万卷书和行万里路，分不清哪个有重要的意义，但是如果可以同时做好两个的话，成长会很快的。

写好HTML应该会有下面的要点

 - 了解标准及遵守绝大多数标准
 - 注重可读性，从ID及CLASS的命名
 - 关注SEO与代码的联系
 
或许在这方面我也算不上很了解，不过按笔者的经验来说，大致就是如此。

###javascript###
这里以未压缩的jQuery源码和zepto.js作一个小小的比较，zepto.js是兼容jQuery的，因此我们举几个有意思的函数作一简单的比较，关于源码可以在官网上下载到。

在zepto.js下面判断一个值是否是函数的方面如下，

    function isFunction(value) { return type(value) == "function" }

而在jQuery下面则是这样的

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},
	
而他们的用法是一样的，都是

    $.isFunction();
    
jQuery的作法是将诸如isFunction,isArray这些函数打包到jQuery.extend中，而zepto.js的则是
也是这样的，只不过多了一行

    $.isFunction = isFunction

遗憾的是我也没去了解过为什么，之前我也没有看过这些库的代码，所以这个问题就要交给读者去解决了。jQuery里面提供了函数式编程接口，不过jQuery更多的是构建于CSS选择器之上，对于DOM的操作比javascript自身提供的功能强大得多。如果我们的目的在于更好的编程，那么可能需要诸如Underscore.js之类的库。或许说打包自己常用的函数功能为一个库，诸如jQuery

    function isFunction(value) { return type(value) == "function" }
    function isWindow(obj)     { return obj != null && obj == obj.window }
    function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
    function isObject(obj)     { return type(obj) == "object" }
    function isPlainObject(obj) {
      return isObject(obj) && !isWindow(obj) && obj.__proto__ == Object.prototype
    }
    function isArray(value) { return value instanceof Array }
    function likeArray(obj) { return typeof obj.length == 'number' }

我们需要去了解一些故事背后的原因，越来越害怕GUI的原因之一，在于不知道背后发生了什么，即使是开源的，我们也无法了解真正的背后发生什么了。对于不是这个工具、软件的用户来说，开源更多的意义可能在于我们可以添加新的功能，以及免费。如果没有所谓的危机感，以及认为自己一直在学习工具的话，可以试着去打包自己的函数，打包自己的库。