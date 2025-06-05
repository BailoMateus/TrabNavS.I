document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('graficoDeCategorias');

    if (ctx) {
        // Dados de exemplo para o gráfico
        const data = {
            labels: [
                'Lazer',
                'Estudos',
                'Alimentação',
                'Moradia',
                'Transporte',
                'Viagens'
            ],
            datasets: [{
                label: 'Despesas por Categoria',
                data: [300.50, 250.75, 400.00, 850.20, 150.00, 600.30], // Valores de exemplo
                backgroundColor: [ // Cores para cada categoria
                    '#FF6384', // Rosa avermelhado (Lazer)
                    '#36A2EB', // Azul (Estudos)
                    '#FFCE56', // Amarelo (Alimentação)
                    '#4BC0C0', // Verde-água (Moradia)
                    '#9966FF', // Roxo (Transporte)
                    '#FF9F40'  // Laranja (Viagens)
                ],
                hoverOffset: 4 // Efeito ao passar o mouse sobre uma fatia
            }]
        };

        // Configurações do gráfico
        const config = {
            type: 'doughnut', // Tipo de gráfico: 'pie' para pizza, 'doughnut' para rosca
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false, // Permite controlar melhor o tamanho pelo CSS do container
                plugins: {
                    legend: {
                        position: 'top', // Posição da legenda
                        labels: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Distribuição de Despesas por Categoria',
                        font: {
                            size: 16
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    // Formata o valor para moeda Brasileira (R$)
                                    label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed);
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        };

        // Criar o gráfico
        new Chart(ctx, config);
    }

});