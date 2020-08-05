const text = document.querySelector(".anim");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent ="";

for (let i=0; i< splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}
let char =0;
let timer = setInterval(onTick, 400);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('anim');
    char++
    if(char ===splitText.length){
        Complete();
        return;
    }
}

const complete = () =>{
    clearInterval(timer);
    timer = null;
}