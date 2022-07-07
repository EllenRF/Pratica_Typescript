var employee = {
    code: 10,
    name: 'John'
};
var button01 = document.getElementById('btn_Funcionario');
var input01 = document.getElementById('Cd_Funcionario');
var saida01 = document.getElementById('saida01');
function buscarFuncionario(code) {
    if (code === employee.code) {
        return 'O nome do funcionário é ' + employee.name;
    }
    else {
        return 'Funcionário não encontrado';
    }
}
button01 === null || button01 === void 0 ? void 0 : button01.addEventListener('click', function () {
    saida01.innerText = buscarFuncionario(parseInt(input01.value));
});
var pessoas = [
    {
        nome: 'maria',
        idade: 29,
        profissao: 'atriz'
    },
    {
        nome: 'roberto',
        idade: 19,
        profissao: 'Padeiro'
    },
    {
        nome: 'laura',
        idade: 32,
        profissao: 'Atriz'
    },
    {
        nome: 'carlos',
        idade: 19,
        profissao: 'padeiro'
    }
];
var button02 = document.getElementById('btn_nome');
var input02 = document.getElementById('nome');
var saida02 = document.getElementById('saida02');
function buscarPessoa(name) {
    return pessoas.find(function (pessoa) { return pessoa.nome == name; });
}
button02 === null || button02 === void 0 ? void 0 : button02.addEventListener('click', function () {
    var pessoa = buscarPessoa(input02.value);
    saida02.innerText = "nome: ".concat(pessoa === null || pessoa === void 0 ? void 0 : pessoa.nome, " \n idade: ").concat(pessoa === null || pessoa === void 0 ? void 0 : pessoa.idade, " \n profiss\u00E3o: ").concat(pessoa === null || pessoa === void 0 ? void 0 : pessoa.profissao);
});
//Desafio 03
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
function somarAoSaldo(soma) {
    return parseInt(campoSaldo.innerText) + soma;
}
function limparSaldo() {
    return 0;
}
botaoAtualizar.addEventListener('click', function () {
    campoSaldo.innerText = somarAoSaldo(parseInt(soma.value)).toString();
});
botaoLimpar.addEventListener('click', function () {
    campoSaldo.innerText = limparSaldo().toString();
});
campoSaldo.innerText = limparSaldo().toString();
