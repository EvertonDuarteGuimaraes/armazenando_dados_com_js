const form = document.getElementById('novoItem');
const list = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach( (elemento) => {
    criarNovoElemento(elemento);
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
     }

    criarNovoElemento(itemAtual);
    itens.push(itemAtual);
    localStorage.setItem('itens', JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

function criarNovoElemento (item) {
    const novoItem  = document.createElement('li');
    novoItem.classList.add('item');

    const numeroDeItens = document.createElement('strong');
    numeroDeItens.innerHTML = item.quantidade;

    novoItem.appendChild(numeroDeItens);
    novoItem.innerHTML += item.nome;

    list.appendChild(novoItem);
}