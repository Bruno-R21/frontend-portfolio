import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">CinePlay</div>
        <ul className="navbar__links">
          <li><a href="#">Em Cartaz</a></li>
          <li><a href="#">Em Breve</a></li>
          <li><a href="#">Promoções</a></li>
        </ul>
      </div>
    </nav>
  );
}
