document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('financeChart').getContext('2d');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Lazer', 'Estudos', 'Alimentação', 'Moradia', 'Transporte', 'Viagens'],
        datasets: [{
          label: 'Gastos por Categoria (R$)',
          data: [900, 1200, 1000, 2000, 1100, 1400],
          backgroundColor: '#255959',
          borderColor: '#118C80',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return 'R$ ' + value;
              }
            }
          }
        }
      }
    });
  });