// Pega o elemento <html>, onde vamos adicionar ou remover a classe "dark"
let html = document.documentElement;

// Pega o botão dentro da div #switch (no index.html ele existe,
// mas nas páginas dos projetos NÃO existe)
let botao = document.querySelector("#switch button");

// CARREGAR O TEMA SALVO

// Verifica se existe algum tema salvo no navegador do usuário
const temaSalvo = localStorage.getItem("tema");

// Se o valor salvo for "dark", ativa o modo escuro
if (temaSalvo === "dark") {
    html.classList.add("dark");
} 
// Se o valor salvo for "light", garante que o modo escuro esteja desligado
else if (temaSalvo === "light") {
    html.classList.remove("dark");
}


// CLICAR NO BOTÃO PARA TROCAR O TEMA

// Se o botão existir 
if (botao) {

    botao.addEventListener("click", function () {

        // Alterna a classe "dark": se tiver, tira; se não tiver, coloca
        html.classList.toggle("dark");

        // SALVAR O TEMA ESCOLHIDO

        // Se o HTML estiver com a classe "dark", salva "dark"
        if (html.classList.contains("dark")) {
            localStorage.setItem("tema", "dark");
        } 
        // Se não estiver, salva "light"
        else {
            localStorage.setItem("tema", "light");
        }
    });
}
