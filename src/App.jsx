import './styles.css'
import { CardManga } from './module/card/card.jsx'
import { combinados } from './module/chapter/capitulos.jsx'
import { Header, Footer } from './module/header/Header.jsx'
import { Menu } from './module/menu/menu.jsx'

export default function App() {
  return (
    <div className="App">
      <Header />
      {/*<Menu */}
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
      {/*/>*/}
      <Footer />
    </div>
  );
}

