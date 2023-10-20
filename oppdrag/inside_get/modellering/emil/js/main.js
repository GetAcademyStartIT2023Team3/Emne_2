// entrypoint
//
function main() {
    showModel('læreplan startDato', model.læreplaner[0].startDato);
    showModel('ukeplan', model.læreplaner[0].ukeplan);
    showModel('tema', model.tema);
    showModel('nøkkelord', model.nøkkelord);
    showModel('nøkkelord_relasjoner', model.nøkkelord_relasjoner);
    showModel('artikler', model.artikler);
    showModel('atomer', model.atomer);
    updateView();
}
