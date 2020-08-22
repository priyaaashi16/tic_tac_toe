window.addEventListener('load',bindEvent);
function bindEvent(){
    var squares = document.querySelectorAll('button');
    for(var i=0; i<squares.length; i++)
    {
        squares[i].addEventListener('click',change);
        squares[i].addEventListener('click',insertValue);
    }
}
var count=0;
var O=[];
var X=[];
var k=0,j=0;
function change()
{   
    if(this.textContent==='')
    {
        count++;
    }
    if(this.textContent==='' && count%2==0)
    {
        this.textContent='O';
    }
    if(this.textContent==='' && count%2==1)
    {
        this.textContent='X';
    }
    if(count==9)
    result(count,this.textContent);
}
function insertValue(){
    var value=this.id;
    var r=0;
    for(var i=0;i<5;i++){
        if(value==O[i] || value==X[i]) 
        return 0;
         }
             if(count%2==0){
                 O[k]=value;
                //  console.log(O[k]);
                 k++;
                 r=check(O);
                 result(r,this.textContent)
                 }
             if(count%2==1){
                 X[j]=value;
                //  console.log(X[j]);
                 j++;
                 r=check(X);
                 result(r,this.textContent);
                }   
 }
 function check(ran){
var win=[["b1","b2","b3"],["b4","b5","b6"],["b7","b8","b9"],["b1","b4","b7"],
         ["b2","b5","b8"],["b3","b6","b9"],["b1","b5","b9"],["b3","b5","b7"]];
    for(var i=0;i<8;i++){
        var temp=0;
        for(var j=0;j<5;j++){
            for(var k=0;k<3;k++){
                if(ran[j]==win[i][k]){
                    temp++;
                   }
                }
            }
         if(temp==3){
             disableRest();
             return 1;
           } 
    }
}
function result(r,r1){
    var msg="Winner "+r1;
    var msg1="X/O \n DRAW!!!";
    if(r==1) 
    return document.getElementById('result').innerText=msg;
    if(r==9)
    return document.getElementById('result').innerText=msg1;
}
function disableRest(){
    var dis=document.querySelectorAll('button');
    for(var i=0;i<dis.length;i++)
    {
        if(dis[i].textContent=='')
        dis[i].disabled=true;
    }
} 

