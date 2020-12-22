import CPFValido from './modules/CPFValido';

import GerarCPF from './modules/GerarCPF';

import './assets/css/style.css';


// (function() {
//     const gera = new GerarCPF();
//     const cpfGerado = document.querySelector('.cpf-gerado');
//     cpfGerado.innerHTML = gera.gerarNovoCPF();
// })();

function novoCPF() {
    const gera = new GerarCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.gerarNovoCPF();
};
novoCPF();

document.addEventListener('click', event => {
    const element = event.target;
    if (element.classList.contains('gerar')) {
        novoCPF();
    }
});

const valida = new CPFValido();