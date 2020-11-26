function arPrasmingasSarasas(sarasas) {
    if (!Array.isArray(sarasas)) {
        console.error('ERROR: duotas ne array');
        return false;
    }
    if (sarasas.length === 0) {
        console.error('ERROR: duotas array yra tuscias');
        return false;
    }
    
    return true;
}
function arNormalusSkaicius (skaicius, tikrinamoObjektasPavadinimas) {
    if (typeof tikrinamoObjektasPavadinimas !== 'string') {
        console.warn('WARNING: skaiciaus tipo tikrinimui nera duotas tikrinamo objekto pavadinimas')
        tikrinamoObjektasPavadinimas = 'reikme/objektas';
    }
    if (typeof skaicius !== 'number') {
        console.error(`ERROR: gautas ${tikrinamoObjektasPavadinimas} nera skaicius tipo.`);
        return false;
    }
    if (!isFinite(skaicius)) {
        console.error(`ERROR: gautas ${tikrinamoObjektasPavadinimas} nera tikras skaicius.`);
        return false;
    }
    return true;
}

export { arPrasmingasSarasas, arNormalusSkaicius }