import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {year} CinePlay — Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
