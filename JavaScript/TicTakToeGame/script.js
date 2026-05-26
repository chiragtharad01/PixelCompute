let count = 0;
let gameArea = document.querySelector('.game-grid');
let gridItems = document.querySelectorAll('.grid-item');
let outcome = document.querySelector('.outcome');
const checkGrid = () =>{
    for(let i = 0;i<3;i++){
        if(gridItems[i].innerText!="" && gridItems[i].innerText == gridItems[i+3].innerText && gridItems[i+3].innerText == gridItems[i+6].innerText){
            return [i,i+3,i+6];
        }
        if(gridItems[3*i].innerText!="" && gridItems[(3*i)].innerText == gridItems[(3*i)+1].innerText && gridItems[(3*i)+1].innerText == gridItems[(3*i)+2].innerText){
            return[(3*i),(3*i)+1,(3*i)+2];
        }
    }
    if (gridItems[0].innerText!="" && gridItems[0].innerText == gridItems[4].innerText && gridItems[4].innerText == gridItems[8].innerText){
        return [0,4,8];
    }
    if (gridItems[2].innerText!="" && gridItems[2].innerText == gridItems[4].innerText && gridItems[4].innerText ==  gridItems[6].innerText){
        return [2,4,6];
    }
}
gameArea.addEventListener('click',(e)=>{
    if(e.target.classList.contains('grid-item') && e.target.innerText == ""){
        let img  = document.createElement('img');
        if(count%2 === 0){
            img.setAttribute('src','./images/c.png')
            e.target.innerText = 'o';
        }else{
            img.setAttribute('src','./images/x.png')
            e.target.innerText = 'x';
        }
        e.target.appendChild(img);
        count++;
    }
    let indexes = checkGrid();
    if(indexes){
        [0, 1, 2].forEach(x => gridItems[indexes[x]].classList.add('color'));
        let h3 = document.createElement('h3');
        h3.textContent = `${gridItems[indexes[0]].innerText} wins`;
        let over = document.querySelector('.overlay');
        over.classList.remove('hidden');
        outcome.appendChild(h3);
    }
    else if(count == 9){
        let h3 = document.createElement('h3');
        h3.textContent = "Game Tied";
        outcome.appendChild(h3);
        let over = document.querySelector('.overlay');
        over.classList.remove('hidden');
        count = 0;
    }
})

const resetGame = ()=>{
    let game_divs = document.querySelectorAll('.grid-item');
    Array.from(game_divs).forEach((element)=>{
        if(element.classList.contains('color')){
            element.classList.remove('color');
        }
        element.innerText = ""
        element.replaceChildren()
    })
    let over = document.querySelector('.overlay');
    over.classList.add('hidden')
    let outcome = document.querySelector('.outcome');
    outcome.replaceChildren();
    count = 0
}