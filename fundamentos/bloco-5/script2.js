/* let elem1 = document.getElementById('elementoOndeVoceEsta')
elem1.parentElement.style.color = 'red'

elem1.firstChild.innerHTML = 'opa'

document.getElementById('pai').parentElement.style.color = 'red'

let pai = document.getElementById('pai')
pai.firstElementChild.style.color = 'blue'

let irmao = document.getElementById('elementoOndevoceEsta').previousElementSibling
irmao.innerText = 'alo'

elem1.innerText = 'alo'

let last = pai.lastElementChild
let tercF = last.previousElementSibling
tercF.innerText = 'opaaa'
 */
/* let elem1 = document.getElementById('elementoOndeVoceEsta')
let n1 = document.createElement('section')
elem1.appendChild(n1)
let pai = document.getElementById('pai')
pai.appendChild(n1)
let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')
filhoDoFilho.id = 'ultFilho'
filhoDoFilho.appendChild(n1)
let ultimo = document.querySelector('#ultFilho')
ultimo.appendChild(n1) */

let l1 = document.querySelector('#elementoOndeVoceEsta')

let l2 = document.querySelector('#segundoEUltimoFilhoDoFilho')
let l3 = document.querySelector('#pai')
let l4 = document.querySelector('#terceiroFilho')
let l5 = document.querySelector('#quartoEUltimoFilho')

l1.removeChild(l2)
l3.removeChild(l4)
l3.removeChild(l5)
