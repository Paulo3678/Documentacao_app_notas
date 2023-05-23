const btns_copiar = document.querySelectorAll(".btn-copiar");


btns_copiar.forEach(btn => {
    btn.addEventListener("click", e => {
        copiarTexto(btn.getAttribute("data-url"));
        btn.classList.add("copiado");
        document.querySelector(".texto-copiado-msg").classList.add("active");
        setTimeout(() => {
            btn.classList.remove("copiado");
            document.querySelector(".texto-copiado-msg").classList.remove("active");
        }, 2000);
    });
});

function copiarTexto(texto) {
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', texto);

    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
} 