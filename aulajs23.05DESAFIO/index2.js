//Armazenando o nome da empresa
const nomeEmpresa = "Minha Empresa"

//Armazenando a lista de receitas
const receitas = [];


// Função para exibir o nome da empresa
function exibirNomeEmpresa() {
    console.log("Nome da empresa:", nomeEmpresa);
}


//Funcao para cadastrar uma receita
function cadastrarReceita(
    id,
    titulo,
    nivelDificuldade,
    ingredientes,
    instrucaoPreparo,
    videoPreparo,
    vegana
) {
    //Verificando se o identificador já existe na lista de receitas
    const receitaExistente = receitas.find((receita) => receita.id === id);
    if (receitaExistente) {
      console.log("Já existe uma receita com esse identificador.");
      return;
    }

    //Criando o objeto da receita
    const novaReceita = {
        id,
        titulo,
        nivelDificuldade,
        ingredientes,
        instrucaoPreparo,
        videoPreparo,
        vegana
    };

    //Adicionando a receita à lista de receitas
    receitas.push(novaReceita);
    
    console.log(`A Receita de ${novaReceita.titulo} foi cadastrada com sucesso!`)
}

//Funcao para exibir as receitas
function exibirReceitas() {
    exibirNomeEmpresa();
    console.log("Receitas cadastradas:");
    receitas.forEach((receita) => {
        console.log("------------------------------");
        console.log("Título: ", receita.titulo);
        console.log("Ingredientes: ", receita.ingredientes);
        console.log("Vegana: ", receita.vegana ? "Sim" : "Não");
      });
      console.log("------------------------------");
}


//Funcao para deletar uma receita
function deletarReceita(id) {
    const index = receitas.findIndex((receita) => receita.id === id);

    if (index === -1) {
        console.log("Receita não encontrada.");
        return;
    }

    receitas.splice(index, 1);
    console.log(`A Receita foi deletada com sucesso`);
}


//Cadastrando receita
cadastrarReceita(
    1,
    "Bolo de Chocolate",
    "Moderada",
    ["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1 colher de fermento em pó"],
    "1. Misture todos os ingredientes em uma tigela.\n2. Despeje em uma forma untada.\n3. Asse em forno preaquecido a 180°C por 30 minutos.",
    "https://www.youtube.com/watch?v=abcd1234",
    false
);

cadastrarReceita(
    2,
    "Bolo de Cenoura",
    "Moderada",
    ["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1 colher de fermento em pó", "2 cenouras"],
    "1. Misture todos os ingredientes em uma tigela.\n2. Despeje em uma forma untada.\n3. Asse em forno preaquecido a 180°C por 30 minutos.",
    "https://www.youtube.com/watch?v=abcd1234",
    false
);

cadastrarReceita(
    3,
    "Mingau",
    "Simples",
    ["500ml de leite", "3 colheres de Maizena", "2 colheres de açúcar"],
    "1. Misture todos os ingredientes em uma panela. \n2. Leve ao fogo baixo mexendo sem parar até engrossar. Despeje em uma vasilha e sirva",
    "https://www.youtube.com/watch?v=abcd1234",
    true
);


exibirReceitas();

deletarReceita(2);

exibirReceitas();


