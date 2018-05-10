var div1top=0;
var div1left=0;
var div2top=0;
var div2left=(window.innerWidth-50);
var div3top=(window.innerHeight-50);
var div3left=(window.innerWidth-50);
var div4top=(window.innerHeight-50);
var div4left=0;
var l=(window.innerWidth-50);
var u=(window.innerHeight-50);
var div1=document.createElement("div");
var div2=document.createElement("div");
var div3=document.createElement("div");
var div4=document.createElement("div");
var stap=document.createElement("div");
var play=document.createElement("div");
var restart=document.createElement("div");
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
document.body.appendChild(div4);
document.body.appendChild(play);
document.body.appendChild(stap);
document.body.appendChild(restart);
stap.style.left=800+"px";
stap.style.top=340+"px";
play.style.left=650+"px";
play.style.top=340+"px";
restart.style.left=740+"px";
restart.style.top=340+"px";


stap.innerHTML="||";
play.innerHTML=">";
div1.innerHTML="1";
div2.innerHTML="2";
div3.innerHTML="3";
div4.innerHTML="4";
div1.className="div1";
div2.className="div2";
div3.className="div3";
div4.className="div4";
stap.className="stop";
play.className="play";
restart.className="rest";
div1.style.left= 0+"px";
div1.style.top= 0+"px";
div2.style.top= 0+"px";
div2.style.left= (window.innerWidth-50)+"px";
div3.style.bottom= 0+"px";
div3.style.left=(window.innerWidth-50)+"px";
div4.style.left= 0+"px";
div4.style.top=(window.innerHeight-50)+"px";
var interval;
var interD;
var interL;
var interU;
play.addEventListener("click",function(){interval=setInterval(div1f,0.5)});
stap.addEventListener("click",stopmovig);
restart.addEventListener("click",reset);
function reset(){
    div1.style.left= 0+"px";
div1.style.top= 0+"px";
div2.style.top= 0+"px";
div2.style.left= (window.innerWidth-50)+"px";
div3.style.bottom= 0+"px";
div3.style.left=(window.innerWidth-50)+"px";
div4.style.left= 0+"px";
div4.style.top=(window.innerHeight-50)+"px";

div1top=0;
div1left=0;
div2top=0;
div2left=(window.innerWidth-50);
div3top=(window.innerHeight-50);
div3left=(window.innerWidth-50);
div4top=(window.innerHeight-50);
div4left=0;
}
function stopmovig(){
   clearInterval(interval);
}

function move(){
    movetoright(div1);
}
    
function div1f(){
    if(div1left<(window.innerWidth-50) && div1top==0){
        
            div1left++;   
        div1.style.left=div1left+"px";
            console.log(div1left);
            
        
    }
   
     
        
    
    if(div4left>=(window.innerWidth-100)){
        if(div1top<(window.innerHeight-50)&&div1left>0){
            div1top++;
            div1.style.top=div1top+"px"; 
            console.log(div1top); 
        }
     }
     if(div4top>=(window.innerHeight-100)){
        if(div1left>0&&div1top==(window.innerHeight-50)){
            div1left--;
            div1.style.left=div1left+"px";
            console.log(div1left);
        }
     }
     if(div4left<=50){
        if(div1top>0){
            div1top--;
            div1.style.top=div1top+"px";
            console.log(div1top);
        }
    }
    
     div2f(); 
   
    
}

function div2f(){
    if(div1left>=(window.innerWidth-100)){
        if(div2top<(window.innerHeight-50)){
            div2top++;
            div2.style.top=div2top+"px";
            console.log(div2top);
        }
    }
   
    if(div1top>=(window.innerHeight-100)){
        if(div2left>0&&div2top>0){
            div2left--;
            div2.style.left=div2left+"px";
            console.log(div2left);
        }
         
    }
    if(div2top<(window.innerHeight-50)&&div2left<(window.innerWidth-50)){
        
            div2left++;
            div2.style.left=div2left+"px";
            console.log(div2left);
        
         
    }
    if(div1left<=50){
        if(div2top>0){
            div2top--;
            div2.style.top=div2top+"px";
            console.log(div2top);
        }
    }
        div3f();
    
  
    
}
function div3f(){
    if(div2top>=(window.innerHeight-100)){
    if(div3left>0&&div3top==(window.innerHeight-50)){
        div3left--;
       div3.style.left=div3left+"px";
        console.log(div3left);
    } 
}
    if(div2left<=50){
        if(div3top>0&&div3left==0){
            div3top--;
            div3.style.top=div3top+"px";
            console.log(div3top);
        }
        
    }
    if(div2left>=(window.innerWidth-100)){
        if(div3top<(window.innerHeight-50)&&div3left>0){
            div3top++;
            div3.style.top=div3top+"px";
            console.log(div3top);
        }
        
    }
    if(div3top==0&&div3left<(window.innerWidth-50)){
        
            div3left++;
            div3.style.left=div3left+"px";
            console.log(div3left);
        
    }
    
    
        div4f();
    
   
    
}
function div4f(){
    if(div3left<=50){
        if(div4top!=0&&div4left==0){
            div4top--;
            div4.style.top=div4top+"px"; 
            }
    }
    
    if(div4top==0){
        if(div4left<(window.innerWidth-50)){
            div4left++;   
        div4.style.left=div4left+"px";
            console.log(div4left);
            
        }
    } 
    if(div3top==0&&div3left>=(window.innerWidth-100)){
       if(div4top<(window.innerHeight-50)&&div4left==(window.innerWidth-50)){
           div4top++;
           div4.style.top=div4top+"px";
           console.log(div4top);
       }
    }
    if(div3top>=(window.innerHeight-100)){
        if(div4left>0&&div4top==(window.innerHeight-50)){
            div4left--;
            div4.style.left=div4left+"px";
            console.log(div4left);
        }
    }
   

}


