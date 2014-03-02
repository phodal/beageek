var Person=function(){
	this.name="phodal";
	this.weight=50;
	this.height=166;
	this.future=function dream(){
		return "future";
	}
}
var person=new Person();
document.write(person.name+"<br>");
document.write(typeof person+"<br>");
document.write(typeof person.future+"<br>");
document.write(person.future()+"<br>");
