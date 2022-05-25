const game = document.querySelector('.game')
const arrayGame = game.querySelectorAll('div')
const scoreId = document.getElementById('score')


let valor;
let valorDiv;

let valorBotDiv;
let valorBot;

let valorResult;

let score = 0;


// numero aleatorio do maquia //
botGame = () => {

    valorBotDiv = arrayGame[Math.floor(Math.random() * 3)]

    valorBot = valorBotDiv.className

    console.log(valorBot)

    return 
}

// comparação dos resultados //
result = () => {
   
    if(valor === 'paper' && valorBot === 'rock' || valor === 'rock' && valorBot === 'scissors' || valor === 'scissors' && valorBot === 'paper'){
      
        valorResult = 'YOU WIN'

        score += 1

    }
    else if(valor === 'paper' && valorBot === 'paper' || valor === 'rock' && valorBot === 'rock' || valor === 'scissors' && valorBot === 'scissors'){

        valorResult = 'DRAW'

    }
    
    else{

        valorResult = 'YOU LOSE'

        score -= 1

    }

    return
    
}

r = () => {
    const container = document.querySelector('.container')
    container.removeChild(game)
    const resultDiv = document.createElement('div')
    resultDiv.classList.add('resultDiv')

    resultDiv.innerHTML = `
    <div class="resultDiv_myPick">

        <span>YOU PICKED</span>
        <div class="picked">

            ${valorDiv.outerHTML}

        </div>
      </div>
      <div class="resultDiv_result">

        <span>${valorResult}</span>

        <button onclick="reset()">PLAY AGAIN</button>

      </div>
      <div class="resultDiv_botPick">
        
        <span>THE HOUSE PICKED</span>
        <div class="picked">

           ${valorBotDiv.outerHTML}

        </div>
      </div>`

    container.appendChild(resultDiv)

    return 

}

// para ver o resultado //
ver = () => {
    console.log(score)
}

// minha escolha //
mySelect = () => {

    for(let i = 0; i < arrayGame.length; i++){
        arrayGame[i].addEventListener('click', () => {
            botGame()
            
            valorDiv = arrayGame[i]
            valor = valorDiv.className
            
            result()

            scoreId.innerHTML = score;

            r()
        })
    }
}

mySelect()

// feito //
reset = () => {
    const container = document.querySelector('.container')
    const resultDiv = document.querySelector('.resultDiv')
    container.removeChild(resultDiv)
    container.appendChild(game)
}