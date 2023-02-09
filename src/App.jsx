import { useState } from 'react'
import './styles.css'
import {CardManga} from './card.jsx'
import imagenes from './imagenes'

const manga = {
  nombre: [
    "MARTIAL PEAK",
    "YUAN ZUN",
    "SECOND LIFE RANKER",
    "REY ESPADA",
    "ESQUELETON SOLDIER",
    "RANKER SSS",
    "OVERGEARED",
    "CAZADOR SUIC1D4",
    "RETORNO RANKER",
    "CABALLERO LANZA",
    "MONSTRUO",
    "NANO",
    "FRANCOTIRADOR",
    "COME LIBROS",
    "DEVORADOR",
    "DIOS POLLO",
    "GRAN SABIO",
    "INQUISIDOR CELESTIAL",
    "MAESTRO DOMADOR"

  ],

  link: [
    "https://manhuako.com/manhua/martial-peak/chapter-",
    "https://samuraiscan.com/bl/yuan-zun/capitulo-",
    "https://yugenmangas.com/series/segunda-vida-para-ser-un-ranker/capitulo-",
    "https://knightnoscanlation.com/sr/el-rey-de-la-espada-en-un-mundo-de-fantasia/capitulo-",
    "https://olympusscanlation.com/manga/soldado-esqueleto/capitulo-",
    "https://olympusscanlation.com/manga/regreso-del-ranker-de-clase-sss/capitulo-",
    "https://olympusscanlation.com/manga/overgear3d/capitulo-",
    "https://yugenmangas.com/series/cazador-suicida-de-clase-sss/capitulo-",
    "https://yugenmangas.com/series/el-retorno-del-ranker-remake/capitulo-",
    "https://olympusscanlation.com/manga/el-regreso-del-legendario-caballero-de-la-lanza/capitulo-",
    "https://olympusscanlation.com/manga/tengo-que-ser-un-monstruo/capitulo-",
    "https://olympusscanlation.com/manga/nano-maquinas/capitulo-",
    "https://samuraiscan.com/bl/el-francotirador-de-nivel-arcano/capitulo-",
    "https://yugenmangas.com/series/el-mago-comedor-de-libros/capitulo-",
    "https://yugenmangas.com/series/archimago-devorador-de-talentos/capitulo-",
    "https://olympusscanlation.com/manga/el-primer-gran-dios-eterno/capitulo-",
    "https://olympusscanlation.com/manga/el-gran-sabio-de-la-humanidad/capitulo-",
    "https://yugenmangas.com/series/espada-de-la-inquisicion-celestial/capitulo-",
    "https://yugenmangas.com/series/maestro-domador/capitulo-",
    "",
    "",
    "",
    ""
  ],

  capitulo: ["3031", "890", "145", "155",
             "122", "45", "166", "806", 
             "84","80","27-5","142",
             "96","80","50","78",
             "1","17","14"]
};

const mangaList = [
  {
    nombre: manga.nombre[0],
    link: manga.link[0],
    src: imagenes[0],
    alt: manga.nombre[0], 
    capitulo: manga.capitulo[0]
  },
  {
    link: manga.link[1],
    src: imagenes[1],
    alt: manga.nombre[1],
    nombre: manga.nombre[1],
    capitulo: manga.capitulo[1]
  },
  {
    link: manga.link[2],
    src: imagenes[2],
    alt: manga.nombre[2],
    nombre: manga.nombre[2],
    capitulo: manga.capitulo[2]
  },
  {
    link: manga.link[3],
    src: imagenes[3],
    alt: manga.nombre[3],
    nombre: manga.nombre[3],
    capitulo: manga.capitulo[3]
  },
  {
    link: manga.link[4],
    src: imagenes[4],
    alt: manga.nombre[4],
    nombre: manga.nombre[4],
    capitulo: manga.capitulo[4]
  },
  {
    link: manga.link[5],
    src: imagenes[5],
    alt: manga.nombre[5],
    nombre: manga.nombre[5],
    capitulo: manga.capitulo[5]
  },
  {
    link: manga.link[6],
    src: imagenes[6],
    alt: manga.nombre[6],
    nombre: manga.nombre[6],
    capitulo: manga.capitulo[6]
  },
  {
    link: manga.link[7],
    src: imagenes[7],
    alt: manga.nombre[7],
    nombre: manga.nombre[7],
    capitulo: manga.capitulo[7]
  },
  {
    link: manga.link[8],
    src: imagenes[8],
    alt: manga.nombre[8],
    nombre: manga.nombre[8],
    capitulo: manga.capitulo[8]
  },
  {
    link: manga.link[9],
    src: imagenes[9],
    alt: manga.nombre[9],
    nombre: manga.nombre[9],
    capitulo: manga.capitulo[9]
  },
  {
    link: manga.link[10],
    src: imagenes[10],
    alt: manga.nombre[10],
    nombre: manga.nombre[10],
    capitulo: manga.capitulo[10]
  },
  {
    link: manga.link[11],
    src: imagenes[11],
    alt: manga.nombre[11],
    nombre: manga.nombre[11],
    capitulo: manga.capitulo[11]
  },
  {
    link: manga.link[12],
    src: imagenes[12],
    alt: manga.nombre[12],
    nombre: manga.nombre[12],
    capitulo: manga.capitulo[12]
  },
  {
    link: manga.link[13],
    src: imagenes[13],
    alt: manga.nombre[13],
    nombre: manga.nombre[13],
    capitulo: manga.capitulo[13]
  },
  {
    link: manga.link[14],
    src: imagenes[14],
    alt: manga.nombre[14],
    nombre: manga.nombre[14],
    capitulo: manga.capitulo[14]
  },
  {
    link: manga.link[15],
    src: imagenes[15],
    alt: manga.nombre[15],
    nombre: manga.nombre[15],
    capitulo: manga.capitulo[15]
  },
  {
    link: manga.link[16],
    src: imagenes[16],
    alt: manga.nombre[16],
    nombre: manga.nombre[16],
    capitulo: manga.capitulo[16]
  },
  {
    link: manga.link[17],
    src: imagenes[17],
    alt: manga.nombre[17],
    nombre: manga.nombre[17],
    capitulo: manga.capitulo[17]
  },
  {
    link: manga.link[18],
    src: imagenes[18],
    alt: manga.nombre[18],
    nombre: manga.nombre[18],
    capitulo: manga.capitulo[18]
  },
  
];




export default function App() {
  return (
    <div className="App">
      <h1>Mis Mangas</h1>
      <div className="container">
        
        {mangaList.map((contador) => (
          <CardManga
            key={contador.nombre}
            link={contador.link.concat(contador.capitulo)}
            src={contador.src}
            alt={contador.alt}
            children={contador.nombre.concat(" #", contador.capitulo)}
          />
        ))}
      </div>
    </div>
  );
}
