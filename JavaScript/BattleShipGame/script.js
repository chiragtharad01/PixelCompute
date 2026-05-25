let divs = document.querySelectorAll(".grid-item");
let set = new Set()
while(set.size<5){
    let num = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    console.log(num)
    set.add(num);
}

let arr = Array.from(set);
console.log(arr);
arr.forEach((item)=>{
    let image = document.createElement("img");
    image.setAttribute('src',"./images/b.png");
    divs[item].appendChild(image);
    image.classList.add('hidden')
    image.classList.add('b')
    // divs[item].style.backgroundImage = "url('./images/b.png')";
})
for(let i = 0;i<16;i++){
    if(!arr.includes(i)){
        let image = document.createElement("img");
    image.setAttribute('src',"./images/w.webp");
    divs[i].appendChild(image);
    image.classList.add('hidden')
    image.classList.add('w')
        // divs[i].style.backgroundImage = "url(./images/w.webp)"
    }
}
let game = document.getElementsByClassName('game-grid');
let battleCount = 0;
let waterCount = 0;
game[0].addEventListener('click',(e)=>{
    if(e.target.classList.contains('grid-item')){
        console.log(e.target)
        e.target.children[0].classList.remove('hidden')
        if(e.target.children[0].classList.contains('b')) battleCount++;
        else waterCount++; 
        console.log(battleCount);
    }
    if(battleCount == 5){
        console.log("Entered here")
        let but = document.getElementById("ok-button")
        let output = document.querySelector(".main-outcome-container");
        let h2 = document.createElement('h2');
        h2.textContent="You Won";
    
        output.children[0].insertBefore(h2,but) ;
        output.classList.remove('hidden')
    }
    else if(battleCount+waterCount == 8){
        console.log("Entered here")
        let but = document.getElementById("ok-button")
        let output = document.querySelector(".main-outcome-container");
        let h2 = document.createElement('h2');
        h2.textContent="You Lost";
    
        output.children[0].insertBefore(h2,but) ;
        output.classList.remove('hidden')
    }
})
let but = document.getElementById("ok-button");
but.addEventListener('click',(e)=>{
    // let output = document.querySelector(".outcome-container");
    // output.classList.add('hidden')
    location.reload()
})
let button = document.getElementById("reset-button");
button.addEventListener('click',(e)=>{
    // let output = document.querySelector(".outcome-container");
    // output.classList.add('hidden')
    location.reload()
})