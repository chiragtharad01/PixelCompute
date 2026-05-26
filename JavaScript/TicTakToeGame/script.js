let count = 0;
let gameArea = document.querySelector('.game-grid');
let gridItems = document.querySelectorAll('.grid-item');
let outcome = document.querySelector('.outcome');
gameArea.addEventListener('click',(e)=>{
    if(e.target.classList.contains('empty')){
        let img  = document.createElement('img');
        
        if(count%2 === 0){
            img.setAttribute('src','./images/c.png')
            e.target.classList.add('o');
            e.target.classList.remove('empty');
        }else{
            img.setAttribute('src','./images/x.png')
            e.target.classList.add('x');
            e.target.classList.remove('empty');
        }
        e.target.appendChild(img);
        count++;
    }
        if((gridItems[0].classList.contains('o') && gridItems[3].classList.contains('o') && gridItems[6].classList.contains('o')) || (gridItems[1].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[7].classList.contains('o')) || (gridItems[2].classList.contains('o') && gridItems[5].classList.contains('o') && gridItems[8].classList.contains('o')) || (gridItems[0].classList.contains('o') && gridItems[1].classList.contains('o') && gridItems[2].classList.contains('o')) || (gridItems[3].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[5].classList.contains('o')) || (gridItems[6].classList.contains('o') && gridItems[7].classList.contains('o') && gridItems[8].classList.contains('o')) || (gridItems[0].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[8].classList.contains('o')) || (gridItems[2].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[6].classList.contains('o'))){
            if((gridItems[0].classList.contains('o') && gridItems[3].classList.contains('o') && gridItems[6].classList.contains('o'))){
                gridItems[0].classList.add('color');
                gridItems[3].classList.add('color');
                gridItems[6].classList.add('color');
            }
            else if((gridItems[1].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[7].classList.contains('o'))){
                gridItems[1].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[7].classList.add('color');
            }else if((gridItems[2].classList.contains('o') && gridItems[5].classList.contains('o') && gridItems[8].classList.contains('o'))){
                gridItems[2].classList.add('color');
                gridItems[5].classList.add('color');
                gridItems[8].classList.add('color');
            }else if((gridItems[0].classList.contains('o') && gridItems[1].classList.contains('o') && gridItems[2].classList.contains('o'))){
                gridItems[0].classList.add('color');
                gridItems[1].classList.add('color');
                gridItems[2].classList.add('color');
            }else if((gridItems[3].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[5].classList.contains('o'))){
                gridItems[3].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[5].classList.add('color');
            }else if((gridItems[0].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[8].classList.contains('o'))){
                gridItems[0].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[8].classList.add('color');
            }
            else if((gridItems[2].classList.contains('o') && gridItems[4].classList.contains('o') && gridItems[6].classList.contains('o'))){
                gridItems[2].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[6].classList.add('color');
            }
            else{
                gridItems[6].classList.add('color');
                gridItems[7].classList.add('color');
                gridItems[8].classList.add('color');
            }
            let h3 = document.createElement('h3');
            h3.textContent = "o wins";
            outcome.appendChild(h3);
            let over = document.querySelector('.overlay');
            over.classList.remove('hidden');
        }
        if((gridItems[0*3].classList.contains('x') && gridItems[1*3].classList.contains('x') && gridItems[2*3].classList.contains('x')) || (gridItems[1].classList.contains('x') && gridItems[4].classList.contains('x') && gridItems[7].classList.contains('x')) || (gridItems[2].classList.contains('x') && gridItems[5].classList.contains('x') && gridItems[8].classList.contains('x')) || (gridItems[0].classList.contains('x') && gridItems[1].classList.contains('x') && gridItems[2].classList.contains('x')) || (gridItems[3].classList.contains('x') && gridItems[4].classList.contains('x') && gridItems[5].classList.contains('x')) || (gridItems[6].classList.contains('x') && gridItems[7].classList.contains('x') && gridItems[8].classList.contains('x'))){
            if((gridItems[0].classList.contains('x') && gridItems[3].classList.contains('x') && gridItems[6].classList.contains('x'))){
                gridItems[0].classList.add('color');
                gridItems[3].classList.add('color');
                gridItems[6].classList.add('color');
            }
            else if((gridItems[1].classList.contains('x') && gridItems[4].classList.contains('x') && gridItems[7].classList.contains('x'))){
                gridItems[1].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[7].classList.add('color');
            }else if((gridItems[2].classList.contains('x') && gridItems[5].classList.contains('x') && gridItems[8].classList.contains('x'))){
                gridItems[2].classList.add('color');
                gridItems[5].classList.add('color');
                gridItems[8].classList.add('color');
            }else if((gridItems[0].classList.contains('x') && gridItems[1].classList.contains('x') && gridItems[2].classList.contains('x'))){
                gridItems[0].classList.add('color');
                gridItems[1].classList.add('color');
                gridItems[2].classList.add('color');
            }else if((gridItems[3].classList.contains('x') && gridItems[4].classList.contains('x') && gridItems[5].classList.contains('x'))){
                gridItems[3].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[5].classList.add('color');
            }else if((gridItems[0].classList.contains('x') && gridItems[4].classList.contains('x') && gridItems[8].classList.contains('x'))){
                gridItems[0].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[8].classList.add('color');
            }
            else if((gridItems[2].classList.contains('x') && gridItems[4].classList.contains('x') && gridItems[6].classList.contains('x'))){
                gridItems[2].classList.add('color');
                gridItems[4].classList.add('color');
                gridItems[6].classList.add('color');
            }
            else{
                gridItems[6].classList.add('color');
                gridItems[7].classList.add('color');
                gridItems[8].classList.add('color');
            }
            let h3 = document.createElement('h3');
            h3.textContent = "x wins";
            outcome.appendChild(h3);
            let over = document.querySelector('.overlay');
            over.classList.remove('hidden');
        }
})

const resetGame = ()=>{
    let game_divs = document.querySelectorAll('.grid-item');
    Array.from(game_divs).forEach((ele)=>{
        if(ele.classList.contains('color')){
            ele.classList.remove('color');
        }
        if(ele.classList.contains('o')){
            ele.classList.remove('o')
        }
        if(ele.classList.contains('x')){
            ele.classList.remove('x');
        }
        if(!ele.classList.contains('empty')){
            ele.classList.add('empty');
        }
        
        ele.replaceChildren()
    })
    let over = document.querySelector('.overlay');
    if(!over.classList.contains('hidden')){
        over.classList.add('hidden');
    }
    let outcome = document.querySelector('.outcome');
    outcome.replaceChildren();
}