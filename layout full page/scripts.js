const elementos = document.querySelectorAll('[data-anima]');      /* seleçiona todos elementos que tem o parâmetro 'data-anima' */
const animacaoClass = "animacao";

function animaScroll() {        /* está função anima o 'scroll' a rolagem */
    const topoPginaNaJanela = window.pageYOffset + ((window.innerHeight * 3)/ 4);       /* com este calculo a animação irá aparecer acerca de 3/4 da janela */
    elementos.forEach(function(elemento) {      /* percorre todos itens de 'elementos' */
    const topoPginaNaJanela = window.pageYOffset + ((window.innerHeight * 3)/ 4);       /* com este calculo a animação irá aparecer acerca de 3/4 da janela */
        if(topoPginaNaJanela > elemento.offsetTop) {
            elemento.classList.add(animacaoClass);
        } else {
            elemento.classList.remove(animacaoClass);            
        }
    });     
}

if(elementos.length) {      /* função verifica se array 'elementos' tem elementos pra chamar a função 'animaScroll' */
    window.addEventListener('scroll', function() {
        animaScroll();
    })
}