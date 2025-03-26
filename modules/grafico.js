document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('financeChart').getContext('2d');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Gastos Mensais (R$)',
          data: [1200, 1900, 1500, 2000, 1800, 2200],
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