function gerarNumeros(quantidade) {
    const prefixoPais = '+258';
    const prefixosOperadoras = ['84', '85', '87', '86', '82'];
    let numerosGerados = [];

    for (let i = 0; i < quantidade; i++) {
        const prefixoOperadora = prefixosOperadoras[Math.floor(Math.random() * prefixosOperadoras.length)];
        const numero = Math.floor(1000000 + Math.random() * 9000000).toString().padStart(7, '0');
        numerosGerados.push(`${prefixoPais}${prefixoOperadora}${numero}`);
    }

    // Junta os números separados por ponto e vírgula sem espaços adicionais
    document.getElementById('numerosGerados').value = numerosGerados.join(';');
}

function baixarNumeros(formato) {
    const text = document.getElementById('numerosGerados').value.replace(/\n/g, formato === 'csv' ? ',' : '\t');
    const blob = new Blob([text], { type: `text/${formato === 'xls' ? 'plain' : formato}` });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `numeros.${formato}`;
    link.click();
}

function copiarNumeros() {
    const text = document.getElementById('numerosGerados').value;
    navigator.clipboard.writeText(text).then(() => {
        alert('Números copiados para a área de transferência!');
    }, (err) => {
        console.error('Erro ao copiar números: ', err);
    });
}