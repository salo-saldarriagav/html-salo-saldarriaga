document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "salome1",
      img: "imagenes/salome1.png"
    },
    {
      name: "salome2",
      img: "imagenes/salome2.png"
    },
    {
      name: "salome3",
      img: "imagenes/salome3.png"
    },
    {
      name: "salome4",
      img: "imagenes/salome4.png"
    },
    {
      name: "salome5",
      img: "imagenes/salome5.png"
    },
    {
      name: "salome6",
      img: "imagenes/salome6.png"
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");

      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
});
