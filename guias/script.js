function abrirTab(evt, nomeTab) {           /* ocultando os 'article' */
    const conteudoTab = document.getElementsByClassName("conteudoTab");
    for(var i = 0; i < conteudoTab.length; i++) {
        conteudoTab[i].style.display = "none";
    }

    const btnTabs = document.querySelectorAll('[data-btnTabs]');  /* tirnado o 'ative' dos button */
    for(var i = 0; i < btnTabs.length; i++) {
        btnTabs[i].classList.remove('ativo');
    }

    document.getElementById(nomeTab).style.display = "block";       /* mostrando somentte o que foi clicado */
    evt.currentTarget.classList.add('ativo');       /* a 'tab' irá aparecer açionada com cor diferente  */
}

document.getElementById(primeiro).click;        /* deixando o primeiro botão açionado */