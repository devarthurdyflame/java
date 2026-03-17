function gerarResumo(n, cons, orig, desc, tot, porPessoa, classe) {
    var resumo = '======= RESUMO DA CONTA =======\n';
    resumo = resumo + 'Consumidor: ' + n + '\n';
    resumo = resumo + 'Consumo: ' + cons + ' kWh\n';
    resumo = resumo + 'Valor Original: R$ ' + orig.toFixed(2) + '\n';
    resumo = resumo + 'Desconto: R$ ' + desc.toFixed(2) + '\n';
    resumo = resumo + 'Valor Total: R$ ' + tot.toFixed(2) + '\n';
    resumo = resumo + 'Valor por Pessoa: R$ ' + porPessoa.toFixed(2) + '\n';
    resumo = resumo + 'Classificação: ' + classe + '\n';
    resumo = resumo + '-------------------------------\n';
    resumo = resumo + 'Obrigado pela preferência!';

    document.getElementById('saida').innerText = resumo;
    
    alert(resumo);
}
