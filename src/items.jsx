import imagen from './imagen.jsx'
const items = [
        {
            id: "0000",
            name: "MARTIAL PEAK",
            link: "https://manhuako.com/manhua/martial-peak/chapter-",
            image: imagen.martial,
            chapter: ""        
        },
        {
            id: "0001",
            name: "YUAN ZUN",
            link: "https://samuraiscan.com/bl/yuan-zun/capitulo-",
            image: imagen.yuan,
            chapter: "892"        
        },
        {
            id: "0002",
            name: "SECOND LIFE RANKER",
            link: "https://yugenmangas.com/series/segunda-vida-para-ser-un-ranker/capitulo-",
            image: imagen.ranker,
            chapter: "145"        
        },
        {
            id: "0003",
            name: "REY ESPADA",
            link: "https://knightnoscanlation.com/sr/el-rey-de-la-espada-en-un-mundo-de-fantasia/capitulo-",
            image: imagen.espada,
            chapter: "156"        
        },
        {
            id: "0004",
            name: "ESQUELETON SOLDIER",
            link: "https://olympusscanlation.com/manga/soldado-esqueleto/capitulo-",
            image: imagen.esqueleto,
            chapter: "222"        
        },
        {
            id: "0005",
            name: "RANKER SSS",
            link: "https://olympusscanlation.com/manga/regreso-del-ranker-de-clase-sss/capitulo-",
            image: imagen.hacha,
            chapter: "45"        
        },
        {
            id: "0006",
            name: "OVERGEARED",
            link: "https://olympusscanlation.com/manga/overgear3d/capitulo-",
            image: imagen.overgeared,
            chapter: "166"        
        },
        {
            id: "0007",
            name: "CAZADOR SUIC1D4",
            link: "https://yugenmangas.com/series/cazador-suicida-de-clase-sss/capitulo-",
            image: imagen.suic1d3,
            chapter: "806"        
        },
        {
            id: "0008",
            name: "RANKER OSO",
            link: "https://yugenmangas.com/series/el-retorno-del-ranker-remake/capitulo-",
            image: imagen.osito,
            chapter: "84"        
        },
        {
            id: "0009",
            name: "CABALLERO LANZA",
            link: "https://olympusscanlation.com/manga/el-regreso-del-legendario-caballero-de-la-lanza/capitulo-",
            image: imagen.lanza,
            chapter: "80"        
        },
        {
            id: "0010",
            name: "MONSTRUO",
            link: "https://olympusscanlation.com/manga/tengo-que-ser-un-monstruo/capitulo-",
            image: imagen.monster,
            chapter: "28-5_1"        
        },
        {
            id: "0011",
            name: "NANO",
            link: "https://olympusscanlation.com/manga/nano-maquinas/capitulo-",
            image: imagen.nano,
            chapter: "142"        
        },
        {
            id: "0012",
            name: "FRANCOTIRADOR",
            link: "https://samuraiscan.com/bl/el-francotirador-de-nivel-arcano/capitulo-",
            image: imagen.arcane,
            chapter: "97"        
        },
        {
            id: "0013",
            name: "COME LIBROS",
            link: "https://yugenmangas.com/series/el-mago-comedor-de-libros/capitulo-",
            image: imagen.libro,
            chapter: "80"        
        },
        {
            id: "0014",
            name: "DEVORADOR",
            link: "https://yugenmangas.com/series/archimago-devorador-de-talentos/capitulo-",
            image: imagen.devorador,
            chapter: "50"        
        },
        {
            id: "0015",
            name: "DIOS POLLO",
            link: "https://olympusscanlation.com/manga/el-primer-gran-dios-eterno/capitulo-",
            image: imagen.pollo,
            chapter: "78"       
        },
        {
            id: "0016",
            name: "GRAN SABIO",
            link: "https://olympusscanlation.com/manga/el-gran-sabio-de-la-humanidad/capitulo-",
            image: imagen.sabio,
            chapter: "1"        
        },
        {
            id: "0017",
            name: "INQUISIDOR CELESTIAL",
            link: "https://yugenmangas.com/series/espada-de-la-inquisicion-celestial/capitulo-",
            image: imagen.inquisidor,
            chapter: "17"        
        },
        {
            id: "0018",
            name: "MAESTRO DOMADOR",
            link: "https://yugenmangas.com/series/maestro-domador/capitulo-",
            image: imagen.domador,
            chapter: "14",       
        }
]
export default items;
function editChapter(name, chapter) {
    name = name.toUpperCase();
    for (let i = 0; i < items.length; i++) {
      if (items[i].name.toUpperCase() === name) {
        items[i].chapter = chapter;
        break;
      }
    }
}
  
  editChapter("MARTIAL PEAK","3043");

  editChapter("YUAN ZUN","893");

  editChapter("second life ranker","146");

  editChapter("REY ESPADA","156");

  editChapter("ESQUELETON SOLDIER","222");

  editChapter("RANKER SSS","45");

  editChapter("OVERGEARED","167");

  editChapter("CAZADOR SUIC1D4","806");

  editChapter("RANKER OSO","86");

  editChapter("CABALLERO LANZA","80");

  editChapter("MONSTRUO","28-5_1");

  editChapter("NANO","142");

  editChapter("FRANCOTIRADOR","97");

  editChapter("COME LIBROS","80");

  editChapter("DEVORADOR","50");

  editChapter("DIOS POLLO","78");

  editChapter("GRAN SABIO","1");

  editChapter("INQUISIDOR CELESTIAL","17");

  editChapter("MAESTRO DOMADOR","14");
 
  
  
  