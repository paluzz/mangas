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
      <div className="box">
        <div className="link">
          <div className="img">
            <a href={link} target="_blank" rel="noreferrer">
              <div className="title">{children}</div>
              <img className="redimension" src={imgDrive + src} alt={alt}></img>
              <div className="chapter"># {chapter}</div>
              <Dia day={day} />
            </a>
          </div>
        </div >
      </div >
    );
  }
}
