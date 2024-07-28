export default function ordenDias(arrayDeObjetos) {
    const ordenDias = {
        "Diario": 0,
        "Lunes": 1,
        "Martes": 2,
        "Miercoles": 3,
        "Jueves": 4,
        "Viernes": 5,
        "Sábado": 6,
        "Domingo": 7,
        "Hiatus": 8
    };

    arrayDeObjetos.sort((a, b) => {
        const diaA = a.dia;
        const diaB = b.dia;

        if (ordenDias[diaA] < ordenDias[diaB]) {
            return -1;
        } else if (ordenDias[diaA] > ordenDias[diaB]) {
            return 1;
        } else {
            return 0;
        }
    });

    return arrayDeObjetos;
}