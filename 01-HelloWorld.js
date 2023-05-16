const Isaac = {
    nome: "Isaac Jerônimo Moreira",
    idade: 31,
    cidade: "Fortaleza",
    UF: "Ceará",
    email: "isaac@gama.com.br",
    senha: "abc123"
}

const Mariana = {
    nome: "Mariana Patyele Pereira",
    idade: 28,
    cidade: "Goiânia",
    UF: "GO",
    email: "mariana@gama.com.br",
    senha: "123cde"
}

const Pedro = {
    nome: "Pedro Abenza",
    idade: 18,
    cidade: "Bady-Bassit",
    UF: "SP",
    email: "pedro@gama.com.br",
    senha: "abc124cc"
}

const Valfrido = {
    nome: "Valfrido Santiago",
    idade: 25,
    cidade: "Goiana",
    UF: "PE",
    email: "Valfridosantiago@gama.com.br",
    senha: "ttb4477"
}


let nome, idade, cidade, uf, email = "isaac@gama.com.br", senha = "abc123";
nome = Isaac.nome;
idade = Isaac.idade;
cidade = Isaac.cidade;
uf = Isaac.UF;


let msg = `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} - ${uf} e trabalho como desenvolvedor`;



if ((Isaac.email == email) && (Isaac.senha == senha)) {
    console.log("Usuário autenticado!");
    console.log(msg);
} else {
    console.log("Usuário não autenticado!");
}