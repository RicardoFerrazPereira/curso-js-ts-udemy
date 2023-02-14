const paragrafos = document.querySelector('.paragrafos'); // selecionar o elemento (div -> paragrafos).
const ps = paragrafos.querySelectorAll('p'); // selecionar vários elementos (os p's)

const estilosBody = getComputedStyle(document.body); // Pegou todos os estilos de css computados no body
const backgroundColorBody = estilosBody.backgroundColor; // Pegamos especificadamente a cor de fundo (backgroundColor)
console.log(backgroundColorBody);

// Pegar a cor de fundo do body e aplicar como cor de fundo dos ('p')

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody; // Pegamos a cor de fundo do body e jogamos como cor de fundo do 'p'
    p.style.color = '#fff' // Aplicamos a cor branca a fonte
}

