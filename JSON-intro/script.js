//Núcleo incial do projeto:

//1° - contruindo objetos pra ver como json os representa.

class Pais{
    constructor(pai, mae) {
        this.pai = pai;
        this.mae = mae;
        // ao definir atributos sempre use this, porque
        //senão o JS vai procurar uma variável de escopo maior
        //fora da classe.
    }
} 
class Aluno{
    //é um objeto que tem entre os atrivutos um outro objeto (pais)
    constructor(nome, cadastro, nascimento, pais, historico) {
        this.nome = nome;
        this.cadastro = cadastro;
        this.nascimento = nascimento;
        this.pais = pais;
        this.historico = historico;
    }

}



function myCode() {
    //os objetos são delimitados dentro de chaves.
    //como "Pais" é um objeto, ele acaba criando chaves dentro das chaves.
    let pais = new Pais('alberto', 'amanda')
    let historico = ['Cálculo 1', 'POO', 'Arquitetura de computadores']
    // declarando parâmetros/variáveis
    let estudante = new Aluno('Maria', '5592837', '21/06/2003', pais, historico); 
    console.log(estudante);

    let json = JSON.stringify(estudante);
    console.log(json);

    // no JSON beautify, ele já organiza os objetos,
    // que nem no thunder client
}