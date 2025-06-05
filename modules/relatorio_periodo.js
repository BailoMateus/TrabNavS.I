document.addEventListener('DOMContentLoaded', function () {
    const ctxPeriodo = document.getElementById('graficoDePeriodo');
    let chartPeriodo; // Variável para armazenar a instância do gráfico

    // Função para gerar datas de um mês específico (exemplo)
    function getDaysInMonth(month, year) {
        let date = new Date(year, month - 1, 1);
        let days = [];
        while (date.getMonth() === month - 1) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    // Função para gerar dados de despesa aleatórios para os dias
    function generateRandomExpenses(numDays) {
        let expenses = [];
        for (let i = 0; i < numDays; i++) {
            expenses.push(Math.floor(Math.random() * 200) + 20); // Despesas entre 20 e 220
        }
        return expenses;
    }

    function renderChart(month, year) {
        if (!ctxPeriodo) return;

        const daysInSelectedMonth = getDaysInMonth(month, year);
        const expenseDataForMonth = generateRandomExpenses(daysInSelectedMonth.length);

        const data = {
            labels: daysInSelectedMonth, // Array de objetos Date
            datasets: [{
                label: `Despesas Diárias - ${String(month).padStart(2, '0')}/${year}`,
                data: expenseDataForMonth,
                fill: false,
                borderColor: '#118C80', // Verde-azulado
                tension: 0.1, // Suaviza a linha
                pointBackgroundColor: '#255959', // Azul escuro para os pontos
                pointBorderColor: '#255959',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        };

        const config = {
            type: 'line', // Tipo de gráfico
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'time', // Eixo X como tempo
                        time: {
                            unit: 'day', // Unidade base
                            displayFormats: {
                                day: 'dd/MM' // Formato de exibição das datas
                            },
                            tooltipFormat: 'dd/MM/yyyy' // Formato no tooltip
                        },
                        title: {
                            display: true,
                            text: 'Dia do Mês'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Valor da Despesa (R$)'
                        },
                        ticks: {
                            // Formata o eixo Y como moeda
                            callback: function(value, index, values) {
                                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            title: function(tooltipItems) {
                                // Formata o título do tooltip para incluir o dia da semana
                                const date = new Date(tooltipItems[0].parsed.x);
                                return date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label.includes('Despesas Diárias')) { // Remove o label redundante do dataset
                                   label = 'Despesa: ';
                                } else {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        };

        // Destruir o gráfico anterior se existir, antes de renderizar um novo
        if (chartPeriodo) {
            chartPeriodo.destroy();
        }
        chartPeriodo = new Chart(ctxPeriodo, config);
    }

    // Event listener para o botão de filtro
    const filtrarBtn = document.getElementById('filtrarPeriodo');
    if (filtrarBtn) {
        filtrarBtn.addEventListener('click', function() {
            const mesSelecionado = parseInt(document.getElementById('mesSelecao').value);
            const anoSelecionado = parseInt(document.getElementById('anoSelecao').value);
            if (mesSelecionado && anoSelecionado) {
                renderChart(mesSelecionado, anoSelecionado);
            } else {
                alert('Por favor, selecione um mês e um ano válidos.');
            }
        });
    }

    // Renderizar o gráfico inicial com valores padrão (ex: Junho de 2025)
    const initialMes = parseInt(document.getElementById('mesSelecao').value);
    const initialAno = parseInt(document.getElementById('anoSelecao').value);
    if (initialMes && initialAno) {
        renderChart(initialMes, initialAno);
    }
});