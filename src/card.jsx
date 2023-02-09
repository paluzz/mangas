export function CardManga({ link, src, alt, children }) {
    return (
      <div className="box">
        <div className="link">
          <div className="img">
            <a href={link} target="_blank" rel="noreferrer">
              <img className="redimension" src={src} alt={alt} />
              <div className="title">{children}</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  