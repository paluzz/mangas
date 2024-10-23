import './Card.css'
const imgDrive = 'https://lh3.googleusercontent.com/d/'
function Dia({ day }) {
  const dia = 'day ' + day
  return (
    <div className={dia}>{day}</div>
  )
}

export function CardManga({ link, src, alt, chapter, children, day }) {
  if (day != 'Hiatus') {
    return (
      <div className="card">
        <h4 className="title">{children}</h4>
        <a href={link} target="_blank" rel="noreferrer">
          <img className="redimension" src={imgDrive + src} alt={alt}></img>
        </a>
        <div className="chapter">
          <Dia day={day} />
          <h4>
            # {chapter}
          </h4>
        </div>
      </div >
    );
  }
}
