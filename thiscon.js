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

var letter=prompt("Enter your later");
letter=letter.toLowerCase();
if(letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter== "u"){
console.log("This is vowel")}
else if(letter=="1" || letter=="2" || letter=="3" || letter=="4" || letter== "5" || 
letter=="6" || letter=="7" || letter=="8" || letter=="9" || letter== "0"){
    console.log("This is number")}
else{
    console.log("This is consonats")
}
var sum=0;
for (var x=1; x<=5; x=x+1){
     sum =sum+x;
}
console.log(sum)
var num=[10,20,30,40,50];
var sum=0;
 for(var x=0;x<=4;x++){
     //console.log(num[x]);
     //sum=sum+x;
     sum=sum+num[x];
 }
 console.log(sum);
 
 const studentinfo={
    id:20,
    name:"anisul islam",
    gpa:3.80,
}
const {id,name}=studentinfo;
console.log(name);

let studentinfo={
    id:101,
    name:"jakir",
    langues:{
        native:"bangla",
        fluent:"english",
    },
    music:{
        rock:["ac/dc","pink"],
        metal:["metallica","slyer"]

    }
}
let{langues,music}=studentinfo;
console.log(langues);