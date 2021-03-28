// DOM

// botones
const BotonPiedra = document.getElementById("piedra");
const BotonPapel = document.getElementById("papel");
const BotonTijera = document.getElementById("tijera");

// Elementos de texto
const Respuesta = document.getElementById("respuesta");
const WalterHabla = document.getElementById("walterHabla");
const Resultado = document.getElementById("resultado");
// Variables
let puntajeJugador = 0;
let puntajeWalter = 0;
let opcionesDeJuego = ["Piedra", "Papel", "Tijera"];

BotonPiedra.addEventListener("click", () => {
  resolverJuego("Piedra");
});

BotonPapel.addEventListener("click", () => {
  resolverJuego("Papel");
});

BotonTijera.addEventListener("click", () => {
  resolverJuego("Tijera");
});

function resolverJuego(eleccionDeJugador) {
  let eleccionDeWalter =
    opcionesDeJuego[Math.floor(Math.random() * opcionesDeJuego.length)];
  resolverResultado(eleccionDeJugador, eleccionDeWalter);
}

function resolverResultado(jugador, walter) {
  Respuesta.removeAttribute("style");
  switch (jugador) {
    case "Piedra":
      if (walter == "Papel") {
        Respuesta.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        actualizarPuntaje("pierde", jugador);
      } else if (walter == "Tijera") {
        Respuesta.style.transform = "rotate(270deg)";
        Respuesta.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        actualizarPuntaje("gana", jugador);
      } else if (walter == "Piedra") {
        Respuesta.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        actualizarPuntaje("empate", jugador);
      }
      break;

    case "Papel":
      if (walter == "Papel") {
        Respuesta.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        actualizarPuntaje("empate", jugador);
      } else if (walter == "Tijera") {
        Respuesta.style.transform = "rotate(270deg)";
        Respuesta.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        actualizarPuntaje("pierde", jugador);
      } else if (walter == "Piedra") {
        Respuesta.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        actualizarPuntaje("gana", jugador);
      }
      break;

    case "Tijera":
      if (walter == "Papel") {
        Respuesta.innerHTML = `<i class="fas fa-hand-paper"></i>`;
        actualizarPuntaje("gana", jugador);
      } else if (walter == "Tijera") {
        Respuesta.style.transform = "rotate(270deg)";
        Respuesta.innerHTML = `<i class="fas fa-hand-scissors"></i>`;
        actualizarPuntaje("empate", jugador);
      } else if (walter == "Piedra") {
        Respuesta.innerHTML = `<i class="fas fa-hand-rock"></i>`;
        actualizarPuntaje("pierde", jugador);
      }
      break;
  }
}

function actualizarPuntaje(caso, jugadaJugador) {
  switch (caso) {
    case "gana":
      puntajeJugador++;
      WalterHabla.innerText = `Uh me ganaste`;
      if (jugadaJugador == "Piedra") {
        backgroundColor(BotonPiedra, "green");
      } else if (jugadaJugador == "Tijera") {
        backgroundColor(BotonTijera, "green");
      } else if (jugadaJugador == "Papel") {
        backgroundColor(BotonPapel, "green");
      }
      break;

    case "pierde":
      puntajeWalter++;
      WalterHabla.innerText = `No sabes sumar, beso`;
      if (jugadaJugador == "Piedra") {
        backgroundColor(BotonPiedra, "red");
      } else if (jugadaJugador == "Tijera") {
        backgroundColor(BotonTijera, "red");
      } else if (jugadaJugador == "Papel") {
        backgroundColor(BotonPapel, "red");
      }
      break;

    case "empate":
      WalterHabla.innerText = `Bue empatamos`;
      if (jugadaJugador == "Piedra") {
        backgroundColor(BotonPiedra, "yellow");
      } else if (jugadaJugador == "Tijera") {
        backgroundColor(BotonTijera, "yellow");
      } else if (jugadaJugador == "Papel") {
        backgroundColor(BotonPapel, "yellow");
      }
      break;
  }
  Resultado.innerText = `${puntajeJugador} - ${puntajeWalter}`;
}

function backgroundColor(objeto, color) {
  objeto.style.backgroundColor = color;
  setTimeout(() => {
    objeto.removeAttribute("style");
  }, 400);
}
