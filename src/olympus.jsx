import imagen from './imagen.jsx'
import editChapter from './editar.js';
const olympus = [
    {
        id: "0004",
        name: "ESQUELETON SOLDIER",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "31185",
        link2: "/comic-soldado-esqueleto",
        image: imagen.esqueleto,
        chapter: "222"
    },
    {
        id: "0005",
        name: "RANKER SSS",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "35154",
        link2: "/comic-regreso-del-ranker-de-clase-sss",
        image: imagen.hacha,
        chapter: "45"
    },
    {
        id: "0006",
        name: "OVERGEARED",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "34776",
        link2: "/comic-overgear3d",
        image: imagen.overgeared,
        chapter: "166"
    },
    {
        id: "0009",
        name: "CABALLERO LANZA",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "34066",
        link2: "/comic-el-regreso-del-legendario-caballero-de-la-lanza",
        image: imagen.lanza,
        chapter: "80"
    },
    {
        id: "0010",
        name: "HARD CARRY SUPPORT",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "34874",
        link2: "/comic-hard-carry-support",
        image: imagen.soporte,
        chapter: "21"
    },
    {
        id: "0011",
        name: "NANOMAQUINAS",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "27302",
        link2: "/comic-nano-maquinas",
        image: imagen.nano,
        chapter: "142"
    },
    {
        id: "0100",
        name: "PLAYER",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "28472",
        link2: "/comic-nueva-vida-del-jugador",
        image: imagen.player,
        chapter: "29"
    },
    {
        id: "0010",
        name: "MONSTRUO",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "34874",
        link2: "/comic-tengo-que-ser-un-monstruo",
        image: imagen.monster,
        chapter: "28-5_1"
    },
    {
        id: "0015",
        name: "DIOS POLLO",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "20845",
        link2: "/comic-el-primer-gran-dios-eterno",
        image: imagen.pollo,
        chapter: "78"
    },
    {
        id: "0016",
        name: "GRAN SABIO",
        link: "https://olympusscanlation.com/manga/el-gran-sabio-de-la-humanidad/capitulo-",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "21702",
        link2: "/comic-el-gran-sabio-de-la-humanidad",
        image: imagen.sabio,
        chapter: "1"
    }

]
export default olympus;



editChapter(olympus, "ESQUELETON SOLDIER", "228", "50495");

editChapter(olympus, "RANKER SSS", "51", "48228");

editChapter(olympus, "OVERGEARED", "173", "49928");

editChapter(olympus, "CABALLERO LANZA", "87", "49868");

editChapter(olympus, "MONSTRUO", "28.5", "34874");

editChapter(olympus, "HARD CARRY SUPPORT", "22", "48248");

editChapter(olympus, "NANOMAQUINAS", "142", "27302");

editChapter(olympus, "PLAYER", "35", "48830");

editChapter(olympus, "DIOS POLLO", "169", "20876");

editChapter(olympus, "GRAN SABIO", "1", "21702");



