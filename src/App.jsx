import './styles.css'
import { CardManga } from './card.jsx'
import { combinados } from './capitulos.jsx'

export default function App() {
  return (
    <div className="App">
      <h1>Mangas</h1>
      <div className="container">
        {combinados.map(temp => (
          <CardManga
            key={temp.id}
            link={temp.link1.concat(temp.midlink).concat(temp.link2)}
            chapter={temp.chapter}
            src={temp.image}
            alt={temp.name}
            children={temp.name}
            day={temp.dia}
          />
        ))}

      </div>
    </div>
  );
}

