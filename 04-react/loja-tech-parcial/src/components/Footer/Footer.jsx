import React from "react";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {year} LojaTech — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
