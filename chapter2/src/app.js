var Chinese=function(){
	this.country="China";
}

var Person=function(name,weight,height){
	this.name=name;
	this.weight=weight;
	this.height=height;	
	this.futrue=function(){
		return "future";
	}
}
Chinese.prototype=new Person();


var phodal=new Chinese("phodal",50,166);
document.write(phodal.country);