let count = 0
const tube = document.querySelector('.game_tube')
const mario = document.querySelector('.game_Mario')
const point = document.querySelector('.Point')

document.addEventListener('keydown', ()=>{
    mario.classList.add('jump')
    setTimeout(()=>{
        point.innerText = `Pontuação: ${count}`
        mario.classList.remove('jump')
        
    },700)
    count++
})

const loop = setInterval(() => {
    const tubePosition = tube.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
    const gameOver = document.querySelector('.gameOver')
    const replay = document.querySelector('.gameOver__h1')
    if(tubePosition <= 125 && tubePosition > 0 && marioPosition < 80){
        tube.style.animation = 'none'
        tube.style.left = `${tubePosition}px`
    
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = "./assets/Over.png"

        gameOver.showModal()
        replay.addEventListener('click', () =>{
            window.location.replace('./index.html')
        })
    }
}, 10)