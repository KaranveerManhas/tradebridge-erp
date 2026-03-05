'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
  Filler, Tooltip, Legend,
} from 'chart.js';
import { chartData } from '@/lib/data';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function PnLChart() {
  return (
    <Line
      data={{
        labels: chartData.months,
        datasets: [
          { label: 'Revenue', data: chartData.revenue, borderColor: 'rgba(232,200,74,0.9)', backgroundColor: 'rgba(232,200,74,0.06)', tension: 0.4, fill: true, borderWidth: 2 },
          { label: 'Cost',    data: chartData.cost,    borderColor: 'rgba(240,75,75,0.7)',   backgroundColor: 'rgba(240,75,75,0.04)',   tension: 0.4, fill: true, borderWidth: 2 },
          { label: 'Profit',  data: chartData.profit,  borderColor: 'rgba(62,207,142,0.9)',  backgroundColor: 'rgba(62,207,142,0.08)',  tension: 0.4, fill: true, borderWidth: 2 },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#9ba3b8', font: { size: 10 } } } },
        scales: {
          x: { ticks: { color: '#5c6478' }, grid: { color: 'rgba(255,255,255,0.03)' } },
          y: { ticks: { color: '#5c6478', callback: (v) => '$' + Math.round(+v / 1000) + 'K' }, grid: { color: 'rgba(255,255,255,0.05)' } },
        },
      }}
    />
  );
}
