const calcularBtn = document.querySelector('.botao_notas');
const confirmaModalBtn = document.querySelector(".botao_confirma_modal_resultado");

confirmaModalBtn.addEventListener('click', confirmaModal);

calcularBtn.addEventListener('click', mostraResultado);

const msgError = document.querySelector('#erro');
const campoN1 = document.querySelector('#n1');
const campoN2 = document.querySelector('#n2');
const campoN3 = document.querySelector('#n3');
const resultado = document.querySelector('#resultado');

campoN1.addEventListener('change', )

function mostraResultado() {
    const modal = document.querySelector("#modal");
    if(validaCampo(campoN1) && validaCampo(campoN2) && validaCampo(campoN3)) {
        let mediaSemestral = calculaMediaSemetral(campoN1, campoN2, campoN3);
        if (mediaSemestral >= 7.0) {
            //passou
            resultado.innerHTML += `
                <h2 class="modal_mensagem" >Você foi:</h2>        
                <h3 class="modal_resultado_semestre resultado_aprovado">APROVADO</h3>
                <p class="modal_resultado_media">A sua média semestral foi de ${mediaSemestral.toFixed(2)}</p>`;
        } else if (mediaSemestral > 3.0) {
            //exame final
            let exameFinal = calculaExameFinal(mediaSemestral.toFixed(2));
            resultado.innerHTML = `
                <h2 class="modal_mensagem" >Você está de:</h2>        
                <h3 class="modal_resultado_semestre resultado_exame_final">EXAME FINAL</h3>
                <p class="modal_resultado_media">A sua média semestral foi de ${mediaSemestral.toFixed(2)}</p>
                <p class="modal_resultado_exame_final"> Você precisa de ${exameFinal.toFixed(2)} para passar</p>`;
        } else {
            //reprovado
            resultado.innerHTML = `
                <h2 class="modal_mensagem" >Você foi:</h2>        
                <h3 class="modal_resultado_semestre resultado_reprovado">REPROVADO</h3>
                <p class="modal_resultado_media">A sua média semestral foi de ${mediaSemestral.toFixed(2)}</p>`;
        }
        modal.showModal();
    } else {
        msgError.style.display = 'block';
    }

}

function confirmaModal() {
    modal.close();
}

function validaCampo(campo) {
    if(campo.value <= 10 && campo.value >= 0 && campo.value != '') {
        return true;
    } else {
        campo.value = "";
        campo.focus();
        return false;
    }
}

function calculaMediaSemetral(campo1, campo2, campo3) {
    let soma = parseFloat(campo1.value) + parseFloat(campo2.value) + parseFloat(campo3.value);
    console.log(soma)
    let mediaSemestral = soma/3;
    return mediaSemestral;
}

function calculaExameFinal(mediaSemestral) {return (10 - mediaSemestral)};