import React, { useEffect, useState } from 'react';
import Thermometer from './Thermometer';

console.log('Deploy atualizado! BitcoinDominanceThermometer carregado');

export default function BitcoinDominanceThermometer() {
  const [value, setValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/global');
        const data = await res.json();
        if (data && data.data && data.data.market_cap_percentage && data.data.market_cap_percentage.btc) {
          setValue(Number(data.data.market_cap_percentage.btc.toFixed(2)));
        }
      } catch (e) {
        setValue(null);
        if (typeof window !== 'undefined') {
          console.log('Erro ao buscar Bitcoin Dominance:', e);
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
      label="BITCOIN DOMINANCE"
      value={value === null ? -1 : value}
      minLabel="0%"
      maxLabel="100%"
    />
  );
} 