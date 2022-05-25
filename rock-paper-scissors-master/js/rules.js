const rules = document.querySelector('.rules')

closeDiv = (div) =>{
    const close = document.createElement('img')
    const span = document.createElement('span')
    const divRules = document.createElement('div')
    divRules.classList.add('rulesText')
    
    close.setAttribute('src', './images/icon-close.svg')
    span.innerHTML = 'RULES'

    divRules.appendChild(span)
    divRules.appendChild(close)

    close.addEventListener('click', () => {
        document.body.removeChild(div)
    })

    return divRules
}


rulesDiv = () => {
    const div = document.createElement('div')
    div.classList.add('rulesDiv')

    const img = document.createElement('img')
    img.setAttribute('src', './images/image-rules.svg')

    const divR = document.createElement('div')
    divR.classList.add('rulesDivC')


    divR.appendChild(closeDiv(div))
    divR.appendChild(img)
    div.appendChild(divR)

    return div
}

rules.addEventListener('click', () => {
    document.body.append(rulesDiv())
})
