var Person=function(name,weight,height){
	this.name=name;
	this.weight=weight;
	this.height=height;	
	this.future=function(){
		return "future";
	};
};
var phodal=new Person("phodal",50,166);
document.write(phodal.name+"<br>");
document.write(phodal.weight+"<br>");
document.write(phodal.height+"<br>");
document.write(phodal.future()+"<br>");