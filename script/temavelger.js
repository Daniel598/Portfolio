const temaVelger = document.getElementById('temavelger');

function settTema(tema) {
    if (tema === 'mork') {
        document.documentElement.style.setProperty('--bakgrunn', 'black');
        document.documentElement.style.setProperty('--tekst', 'white');
        document.documentElement.style.setProperty('--border', 'white');
    } else if (tema === 'lys') {
        document.documentElement.style.setProperty('--bakgrunn', 'white');
        document.documentElement.style.setProperty('--tekst', 'black');
        document.documentElement.style.setProperty('--border', 'black');
    } else {
        document.documentElement.removeAttribute('style');
    }
    localStorage.setItem('tema', tema);
}

temaVelger.addEventListener('change', function () {
    settTema(this.value);
});

const lagretTema = localStorage.getItem('tema');
if (lagretTema) {
    temaVelger.value = lagretTema;
    settTema(lagretTema);
}
