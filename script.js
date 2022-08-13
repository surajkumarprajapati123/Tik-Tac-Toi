console.log("welcome to my tic tac toc game")
let game=new Audio("first.mp3");
let turnmusice =new Audio("tom-2.mp3");
let turn ="X";
let gameover=false;

const changeTurn=()=>{
    return turn ==="X"?"0":"X";
}
const checkwin=()=>
{
    let boxtexts=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2],    
    [3,4,5],    
    [6,7,8],    
    [0,3,6],    
    [1,4,7],    
    [2,5,8],
    [0,4,8],    
    [2,4,6],    
]
wins.forEach(e=>{
    if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&boxtexts[e[0]].innerText !==""){
        document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " won";
        game.play();
        gameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="80px";
    }
})
}
// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>
    {
        if(boxtext.innerText === '');
        {
            boxtext.innerText = turn;
           turn= changeTurn();
            turnmusice.play();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})
// add onclick  listner to reset the button
reset.addEventListener('click',(e)=>{
    let boxtextss=document.querySelectorAll('.boxtext');
    Array.from(boxtextss).forEach(element=>{
        element.innerText = "";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
        game.pause();
    });
    turn="X";
    gameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    
});