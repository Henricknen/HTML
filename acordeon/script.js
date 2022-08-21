const acordeonArray=document.getElementsByClassName('acordeon');     /* seleçiona todos elementos que tem a classe 'acordeon' */

for(i=0; i<acordeonArray.length; i++ ) {
    acordeonArray[i].addEventListener("click", function() {
        this.classList.toggle("selecionado");
        const painel = this.nextElementSibling;     /* rebece o proximo elemento da lista apos o botão */
        if(painel.style.maxHeight) {
            painel.style.maxHeight = null;
        } else {
            painel.style.maxHeight = painel.scrollHeight + "px";
        }
    });
}