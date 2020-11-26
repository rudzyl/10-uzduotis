import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function sarasoSuma (duomenys) {
    if (!arPrasmingasSarasas(duomenys)) {
        return false;
    }
    let suma = 0;

    for (let i = 0; i < duomenys.length; i++) {
        const skaicius = duomenys[i];

        if (typeof skaicius !== 'number') {
            console.warn('WARNING: skaiciu sarase rasta ne skaiciaus tipo reiksme');
            continue;
        }

        suma += skaicius;
    }
    if (!arNormalusSkaicius(suma, 'sumos rezultatas')) {
        return false;
    }
    return suma;
}

export { sarasoSuma }