import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function skaiciuKiekis(duomenys) {
    if (!arPrasmingasSarasas(duomenys)) {
        return false;
    }

    let kiekis = 0;

    for (let i = 0; i < duomenys.length; i++) {
        const skaicius = duomenys[i];
        if (typeof skaicius !== 'number') {
            continue;
        }
        kiekis++;
    }
    if (!arNormalusSkaicius(kiekis, 'kiekio rezultatas')) {
        return false;
    }
    return kiekis;
}

export { skaiciuKiekis }