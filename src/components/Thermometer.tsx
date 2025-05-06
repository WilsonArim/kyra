import React from 'react';

interface ThermometerProps {
  label: string;
  value: number; // 0 a 100
  minLabel?: string;
  maxLabel?: string;
}

export default function Thermometer({ label, value, minLabel, maxLabel }: ThermometerProps) {
  // Define cor baseada no valor
  let color = 'bg-green-500';
  if (value < 40) color = 'bg-red-500';
  else if (value < 70) color = 'bg-yellow-400';

  return (
    <div className="flex flex-col items-center w-64 p-4 rounded-2xl bg-[#18162A] shadow-md">
      <span className="text-white font-bold text-lg mb-2">{label}</span>
      <div className="w-full h-6 bg-[#232136] rounded-full flex items-center relative">
        <div
          className={`h-6 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${value}%` }}
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-base">
          {value === -1 ? 'Indisponível' : `${value}%`}
        </span>
      </div>
      <div className="flex justify-between w-full mt-1 text-xs text-gray-400">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
      {label === 'FEAR & GREED' && (
        <div className="w-full mt-2 text-center text-xs text-gray-400">
          Fornecido por <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener noreferrer" className="underline text-blue-400 hover:text-blue-200">Alternative</a>
        </div>
      )}
    </div>
  );
} 