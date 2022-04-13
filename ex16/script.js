function contar() {
    let msg = document.querySelector("div#msg");
    let inicio = document.querySelector("input#inicio");
    let fim = document.querySelector("input#fim");
    let passo = document.querySelector("input#passo");

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        msg.innerHTML = "impossivel contar";
    }else {
        msg.innerHTML = " Contando: <br>";
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }else {
            if (i < f ) {
                for (let c = i; c <= f; c += p) {
                    msg.innerHTML += ` ${c}`;
                }
            }else {
                for (let c = i; c <= f; c -= p) {
                    msg.innerHTML += ` ${c}`;
                }
            }
        }
        
    }
    
}
