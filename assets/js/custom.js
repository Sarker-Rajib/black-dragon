"use strict";

{
  const ctx = document.getElementById('myChartRound').getContext('2d');
  const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset
      data: {
          labels: ["Pre-seed", "Seed", "Public", "Foundation and Team"],
          datasets: [{
              label: [],
              backgroundColor: [
                "#3ad1b2", "#297666", "#191919", "#2f9983",
              ],
              data: [15, 15, 30, 35],
          }]
      },
  
      // Configuration options go here
      options: {
        legend: {
              display: true,
          },
        tooltips: {
          enabled: true,
          mode: 'index',
        },

        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
      }
  });

}

{
  const ctx2 = document.getElementById("myChartBar").getContext('2d');
  const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ["TGE","m1","m2","m3","m3","m4","m5","m6","m7","m8","m9","m10","m11","m12"],
      datasets: [{
        label: 'Pre-seed',
        backgroundColor: "#3ad1b2",
        data: [25, 27, 29, 31, 33, 35, 37, 39, 41, 42, 43, 44, 45, 48],
      }, {
        label: 'Seed',
        backgroundColor: "#2f9983",
        data: [25, 27, 29, 31, 33, 35, 37, 39, 41, 42, 43, 44, 45, 48],
      }, {
        label: 'Public',
        backgroundColor: "#191919",
        data: [ 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, ],
      }, {
        label: 'Foundation and Team',
        backgroundColor: "#297666",
        data: [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,],
      }],
    },
  options: {
      tooltips: {
        displayColors: true,
        callbacks:{
          mode: 'x',
        },
      },
      scales: {
        xAxes: [{
          stacked: true,
          gridLines: {
            display: true,
          }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
        }]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: { position: 'bottom' },
    }
  });
}