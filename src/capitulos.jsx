import imagen from './imagen.jsx';
import editChapter from './editar.js';
import ordenDias from './ordenar.js';
import createObj from './createObj.js';

const olympusLink = "https://visorolym.com/capitulo/";
const samuraiLink = "https://samuraiscan.com/leer/";
const yugenmangasLink = "https://ikigaimangas.com/";
const knightnoscanLink = "https://knightnoscanlation.com/sr/";
const dia = ["Diario", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo", "Hiatus"];

const olympus = [
    {
        dia: dia[8],
        id: "0004",
        name: "ESQUELETON SOLDIER",
        link1: olympusLink,
        midlink: "31185",
        link2: "/comic-soldado-esqueleto",
        image: imagen.esqueleto,
        chapter: "222"
    },
    {
        dia: dia[1],
        id: "0005",
        name: "BERSEKER",
        link1: olympusLink,
        midlink: "35154",
        link2: "/comic-regreso-del-ranker-de-clase-sss5324",
        image: imagen.hacha,
        chapter: "45"
    },
    {
        dia: dia[5],
        id: "0006",
        name: "OVERGEARED",
        link1: olympusLink,
        midlink: "34776",
        link2: "/comic-el-chetado-overg3ar3d",
        image: imagen.overgeared,
        chapter: "166"
    },
    {
        dia: dia[6],
        id: "0009",
        name: "CABALLERO LANZA",
        link1: olympusLink,
        midlink: "34066",
        link2: "/comic-el-regreso-del-legendario-caballero-de-la-lanza",
        image: imagen.lanza,
        chapter: "80"
    },
    {
        dia: dia[2],
        id: "0010",
        name: "HARD CARRY SUPPORT",
        link1: olympusLink,
        midlink: "34874",
        link2: "/comic-los-chicos-con-hacks5324",
        image: imagen.soporte,
        chapter: "21"
    },
    {
        dia: dia[3],
        id: "0011",
        name: "NANOMAQUINAS",
        link1: olympusLink,
        midlink: "27302",
        link2: "/comic-el-despiadado-demonio-celestial",
        image: imagen.nano,
        chapter: "142"
    },
    {
        dia: dia[8],
        id: "01001",
        name: "PLAYER",
        link1: olympusLink,
        midlink: "28472",
        link2: "/comic-nueva-vida-del-jugador",
        image: imagen.player,
        chapter: "29"
    },
    {
        dia: dia[4],
        id: "0200",
        name: "SEUL NECROMANCER",
        link1: olympusLink,
        midlink: "64919",
        link2: "/comic-el-nigromante-de-seul",
        image: imagen.necromancer,
        chapter: "21"
    },
    {
        dia: dia[2],
        id: "0201",
        name: "MAGO INFINITO",
        link1: olympusLink,
        midlink: "67043",
        link2: "/comic-shirone-el-infinit077454645",
        image: imagen.infinito,
        chapter: "39"
    },
    {
        dia: dia[2],
        id: "1005",
        name: "MONTE HUA",
        link1: olympusLink,
        midlink: "39782",
        link2: "/comic-el-regreso-de-la-secta-del-monte-hua",
        image: imagen.hua,
        chapter: "21"
    },
    {
        dia: dia[4],
        id: "0016",
        name: "DESTINO F",
        link: olympusLink,
        link1: olympusLink,
        midlink: "60991",
        link2: "/comic-cazador-de-destinos-de-clase-f6745645",
        image: imagen.destino,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "0100",
        name: "MULTIPLICADOR",
        link1: olympusLink,
        midlink: "65888",
        link2: "/comic-subiendo-de-nivel-con-las-mejores-habilidades7777",
        image: imagen.multiplicador,
        chapter: "21"
    },
    {
        dia: dia[8], //dia[3],
        id: "0101",
        name: "BARBARO",
        link1: olympusLink,
        midlink: "85224",
        link2: "/comic-b4rb4r1n-53065",
        image: imagen.barbaro,
        chapter: "21"
    },
    {
        dia: dia[6],
        id: "0202",
        name: "EVOLUCION DEMONIACA",
        link1: olympusLink,
        midlink: "67460",
        link2: "/comic-evolucion-demoniaca53065062",
        image: imagen.demon,
        chapter: "18"
    },
    {
        dia: dia[5],
        id: "0203",
        name: "CORRUPCION",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-el-hijo-de-la-corrupcion",
        image: imagen.priest,
        chapter: "0"
    },
    {
        dia: dia[7],
        id: "2214",
        name: "MAGO DORADO",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-el-doradin-ellie",
        image: imagen.gold,
        chapter: "20"
    },
    {
        dia: dia[6],
        id: "2215",
        name: "MAGO DRAGON",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-mago-devorador-de-dragones",
        image: imagen.drake,
        chapter: "20"
    },
    {
        dia: dia[6],
        id: "2216",
        name: "+99 PALO",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-palito-cheto",
        image: imagen.palo,
        chapter: "20"
    },
    {
        dia: dia[2],
        id: "2217",
        name: "SOLDADO DE ACERO",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-ac3ro-53065062",
        image: imagen.acero,
        chapter: "4"
    },
    {
        dia: dia[1],
        id: "2218",
        name: "MARCIAL SIN NOMBRE",
        link1: olympusLink,
        midlink: "74718",
        link2: "/comic-dios-marcial-que-regreso773445e",
        image: imagen.noname,
        chapter: "4"
    },
    {
        dia: dia[7],
        id: "2219",
        name: "SUMMONER",
        link1: olympusLink,
        midlink: "74718",
        link2: "/comic-nigromante-yo-soy-la-plaga",
        image: imagen.summoner,
        chapter: "4"
    },
    {
        dia: dia[8],
        id: "9876",
        name: "BLACK SCYTHE",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-la-regresion-100-del-jugador-de-nivel-maximo7777",
        image: imagen.guadana,
        chapter: "1"
    },
    {
        dia: dia[3],
        id: "9875",
        name: "10.000 AÑOS FUTURO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-isecaikrarochino201230",
        image: imagen.futuro,
        chapter: "1"
    },
    {
        dia: dia[3],
        id: "9654654654",
        name: "ARBOL DIVINO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-arbol-mamadisimo77213124",
        image: imagen.arbol,
        chapter: "1"
    },
    {
        dia: dia[2],
        id: "9654654655",
        name: "DEVORADOR",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-mago-devorador-de-talentos",
        image: imagen.devoratalento,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "9654654656",
        name: "GODZILLA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-renacido-como-un-monstruo-el-auge-del-dios-bestia",
        image: imagen.godzilla,
        chapter: "1"
    },
    {
        dia: dia[7],
        id: "96546546",
        name: "JUGADOR NO PUEDE SUBIR NIVEL",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-jugador-que-no-puede-subir-de-nivel",
        image: imagen.nonivel,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "9654654658",
        name: "SEÑOR DEMONIO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-realmente-no-soy-el-senor-demonio",
        image: imagen.demonlord,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "9654654659",
        name: "PALADIN",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-paladin-de-rango-sss-que-transciende-el-sentido-comun",
        image: imagen.paladin,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "9654654660",
        name: "CIVILIZACION NEBULA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-nebl4-blu3-53062",
        image: imagen.nebula,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "9654654661",
        name: "NIGROMANTE FUERZA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-nigromante-de-fuerza-maxima-olympus-ver",
        image: imagen.necfuerza,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "9654654662",
        name: "JEFE DEVORADOR",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-actue-como-un-jefecito-final-sr-devorador5324",
        image: imagen.devorador,
        chapter: "1"
    },
    {
        dia: dia[7],
        id: "9654654662",
        name: "EL SUCESOR DE LOS HEROES",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-sucesor-de-los-heroes-legendarios77776",
        image: imagen.heroe,
        chapter: "1"
    },
    /*
    {
        id: "0015",
        name: "DIOS POLLO",
        link1: "https://olympusscans.com/capitulo/",
        midlink: "20845",
        link2: "/comic-el-primer-gran-dios-eterno",
        image: imagen.pollo,
        chapter: "78"
    },*/

]
const temps = [
    createObj(dia[0], "99999", "MARTIAL PEAK", "3000", imagen.martial, "https://manhuako.com/manhua/martial-peak/chapter-"),
    createObj(dia[0], "66666", "YUAN ZUN", "892", imagen.yuan, samuraiLink + "yuan-zun/capitulo-"),
    createObj(dia[1], "0002", "SECOND LIFE RANKER", "", imagen.ranker, yugenmangasLink + "capitulo/"),
    createObj(dia[3], "0003", "REY ESPADA", "", imagen.espada, knightnoscanLink + "el-flipante-rey-de-la-espada/capitulo-"),
    createObj(dia[7], "0007", "CAZADOR SUIC1D4", "", imagen.suic1d3, yugenmangasLink + "capitulo/"),
    createObj(dia[2], "0008", "RANKER OSO", "", imagen.osito, yugenmangasLink + "el-retorno-del-ranker-remake/capitulo-"),
    createObj(dia[2], "00029", "FRANCOTIRADOR", "", imagen.arcane, samuraiLink + "el-francotirador-de-nivel-arcano/capitulo-"),
    createObj(dia[5], "00030", "COME LIBROS", "", imagen.libro, yugenmangasLink + "el-mago-comedor-de-libros/capitulo-"),
    createObj(dia[6], "00099", "COMBAT CONTINENT", "", imagen.combat2, "https://www.mundodonghua.com/ver/combat-continent-2/"),
]
export const combinados = [...temps, ...olympus];

editChapter(combinados, "MARTIAL PEAK", "3671");

editChapter(temps, "YUAN ZUN", "1024");

editChapter(temps, "second life ranker", "162", "950300434213011457");

editChapter(temps, "REY ESPADA", "196");

editChapter(temps, "CAZADOR SUIC1D4", "104", "923135996358393857");

editChapter(temps, "RANKER OSO", "110");

editChapter(temps, "FRANCOTIRADOR", "112");

editChapter(temps, "COME LIBROS", "107");

editChapter(temps, "COMBAT CONTINENT", "40");

//------------------------------------------------

editChapter(olympus, "ESQUELETON SOLDIER", "247", "70253");

editChapter(olympus, "BERSEKER", "97", "90095");

editChapter(olympus, "OVERGEARED", "191", "71793");

editChapter(olympus, "CABALLERO LANZA", "99", "66507");

editChapter(olympus, "MONSTRUO", "28.5", "34874");

editChapter(olympus, "HARD CARRY SUPPORT", "57", "90096");

editChapter(olympus, "NANOMAQUINAS", "160", "68280");

editChapter(olympus, "PLAYER", "52", "70273");

editChapter(olympus, "SEUL NECROMANCER", "108", "81823");

editChapter(olympus, "MONTE HUA", "21", "39782");

editChapter(olympus, "DESTINO F", "54", "84854");

editChapter(olympus, "MULTIPLICADOR", "50", "87463");

editChapter(olympus, "BARBARO", "53", "88635");

editChapter(olympus, "EVOLUCION DEMONIACA", "51", "89801");

editChapter(olympus, "CORRUPCION", "11", "69700");

editChapter(olympus, "MAGO INFINITO", "65", "86825");

editChapter(olympus, "MAGO DORADO", "32", "79630");

editChapter(olympus, "MAGO DRAGON", "29", "79401");

editChapter(olympus, "DEVORADOR", "58", "86829");

editChapter(olympus, "+99 PALO", "20", "33453");

editChapter(olympus, "SOLDADO DE ACERO", "33", "89958");

editChapter(olympus, "Marcial sin nombre", "51", "89615");

editChapter(olympus, "SUMMONER", "70", "90006");

editChapter(olympus, "BLACK SCYTHE", "41", "88523");

editChapter(olympus, "10.000 años futuro", "103", "90191");

editChapter(olympus, "Arbol Divino", "99", "74082");

editChapter(olympus, "GODZILLA", "55", "87881");

editChapter(olympus, "JUGADOR NO PUEDE SUBIR NIVEL", "140", "89576");

editChapter(olympus, "SEÑOR DEMONIO", "22", "89584");

editChapter(olympus, "PALADIN", "8", "89570");

editChapter(olympus, "CIVILIZACION NEBULA", "35", "90085");

editChapter(olympus, "NIGROMANTE FUERZA", "11", "88155");

editChapter(olympus, "JEFE DEVORADOR", "33", "89887");

editChapter(olympus, "El sucesor de los Heroes", "48", "86701");

//editChapter(olympus, "DIOS POLLO", "184", "50613");



ordenDias(combinados);



