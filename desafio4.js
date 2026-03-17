function gerarRanking(listaClientes) {
    const ranking = [...listaClientes].sort((a, b) => b.valorTotal - a.valorTotal);

    const container = document.getElementById('exibicao-ranking');
    container.innerHTML = "<h3>Ranking de Clientes</h3>";

    ranking.forEach((cliente, index) => {
        const item = document.createElement('p');
        item.textContent = `${index + 1}º - ${cliente.nome}: R$ ${cliente.valorTotal.toFixed(2)}`;
        container.appendChild(item);
    });
}
