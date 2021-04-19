function Pop(namearg,agearg,idarg){
	this.name=namearg;
	this.age=agearg;
	this.id=idarg;
	this.all=function(){
		console.log(namearg);
		console.log(agearg);
		console.log(idarg);
	}
}
var doc1=new Pop("kamal",30,1);
var doc2=new Pop("jamal",30,2);
var doc3=new Pop("ktth",30,3);
var doc4=new Pop("sadiq",30,4);

doc4.all()