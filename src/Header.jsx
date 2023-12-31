import './header.css'

export function Header() {
    return (
        <header className="header">
            <h1 className="MainTitle">Mejores Mangas</h1>
        </header>
    );
}

export function Footer() {
    return (
        <div className='footer'>
            <p className='mensaje'>Nota: averiguar un slider</p>
            <a className='github' target="_blank" rel="noreferrer" href='https://github.com/paluzz/mangas'>GitHub</a>
        </div>

    );
}