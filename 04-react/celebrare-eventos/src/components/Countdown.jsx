// CONTADOR EM TEMPO REAL

import { useEffect, useState } from "react";

function Countdown() {
  const dataFesta = new Date("2026-09-06T13:00:00");

  const calcularTempo = () => {
    const agora = new Date();
    const diferenca = dataFesta - agora;

    if (diferenca <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      };
    }

    const dias = Math.floor(
      diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
      (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
      (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
      (diferenca / 1000) % 60
    );

    return {
      dias,
      horas,
      minutos,
      segundos,
    };
  };

  const [tempo, setTempo] = useState(calcularTempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempo(calcularTempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="contador-secao">

      <h2>
        ♥ &nbsp; FALTAM PARA A FESTA &nbsp; ♥
      </h2>

      <div className="contador">

        {/* DIAS */}
        <div className="contador-item">
          <img
            className="floral-contador"
            src="/imagens/flores/floral-contador.png"
            alt=""
            aria-hidden="true"
          />

          <strong>{tempo.dias}</strong>
          <span>DIAS</span>
        </div>

        {/* HORAS */}
        <div className="contador-item">
          <img
            className="floral-contador"
            src="/imagens/flores/floral-contador.png"
            alt=""
            aria-hidden="true"
          />

          <strong>{tempo.horas}</strong>
          <span>HORAS</span>
        </div>

        {/* MINUTOS */}
        <div className="contador-item">
          <img
            className="floral-contador"
            src="/imagens/flores/floral-contador.png"
            alt=""
            aria-hidden="true"
          />

          <strong>{tempo.minutos}</strong>
          <span>MINUTOS</span>
        </div>

        {/* SEGUNDOS */}
        <div className="contador-item">
          <img
            className="floral-contador"
            src="/imagens/flores/floral-contador.png"
            alt=""
            aria-hidden="true"
          />

          <strong>{tempo.segundos}</strong>
          <span>SEGUNDOS</span>
        </div>

      </div>
    </section>
  );
}

export default Countdown;