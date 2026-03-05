'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend,
} from 'chart.js';
import { chartData } from '@/lib/data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function RevenueChart() {
  return (
    <Bar
      data={{
        labels: chartData.months,
        datasets: [
          { label: 'Revenue', data: chartData.revenue, backgroundColor: 'rgba(232,200,74,0.7)', borderRadius: 4 },
          { label: 'Cost', data: chartData.cost, backgroundColor: 'rgba(75,142,240,0.5)', borderRadius: 4 },
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
