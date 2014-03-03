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
