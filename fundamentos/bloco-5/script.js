document.querySelector('#header-container').style.backgroundColor = "green"
let div1 = document.querySelectorAll('.emergency-tasks div')
for (i of div1) {
    i.style.backgroundColor = 'orange'
}
let t1 = document.querySelectorAll('.emergency-tasks h3')
for (i of t1) {
    i.style.backgroundColor = 'pink'
}
let div2 = document.querySelectorAll('.no-emergency-tasks div')
for (i of div2) {
    i.style.backgroundColor = 'greenyellow'
}
let t2 = document.querySelectorAll('.no-emergency-tasks h3')
for (i of t2) {
    i.style.backgroundColor = 'darkgray'
}
let pe = document.querySelector('#footer-container')
pe.style.backgroundColor = 'darkgreen'