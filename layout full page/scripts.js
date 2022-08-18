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

function cliqueModal(img) {     // '(img)' é um parâmetro que é a imagem clicada
    const janelaModal = document.getElementById('janelaModal');      /* para elementos que não serão alterados, não poderão ser alterados se ultiliza 'const' */
    const imgModal = document.getElementById('imgModal');
    const txtModal = document.getElementById('txtModal');
    const fecharModal = document.getElementById('btnFechar');

    janelaModal.classList.remove("escondeJanelaModal");     /* removendo a classe que escode o 'modal */
    janelaModal.classList.add("mostraJanelaModal");     /* mostrando a clasee 'modal' */

    imgModal.src = img.src;     
    imgModal.alt = img.alt;     /* carregando a imagem e o texto 'alt' das imagens */
    txtModal.innerHTML = img.alt;

    btnFechar.onclick = function() {
        janelaModal.classList.add("escondeJanelaModal");     
        janelaModal.classList.removed("mostraJanelaModal");   
    }
}