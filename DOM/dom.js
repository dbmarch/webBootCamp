var h1=document.querySelector("h1");
h1.style.color = "pink";

var body=document.querySelector("body");
var isBlue = false;

h1.addEventListener ("click",function(){
    h1.style.background= "orange";
})

document.querySelector("ul").addEventListener("click", function() {
    console.log("UL was clicked");
});

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener ("click", function() {
       this.style.color= "Purple";
    })
}
// setInterval(function(){
//             if(isBlue){
//                 body.style.background = "white";
//             }else{
//                 body.style.background= "#3498db";
//             }
//             isBlue= !isBlue;
//         },1000);
//          