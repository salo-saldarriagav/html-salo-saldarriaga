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
    },
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

      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      alert(" ;Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert(";Correcto!");
      cards[opcionUnoId].setAttribute("src", "images /blank-png");
      cards[opcionDosId].setAttribute("src", "images/blank-png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "images/reverso .png");
      cards[opcionDosId].setAttribute("src", "images/reverso .png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.Length === cardAdj.length / 2) {
      resultado.textcontent = ";Felicidades, encontraste todos los pares!";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarpareja, 1000);
    }
  }

  crearTablero();
});
