const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('.paragrafos');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
    console.log(p);
}
