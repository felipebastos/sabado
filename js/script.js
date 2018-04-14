window.onload = function(){
    /*var seu_nome = prompt('Oi, eu sou o navegador, qual o seu nome?');
    var nome = document.getElementById('nome');
    nome.innerHTML = "<b>"+seu_nome+"</b>";
    */
    

    // let para definir variáveis ou objetos
    let frase = 'Hoje é um dia ensolarado.';
    frase = 'Ontem foi chuvoso.';
    //console.log(frase);

    // const define variáveis ou objetos que não podem mudar de valor.
    const pi = 3.14159;
    //console.log(pi);

    // Template literal
    let um = 'Felipe';
    let dois = 'Bastos';
     //console.log(`Professor ${um} ${dois}`);

    // Destructuring
    let lista = ['Felipe', 'Jeferson', 'Luan', 'Moysés', 'Luis'];
    //let primeiro = lista[0];
    //let segundo = lista[1];
    //let terceiro = lista[2];
    let [primeiro, ,ultimo, ,outro] = lista;
    //console.log(`${primeiro} ganhou de ${ultimo} e de ${outro}`);
    // Destructuring de objetos.
    let coisa = {nome:'Felipe', idade: 31, profissao: 'Professor'};
    let {profissao, nome} = coisa;
    //console.log(`${nome} é ${profissao}`);

    // Laço de repetição for...of.
    const nomes = ['Joyce', 'Belinha', 'Jeska', 'Alysson', 'Moysés', 'Luan', 'Luis', 'Jeferson'];
    for(let nome of nomes){
        //console.log(nome);
    }

    // Spread - espalhamento
    const livros = ['Dom Quixote', 'Moby Dick', 'Marco Polo', 'As aventuras de Guliver'];
    //console.log(...livros);
    const outros = ['Curupira', 'Caipora', 'Saci'];
    const novaLista = [...livros, ...outros];
    //console.log(novaLista);


    // Rest parameter
    const pedido = [20.17, 18.67, 1.50, "queijo", "ovos", "leite","pão"];
    let [total, subtotal, imposto, ...produtos] = pedido;
    //console.log(produtos);
    // Usando o rest parameter para funções receberem argumentos em quantidade indeterminada.
    //console.log(soma(1, 2, 41, 231, 42));
    //console.log(soma(1,3));
    
    // Arrow function.
    const nomes2 = ['jeferson', 'felipe', 'moyses'];
    const nomesMaiusculos = nomes2.map( name =>
    name.toUpperCase());
    console.log(nomes2);
    console.log(nomesMaiusculos);

    // Parametros com valor padrão
    digaOi(31);


    // Classes.
    let totoh = new Cachorro('Totó');
    totoh.latir();

    let mimi = new Gato('Mimi');
    mimi.mia();

    let novoGato = new NovoTipoDeGato('Momoh', 'au au');
    novoGato.mia();
};

class Gato{
    constructor(nome){
        this.nome = nome;
    }
    mia(){
        console.log(`${this.nome}: miau`);
    }
}

class NovoTipoDeGato extends Gato{
    constructor(nome, som){
        super(nome);
        this.som = som;
    }
    mia(){
        console.log(`${this.nome} fez ${this.som}`);
    }
}


function Cachorro(nome){
    this.nome = nome;
};
Cachorro.prototype.latir = function(){
    console.log('au au');
};

// Valor default.
function digaOi(idade, nome = 'Josézinho'){
    console.log(`Oi ${nome} de ${idade}`);
}


// Variadic functions
function soma(...valores){
    let total = 0;
    for(const valor of valores){
        total += valor;
    }
    return total;
}




