import React, { useEffect, useState } from 'react';
import Thermometer from './Thermometer';

export default function FearGreedThermometer() {
  const [value, setValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch('https://api.alternative.me/fng/?limit=1&format=json');
        const data = await res.json();
        if (data && data.data && data.data[0]) {
          setValue(Number(data.data[0].value));
        }
      } catch (e) {
        setValue(null);
        if (typeof window !== 'undefined') {
          console.log('Erro ao buscar Fear & Greed:', e);
        }
      }
      setLoading(false);
    }
    fetchData();
    const interval = setInterval(fetchData, 60 * 60 * 1000); // Atualiza a cada hora
    return () => clearInterval(interval);
  }, []);

  return (
    <Thermometer
      label="FEAR & GREED"
      value={value === null ? -1 : value}
      minLabel="Medo"
      maxLabel="Ganância"
    />
  );
} 