const image1=document.querySelector(".img1");
const image2=document.querySelector(".img2");



var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw happened"
}

// console.log(randomNumber1,randomNumber2);




  
image1.setAttribute("src",`images/dice${randomNumber1}.png`);
image2.setAttribute("src",`images/dice${randomNumber2}.png`)