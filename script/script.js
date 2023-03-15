let count = 0
const tube = document.querySelector('.game_tube')
const mario = document.querySelector('.game_Mario')

document.addEventListener('keydown', ()=>{
    const point = document.querySelector('.Point')
    mario.classList.add('jump')
    setTimeout(()=>{
        mario.classList.remove('jump')
        count++
        point.innerText = `Pontuação: ${count}`
    },700)
})

const loop = setInterval(() => {
    const tubePosition = tube.offsetLeft;
    if(tubePosition <= 125){
        tube.style.animation = 'none'
        tube.style.left = `${tubePosition}px`

    }
}, 10)