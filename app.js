let high=document.createElement("h3");
let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started =false;
let level=0;
let highest=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game startted");
        started=true;
        levelup();

    }

})

function btnflash(btn){
    btn.classList.add("btnflash")
    setTimeout(() => {
        btn.classList.remove("btnflash");
        
    }, 250);
    
    
}



function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
        
    }, 250);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    
    //random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    gameseq.push(randcolor);

    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randbtn);
    btnflash(randbtn);
    
}
function checkans(idx){
    console.log(gameseq);
    console.log(userseq);
    // console.log(userseq.length-1);
    // console.log(gameseq.length-1);
    
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){

            
            setTimeout(levelup,1000);
            }
    }
    else{
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(()=>{
            body.style.backgroundColor="rgb(132, 163, 240)";
            
       },150);

       let score=level-1
       highest=Math.max(highest,score);
        
    
    h2.innerHTML=`Game Over !     Your  score was <b>${score}</b> <br>Press any key to start again`;
    high.innerText=`Highest Score:${highest}`;
    h2.insertAdjacentElement("afterend",high);
        reset();



}
    }

function btnpress(){
   
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);


}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}

let btsall=document.querySelectorAll(".btn");
for(btn of btsall){
    btn.addEventListener("click",btnpress);
  
}
