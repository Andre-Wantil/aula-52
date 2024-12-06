const form = document.getElementById('user-form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');
const inputDataNasc = document.getElementById('dataNasc');

// Função de auto-complete dos caracteres especiais do telefone RECEBA
function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove tudo o que não for número

    if (valor.length <= 2) {
        input.value = '(' + valor;
    } else if (valor.length <= 6) {
        input.value = '(' + valor.slice(0, 2) + ') ' + valor.slice(2);
    } else {
        input.value = '(' + valor.slice(0, 2) + ') ' + valor.slice(2, 7) + '-' + valor.slice(7, 11);
    }
}

function validarData() {
    // Pega o valor inserido no campo de data
    const dataInserida = inputDataNasc.value;
    
    // Cria um objeto Date com a data atual
    const dataAtual = new Date();
    
    // Cria um objeto Date com a data inserida (convertendo o formato para um objeto Date)
    const dataConvertida = new Date(dataInserida);

    // Se a data inserida for maior que a data atual
    if (dataConvertida > dataAtual) {
        return false
    } else {
        return true
    }
}

function dataTreatment() {
    let treatedData = {};
    // Trata o input do nome
    const regexNome = /^[a-zA-Zá-úÁ-Úà-ùÀ-Ùâ-ûÂ-Ûã-õÃ-ÕçÇ]{3,}$/;
    // Trata o input do email
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Trata o telefone com caracteres especificos
    const regexTelefone = /^\(\d{2}\) 9\d{4}-\d{4}$/;

    const regexDataNasc = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

    if ((regexNome.test(inputName.value)&&
        regexEmail.test(inputEmail.value)&&
        regexTelefone.test(inputTelefone.value)&&
        regexDataNasc.test(inputDataNasc.value)&&
        validarData()
    )) {
        treatedData = {
            nome: inputName.value,
            email: inputEmail.value,
            telefone: inputTelefone.value,
            dataNascimento: inputDataNasc.value
        }
        
        console.log(treatedData);
    } else if (validarData() === false) {
        alert(`VAI TE CATA MAN VC NÃO NASCEU EM ${inputDataNasc.value} DESGRAÇADO MIZERÁVEL VAI ENGANAR A TUA AVÓ!!1!`);
    }
}

inputTelefone.addEventListener('input', function() {
    formatarTelefone(this);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    dataTreatment();
})