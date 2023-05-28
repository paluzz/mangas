export function CardManga({ link, src, alt, chapter, children }) {
  return (
    <div className="box">
      <div className="link">
        <div className="img">
          <a href={link} target="_blank" rel="noreferrer">
            <div className="title">{children}</div>
            <img className="redimension" src={src} alt={alt}></img>
            <div className="chapter"># {chapter}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
