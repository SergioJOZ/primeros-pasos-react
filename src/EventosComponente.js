import React from "react";

export const EventosComponente = () => {
  const handlerOneClick = function (e, nombre) {
    console.log(e);
    alert(`Hola, soy un click, ${nombre}`);
  };

  const handlerDoubleclick = function () {
    alert("Has dado doble click");
  };

  const hasEntrado = function (e, accion) {
    alert(`Has ${accion} a la caja con el mouse`);
  };

  const estasDentro = (e) => {
    console.log("Estás dentro del input, mete tu nombre");
  };

  const estasFuera = (e) => {
    console.log("Estas fuera del input");
  };

  return (
    <div>
      <h1>Eventos en React</h1>
      <p>
        {/*Evento click*/}
        <button onClick={(e) => handlerOneClick(e, "Sergio")}>
          Dame click!
        </button>
      </p>

      <p>
        {/*Evento dobleclick*/}
        <button onDoubleClick={(e) => handlerDoubleclick()}>
          Dame doble click!
        </button>
      </p>

      <div
        id="caja"
        onMouseEnter={(e) => hasEntrado(e, "entrado")}
        onMouseLeave={(e) => hasEntrado(e, "salido")}
      >
        {/*Evento onMouseEnter/onMouseLeave*/}
        Pasa por encima!
      </div>

      <p>
        {/*Evento onFocus/onBlur*/}
        <input
          type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="Introduce tu nombre..."
        />
      </p>
    </div>
  );
};
