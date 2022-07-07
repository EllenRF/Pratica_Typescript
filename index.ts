//Desafio 01
interface Employee {
  code: number
  name: string
}
const employee: Employee = {
  code: 10,
  name: 'John'
}
let button01 = document.getElementById('btn_Funcionario') as HTMLElement
let input01 = document.getElementById('Cd_Funcionario') as HTMLInputElement
let saida01 = document.getElementById('saida01') as HTMLElement

function buscarFuncionario(code: number) {
  if (code === employee.code) {
    return 'O nome do funcionário é ' + employee.name
  } else {
    return 'Funcionário não encontrado'
  }
}

button01?.addEventListener('click', () => {
  saida01.innerText = buscarFuncionario(parseInt(input01.value))
})

//Desafio 02
interface Pessoa {
  nome: string
  idade: number
  profissao: string
}
let pessoas: Pessoa[] = [
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
]

let button02 = document.getElementById('btn_nome') as HTMLElement
let input02 = document.getElementById('nome') as HTMLInputElement
let saida02 = document.getElementById('saida02') as HTMLElement

function buscarPessoa(name: string) {
  return pessoas.find(pessoa => pessoa.nome == name)
}

button02?.addEventListener('click', () => {
  let pessoa = buscarPessoa(input02.value)
  saida02.innerText = `nome: ${pessoa?.nome} \n idade: ${pessoa?.idade} \n profissão: ${pessoa?.profissao}`
})

//Desafio 03

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement
let soma = document.getElementById('soma') as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement

function somarAoSaldo(soma: number) {
  return parseInt(campoSaldo.innerText) + soma
}

function limparSaldo() {
  return 0
}

botaoAtualizar.addEventListener('click', () => {
  campoSaldo.innerText = somarAoSaldo(parseInt(soma.value)).toString()
})

botaoLimpar.addEventListener('click', () => {
  campoSaldo.innerText = limparSaldo().toString()
})

campoSaldo.innerText = limparSaldo().toString()
