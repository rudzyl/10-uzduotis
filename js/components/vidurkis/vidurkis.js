import { sarasoSuma } from '../sumavimas/sumavimas.js';
import { skaiciuKiekis } from '../skaiciuKiekis/skaiciuKiekis.js';
import { arPrasmingasSarasas, arNormalusSkaicius } from '../validacijos/validacijos.js';

function vidurkis(duomenys) {
    if (!arPrasmingasSarasas(duomenys)) {
        return false;
    }

    const suma = sarasoSuma(duomenys);
    const kiekis = skaiciuKiekis(duomenys);

    const vid = suma / kiekis;

    if (!arNormalusSkaicius(vid, 'vidurkio rezultatas')) {
        return false;
    }

    return vid;

}

export { vidurkis }