const menus = document.querySelectorAll('[data-menu]');      /* selecionado todos elementos que usam 'data-menu' */

menus.forEach(function(e) {      /* percorrendo os itens do menu */
    e.addEventListener('click', function() {        /* adiçionando evento 'click' para todos elementos */
        for(i = 0; i < menus.length; i++) {
            menus[i].classList.remove('ativo');          /* remove a classe 'ativo' de todos */
        }

        e.classList.add('ativo');        /* adiçionando a classe 'ativo' no elemento que foi clicado */
    });
});

const btnMenu = document.getElementsByClassName('btnMenu')[0];
const menu = document.getElementsByClassName('menu')[0];
btnMenu.addEventListener('click', function() {
    menu.classList.toggle('menuAberto');        /* 'toggle' aiçiona e remove as classes */
});