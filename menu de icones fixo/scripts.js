const menu = document.querySelectorAll('[data-menu]');      /* selecionado todos elementos que usam 'data-menu' */

menu.forEach(function(e) {      /* percorrendo os itens do menu */
    e.addEventListener('click', function() {        /* adiçionando evento 'click' para todos elementos */
        for(i = 0; i < menu.length; i++) {
            menu[i].classList.remove('ativo');          /* remove a classe 'ativo' de todos */
        }

        e.classList.add('ativo');        /* adiçionando a classe 'ativo' no elemento que foi clicado */
    });
});