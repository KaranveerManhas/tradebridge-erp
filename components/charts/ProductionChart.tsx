'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function ProductionChart() {
  return (
    <Doughnut
      data={{
        labels: ['Production Pending', 'In Production', 'Partially Dispatched', 'Completed'],
        datasets: [{
          data: [5, 10, 4, 4],
          backgroundColor: [
            'rgba(232,200,74,0.8)',
            'rgba(75,142,240,0.8)',
            'rgba(240,122,75,0.8)',
            'rgba(62,207,142,0.8)',
          ],
          borderWidth: 0,
          hoverOffset: 6,
        }],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { color: '#9ba3b8', font: { size: 10 }, boxWidth: 10 } },
        },
      }}
    />
  );
}
