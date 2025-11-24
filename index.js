let botao = document.querySelector("#switch button");
let html = document.documentElement;
botao.addEventListener('click', function(){
   html.classList.toggle("dark");
})