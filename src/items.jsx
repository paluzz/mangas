import imagen from './imagen.jsx'
import editChapter from './editar.js';
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
            link: "https://samuraiscan.com/leer/yuan-zun/capitulo-",
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
            id: "0012",
            name: "FRANCOTIRADOR",
            link: "https://samuraiscan.com/leer/el-francotirador-de-nivel-arcano/capitulo-",
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
]
export default items;



  editChapter(items, "MARTIAL PEAK","3139");

  editChapter(items, "YUAN ZUN","911");

  editChapter(items, "second life ranker","149");

  editChapter(items,"REY ESPADA","159");

  editChapter(items,"CAZADOR SUIC1D4","806");

  editChapter(items,"RANKER OSO","93");

  editChapter(items,"FRANCOTIRADOR","98");
  
  editChapter(items,"COME LIBROS","83");

  editChapter(items,"DEVORADOR","50");

 
  
  
  