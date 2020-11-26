import { vidurkis } from './components/vidurkis/vidurkis.js'; //vidurkis
import { duomenys } from './data/duomenys.js'; //duomenys

const ats = vidurkis(duomenys);

//is pateiktu 4 skaiciu, vidurkis gaunasi: 6

const atsString = `is pateiktu ${duomenys.length} skaiciu, vidurkis gaunasi: ${ats}`;


const atsDOM = document.querySelector('#ats');

atsDOM.innerText = atsString;