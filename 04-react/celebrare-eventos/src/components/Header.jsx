// Header.jsx

import MusicPlayer from "./MusicPlayer";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <span>Rachel</span>
                <small>40 anos</small>
            </div>

            <nav className="menu">
                <a href="#inicio">Home</a>
                <a href="#presentes">Presentes</a>
                <a href="#galeria">Galeria</a>
                <a href="#local">Local da Festa</a>
                <a href="#mensagem">Mensagem</a>
            </nav>

            <MusicPlayer />
            
        </header>
    )
}

export default Header