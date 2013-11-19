document.getElementsByClassName = function(){
var tTagName ="*";
if(arguments.length > 1){
   tTagName = arguments[1];
}
if(arguments.length > 2){
   var pObj = arguments[2]
}
else{
   var pObj = document;
}
var objArr = pObj.getElementsByTagName(tTagName);
var tRObj = new Array();
for(var i=0; i<objArr.length; i++){
   if(objArr[i].className == arguments[0]){
    tRObj.push(objArr[i]);
   }
}
return tRObj;
}


function test(){ 
var obj=document.getElementsByClassName("gg"); 
for (var i=0;i<obj.length;i++){
obj[i].style.color="#ff0000";
}
}


