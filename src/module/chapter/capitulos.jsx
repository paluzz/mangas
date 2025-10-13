import imagen from '../imagen/imagen.jsx';
import editChapter from '../../function/editar.js';
import ordenDias from '../../function/ordenar.js';
import createObj from '../../function/createObj.js';


//------------------------------------------------ VARIABLES GLOBALES
const olympusLink = "https://olympusbiblioteca.com/capitulo/";
const samuraiLink = "https://samuraiscan.com/leer/";
const yugenmangasLink = "https://visorikigai.net/";
const manhwaweb = "https://www.manhwaweb.com/leer/";
const emperorLink = "https://emperorscan.org/manga/";
const daosLink = "https://threedaos.zdrz.xyz/";
const mundoDonguaLink = "https://www.mundodonghua.com/ver/"
const dia = ["Diario", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo", "Hiatus"];


// ------------------------------------------------ LISTAS DE COMICS
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
        link2: "/comic-regreso-del-ranker-de-clase-ss13424",
        image: imagen.hacha,
        chapter: "45"
    },
    {
        dia: dia[8],
        id: "0006",
        name: "OVERGEARED",
        link1: olympusLink,
        midlink: "34776",
        link2: "/comic-el-chetado-overg3ar3d",
        image: imagen.overgeared,
        chapter: "166"
    },
    {
        dia: dia[8],
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
        dia: dia[8],
        id: "0011",
        name: "NANOMAQUINAS",
        link1: olympusLink,
        midlink: "27302",
        link2: "/comic-celestial-despiadado-1n",
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
        dia: dia[8],
        id: "0200",
        name: "SEUL NECROMANCER",
        link1: olympusLink,
        midlink: "64919",
        link2: "/comic-el-nigromante-de-seul",
        image: imagen.necromancer,
        chapter: "21"
    },
    {
        dia: dia[4],
        id: "02008778941123",
        name: "Come y Crece",
        link1: olympusLink,
        midlink: "64919",
        link2: "/comic-come-y-crece-20250925-081449389",
        image: imagen.restaurante,
        chapter: "21"
    },
    {
        dia: dia[2],
        id: "0201",
        name: "SHIRONE",
        link1: olympusLink,
        midlink: "67043",
        link2: "/comic-shirone-el22-infinit015551251524131123",
        image: imagen.infinito,
        chapter: "39"
    },
    {
        dia: dia[5],
        id: "0000001154879556",
        name: "REY ESQUELETO",
        link1: olympusLink,
        midlink: "67043",
        link2: "/comic-voy-a-an10-05-2025-tierra",
        image: imagen.skeletonking,
        chapter: "39"
    },
    {
        dia: dia[5],
        id: "00000011548795566",
        name: "DOMADOR HIELO",
        link1: olympusLink,
        midlink: "67043",
        link2: "/comic-invasion-de-bestias-puedo-ver-las-rutas-de-evolucion-ocultas",
        image: imagen.domador_hielo,
        chapter: "39"
    },
    {
        dia: dia[8],
        id: "1005",
        name: "MONTE HUA",
        link1: olympusLink,
        midlink: "39782",
        link2: "/comic-el-regreso-de-la-secta-del-monte-hua",
        image: imagen.hua,
        chapter: "21"
    },
    {
        dia: dia[8],
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
        dia: dia[8],
        id: "0100",
        name: "MULTIPLICADOR",
        link1: olympusLink,
        midlink: "65888",
        link2: "/comic-subiendo-de-nivel-con-las-mejores-habilidades7777",
        image: imagen.multiplicador,
        chapter: "21"
    },
    {
        dia: dia[2], //dia[3],
        id: "0101",
        name: "BARBARO",
        link1: olympusLink,
        midlink: "85224",
        link2: "/comic-sobreviviendo-al-juego-siendo-un-barbaro",
        image: imagen.barbaro,
        chapter: "21"
    },
    {
        dia: dia[6],
        id: "0202",
        name: "EVOLUCION DEMONIACA",
        link1: olympusLink,
        midlink: "67460",
        link2: "/comic-evolucion-demoniac1342-1n",
        image: imagen.demon,
        chapter: "18"
    },
    {
        dia: dia[8],
        id: "0203",
        name: "CORRUPCION",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-el-hijo-de-la-corrupcion",
        image: imagen.priest,
        chapter: "0"
    },
    {
        dia: dia[8],
        id: "2214",
        name: "MAGO DORADO",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-el-doradin-ellie",
        image: imagen.gold,
        chapter: "20"
    },
    {
        dia: dia[8],
        id: "2215",
        name: "MAGO DRAGON",
        link1: olympusLink,
        midlink: "20845",
        link2: "/comic-mago-devorador-de-dragones",
        image: imagen.drake,
        chapter: "20"
    },
    {
        dia: dia[8],
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
        name: "DIOS MARCIAL",
        link1: olympusLink,
        midlink: "74718",
        link2: "/comic-el-dios-marcial-que-regreso-al-nivel-220250805-111829628",
        image: imagen.noname,
        chapter: "4"
    },
    {
        dia: dia[7],
        id: "2219",
        name: "SUMMONER",
        link1: olympusLink,
        midlink: "74718",
        link2: "/comic-nigromante-yo-soy-la-plagaasdfasd",
        image: imagen.summoner,
        chapter: "4"
    },
    {
        dia: dia[2],
        id: "9876",
        name: "BLACK SCYTHE",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-la-r20-225-egresion-100-del-jugador-de-nivel-maximo13424",
        image: imagen.guadana,
        chapter: "1"
    },
    {
        dia: dia[3],
        id: "9875",
        name: "10.000 AÑOS FUTURO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-isecaikrarochino13424",
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
        dia: dia[8],
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
        link2: "/comic-subiendodenivelqque-nunca-acaba13424",
        image: imagen.nonivel,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "9654654658",
        name: "ESPADA DEMONIO (CYAN VERT)",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-la-venganza-del-as3sino-de-la-espada-demoniaca",
        image: imagen.demonlord,
        chapter: "1"
    },
    {
        dia: dia[8],
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
        link2: "/comic-nebl4-blu3-1n",
        image: imagen.nebula,
        chapter: "1"
    },
    {
        dia: dia[8],
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
        link2: "/comic-el-sucesor-de-los-heroes-legendario13424",
        image: imagen.heroe,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "96541111111",
        name: "REY MARCIAL",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-indomable-rey-marcial20250805-110649240",
        image: imagen.marcialKing,
        chapter: "1"
    },
    {
        dia: dia[4],
        id: "96541111112",
        name: "WAIFU INSECTO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-amo-de-la-plaga",
        image: imagen.insecto,
        chapter: "1"
    },/*
    {
        dia: dia[4],
        id: "96541111114",
        name: "MAGO CUERPO A CUERPO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-mago-cuerpo-a-cuerpo-mas-poderoso",
        image: imagen.melee,
        chapter: "1"
    },*/
    {
        dia: dia[3],
        id: "96541111116",
        name: "REGRESOR CAIDO (MCLAIN)",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-caida-fam1l1-1n",
        image: imagen.familia,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "96541111117",
        name: "ULTIMO AVENTURERO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-ultimo-aventurero",
        image: imagen.aventurero,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "96541111118",
        name: "MELEE BUENO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-regrecion-del-mago-de-combate-cuerpo-a-cuerpo",
        image: imagen.melee2,
        chapter: "1"
    },
    {
        dia: dia[3],
        id: "965411199999",
        name: "SOLO LEVELING",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-solo-leveling-ragnarok",
        image: imagen.soloLeveling,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "9654999998",
        name: "JUGADOR ACADEMIA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-06-02-yo-mate-al-jugador-41244de-la-academia1241214412",
        image: imagen.academia,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "96549999997",
        name: "TROLL FUERTE",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-saboteador-1n",
        image: imagen.troll,
        chapter: "1"
    },
    {
        dia: dia[2],
        id: "96541111119",
        name: "BLINKER",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-blinker-genio-de-la-academia-magica",
        image: imagen.blinker,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "96541111119",
        name: "MANCO ADENKA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-elmancocheto532413424",
        image: imagen.manco,
        chapter: "1"
    },
    {
        dia: dia[7],
        id: "96541111120",
        name: "SABUESO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-sabueso13424",
        image: imagen.sabueso,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "96541111124",
        name: "CABALLERO OSCURO (LIMIT)",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-prodigioso-caballero-oscuro-con-tiempo-limitado20250805-111725822",
        image: imagen.caballero_limite,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "96541111124",
        name: "ABISMO",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-renacer-del-abismoz",
        image: imagen.abismo,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "96541111125",
        name: "ED ROTHAILOR",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-el-extra24120252",
        image: imagen.supervivencia,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "005588994",
        name: "HERALDO MONEDAS",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-la-noche-de-los-herejes-desalmados",
        image: imagen.heraldo,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "9654111116625",
        name: "DRAGON HUNTER",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-la-regresion-inigualable-del-caza-dragones",
        image: imagen.cazadragon,
        chapter: "1"
    },
    {
        dia: dia[2],
        id: "96541111125",
        name: "INGENIERO FRONTERA",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-elmmjer-loco-1419-29411",
        image: imagen.frontera,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "36598745632145",
        name: "ESTRELLA DE LA MUERTE",
        link1: olympusLink,
        midlink: "81289",
        link2: "/comic-cara-casper13424",
        image: imagen.darkstar,
        chapter: "1"
    },
    {
        dia: dia[2],
        id: "36598745699999445",
        name: "RETORNADO ALQUIMISTA",
        link1: olympusLink,
        midlink: "112953",
        link2: "/comic-manual-de-instrucc20-225-l-reencarnado",
        image: imagen.manual,
        chapter: "1"
    },
    {
        dia: dia[4],
        id: "36598745699999448",
        name: "PRINCIPE BRIOL",
        link1: olympusLink,
        midlink: "112953",
        link2: "/comic-el-ascenso-del-tercer-principe-del-reino-caido",
        image: imagen.briol,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "36598745699999448",
        name: "CABALLERO APOCALIPSIS",
        link1: olympusLink,
        midlink: "112953",
        link2: "/comic-el-regreso-del-caballero-de-la-muerte-clase-apocalipsis",
        image: imagen.apoca,
        chapter: "1"
    },
    {
        dia: dia[6],
        id: "36598745699999451",
        name: "DEVORADOR DE ARMAS",
        link1: olympusLink,
        midlink: "112953",
        link2: "/comic-o5324evorador-de-armas",
        image: imagen.devorador_armas,
        chapter: "1"
    },
    {
        dia: dia[5],
        id: "36598745699999454",
        name: "MASCOTAS ESTELARES",
        link1: olympusLink,
        midlink: "112953",
        link2: "/comic-13424la-super-tienda-de-mascotas-estelares5324",
        image: imagen.mascotas,
        chapter: "1"
    },
    {
        dia: dia[1],
        id: "132163465000989812",
        name: "HERRERO",
        link1: olympusLink,
        midlink: "112953",
        link2: "/comic-el-herrero-genio-del-juego",
        image: imagen.herrero,
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
const otros = [
    createObj(dia[8], "99999", "MARTIAL PEAK", "3000", imagen.martial, "https://manhuako.com/manhua/martial-peak/chapter-"),
    createObj(dia[8], "66666", "YUAN ZUN", "892", imagen.yuan, samuraiLink + "yuan-zun/capitulo-"),
    createObj(dia[6], "66669930", "YUAN ZUND", "1", imagen.yuan, mundoDonguaLink + "yuan-zun/"),
    createObj(dia[1], "0002", "SECOND LIFE RANKER", "", imagen.ranker, yugenmangasLink + "capitulo/"),
    createObj(dia[3], "0003", "REY ESPADA", "", imagen.espada, manhwaweb + "registros-de-supervivencia-del-rey-de-la-espada-_1737881316734-"),
    createObj(dia[7], "0007", "CAZADOR SUIC1D4", "", imagen.suic1d3, yugenmangasLink + "capitulo/"),
    createObj(dia[8], "0008", "RANKER OSO", "", imagen.osito, yugenmangasLink + "el-retorno-del-ranker-remake/capitulo-"),
    createObj(dia[8], "00029", "FRANCOTIRADOR", "", imagen.arcane, samuraiLink + "el-francotirador-de-nivel-arcano/capitulo-"),
    createObj(dia[8], "00030", "COME LIBROS", "", imagen.libro, yugenmangasLink + "el-mago-comedor-de-libros/capitulo-"),
    createObj(dia[6], "00099", "COMBAT CONTINENT", "", imagen.combat2, mundoDonguaLink + "combat-continent-2/"),
    createObj(dia[5], "003215", "ARCHIMAGO LADRON", "", imagen.ladron, emperorLink + "el-r3n4cimient0-del-archim4go-del-grupo-del-hero3/capitulo-"),
    createObj(dia[5], "003216", "MAGO CUERPO A CUERPO", "", imagen.melee, daosLink + "el-mago-cuerpo-a-cuerpo-mas-poderoso-"),
    createObj(dia[6], "00321699", "MAESTRO DRAGON", "116", imagen.dragones, daosLink),
    createObj(dia[2], "00321600", "JUGADOR CONGELADO", "", imagen.frozen, "https://traduccionesamistosas.topmanhuas.org/manga/espectro-congelado/capitulo-"),
]
export const combinados = [...otros, ...olympus];


// ------------------------------------------------ EDITAR CAPITULOS

editChapter(combinados, "MARTIAL PEAK", "3671");

editChapter(otros, "YUAN ZUN", "1024");

editChapter(otros, "YUAN ZUND", "5");

editChapter(otros, "second life ranker", "167", "970244275715670019");

editChapter(otros, "CAZADOR SUIC1D4", "104", "923135996358393857");

editChapter(otros, "RANKER OSO", "110");

editChapter(otros, "FRANCOTIRADOR", "112");

editChapter(otros, "COME LIBROS", "107");

editChapter(otros, "ARCHIMAGO LADRON", "34");

editChapter(otros, "MAGO CUERPO A CUERPO", "36");

editChapter(otros, "COMBAT CONTINENT", "66");

editChapter(olympus, "ESQUELETON SOLDIER", "247", "70253");

editChapter(olympus, "OVERGEARED", "191", "71793");

editChapter(olympus, "CABALLERO LANZA", "99", "66507");

editChapter(olympus, "MONSTRUO", "28.5", "34874");

editChapter(olympus, "NANOMAQUINAS", "160", "68280");

editChapter(olympus, "PLAYER", "52", "70273");

editChapter(olympus, "SEUL NECROMANCER", "108", "81823");

editChapter(olympus, "MONTE HUA", "21", "39782");

editChapter(olympus, "DESTINO F", "54", "84854");

editChapter(olympus, "MULTIPLICADOR", "50", "87463");

editChapter(olympus, "CORRUPCION", "11", "69700");

editChapter(olympus, "MAGO DORADO", "32", "79630");

editChapter(olympus, "MAGO DRAGON", "29", "79401");

editChapter(olympus, "DEVORADOR", "39", "92653");

editChapter(olympus, "+99 PALO", "20", "33453");

editChapter(olympus, "10.000 años futuro", "141", "97736");

editChapter(olympus, "Arbol Divino", "99", "74082");

editChapter(olympus, "GODZILLA", "55", "87881");

editChapter(olympus, "JUGADOR NO PUEDE SUBIR NIVEL", "169", "102576");

editChapter(olympus, "PALADIN", "8", "89570");

editChapter(olympus, "NIGROMANTE FUERZA", "11", "88155");

editChapter(olympus, "JEFE DEVORADOR", "39", "92953");

editChapter(olympus, "El sucesor de los Heroes", "50", "87927");
//editChapter(olympus, "DIOS POLLO", "184", "50613");

//editChapter(olympus, "MAGO CUERPO A CUERPO", "20", "93146");


//------------------------------------------------ CAPITULOS NUEVOS


editChapter(otros, "REY ESPADA", "264");

editChapter(olympus, "REY MARCIAL", "100", "118217");

editChapter(olympus, "BARBARO", "125", "118991");

editChapter(olympus, "HARD CARRY SUPPORT", "85", "101198");

editChapter(olympus, "CIVILIZACION NEBULA", "110", "118716");

editChapter(olympus, "SHIRONE", "138", "118582");

editChapter(olympus, "WAIFU INSECTO", "58", "111703");

editChapter(olympus, "BERSEKER", "130", "102764");

editChapter(olympus, "EVOLUCION DEMONIACA", "126", "119081");

editChapter(olympus, "SUMMONER", "215", "118459");

editChapter(olympus, "DIOS MARCIAL", "100", "114099");

editChapter(olympus, "ESPADA DEMONIO (CYAN VERT)", "96", "119112");

editChapter(olympus, "REGRESOR CAIDO (MCLAIN)", "102", "118717");

editChapter(olympus, "BLINKER", "72", "118727");

editChapter(olympus, "ULTIMO AVENTURERO", "47", "104082");

editChapter(olympus, "MELEE BUENO", "23", "95518");

editChapter(olympus, "MANCO ADENKA", "134", "108624");

editChapter(olympus, "SOLO LEVELING", "7", "97708");

editChapter(olympus, "JUGADOR ACADEMIA", "67", "105870");

editChapter(olympus, "TROLL FUERTE", "10", "47976");

editChapter(olympus, "SABUESO", "134", "119105");

editChapter(olympus, "ABISMO", "52", "100908");

editChapter(olympus, "CABALLERO OSCURO (LIMIT)", "119", "119082");

editChapter(olympus, "ED ROTHAILOR", "82", "113670")

editChapter(olympus, "INGENIERO FRONTERA", "112", "80966")

editChapter(olympus, "HERALDO MONEDAS", "23", "108763")

editChapter(olympus, "BLACK SCYTHE", "71", "118253");

editChapter(olympus, "DRAGON HUNTER", "28", "107996");

editChapter(olympus, "ESTRELLA DE LA MUERTE", "83", "112369");

editChapter(otros, "JUGADOR CONGELADO", "184");

editChapter(olympus, "SOLDADO DE ACERO", "68", "113196");

editChapter(olympus, "RETORNADO ALQUIMISTA", "156", "118892");

editChapter(olympus, "PRINCIPE BRIOL", "36", "118700");

editChapter(olympus, "CABALLERO APOCALIPSIS", "37", "118264");

editChapter(olympus, "DEVORADOR DE ARMAS", "34", "112633");

editChapter(olympus, "MASCOTAS ESTELARES", "196", "118735");

editChapter(olympus, "REY ESQUELETO", "46", "115803");

editChapter(otros, "MAESTRO DRAGON", "117", "344403/00/01/20/2025/");

editChapter(olympus, "DOMADOR HIELO", "40", "118451");

editChapter(olympus, "COME Y CRECE", "25", "118658");

editChapter(olympus, "HERRERO", "23", "118995");


ordenDias(combinados);



