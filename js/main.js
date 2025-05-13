/*selecione todos elementos com a classe "duvida"*/

const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    //fecha as outras dúvidas
        elementosDuvida.forEach(function (outraDuvida) {
            if (outraDuvida !== duvida) {
              outraDuvida.classList.remove("ativa");
            }
        });

    //abre a dúvida
    duvida.classList.toggle("ativa");
  });
});
