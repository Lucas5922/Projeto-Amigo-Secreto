let nomesNaLista = [];

function exibir(tag, nome){
    let nomes = document.querySelector(tag);
    nomes.innerHTML = nome;
}


function adicionarAmigo(){
    let nomes = document.querySelector('input').value;
    limparCampo();

    if (nomes == ''){
        alert('Você precisa adicionar os nomes na lista!');
    }else{
        nomesNaLista.push(nomes);
        let nomesConcatenados = '';
        let i = 0;
        while (i < nomesNaLista.length){
            nomesConcatenados += `<li>${nomesNaLista[i]}<li>`;
            i++;
        }
    
        exibir('ul', `Lista de amigos: <br><br>${nomesConcatenados}`);
    }
}


function sortearAmigo(){
    let tamanhoDaLista = nomesNaLista.length;
    let sorteio = [Math.floor(Math.random() * tamanhoDaLista)];

    if (nomesNaLista == ''){
        alert('Você precisa adicionar pelo menos dois amigos para sortear...');
    }else{
        exibir('ul', `O Amigo secreto sorteado é : ==> ${nomesNaLista[sorteio]}`);
    }
}


function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}