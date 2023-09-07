import './Card.css'

function Dia({ day }) {
  const dia = 'day ' + day
  return <div className={dia}>{day}</div>
}

export function CardManga({ link, src, alt, chapter, children, day }) {
  return (
    <div className="box">
      <div className="link">
        <div className="img">
          <a href={link} target="_blank" rel="noreferrer">
            <div className="title">{children}</div>
            <img className="redimension" src={src} alt={alt}></img>
            <div className="chapter"># {chapter}</div>
            <Dia day={day} />
          </a>
        </div>
      </div >
    </div >
  );
}
