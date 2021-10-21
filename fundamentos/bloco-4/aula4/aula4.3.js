let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim'


/*for (const key in info) {
    console.log(key)
}

for (let key in info) {
    console.log(info[key])
} */
 let info2 = {
     personagem: 'Tio patinhas',
     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
     nota: 'O Ultimo MacPatinhas',
     recorrente: 'Sim'
}

for (k in info, info2) {
    if (info[k] == info2[k]) {
        console.log(k, 'para ambos')
        continue
    }
    console.log(info[k], ' e ', info2[k])
}