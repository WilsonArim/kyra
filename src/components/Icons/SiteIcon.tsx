import React from 'react';
import Image from 'next/image';

interface SiteIconProps {
  siteName: string;
  size?: number;
}

const SiteIcon: React.FC<SiteIconProps> = ({ siteName, size = 16 }) => {
  const getIconUrl = (name: string): string => {
    const iconMap: { [key: string]: string } = {
      // Portfolio
      'DeBank': 'https://debank.com/favicon.ico',
      'Step Finance': 'https://step.finance/favicon.ico',
      
      // CEX
      'Binance': 'https://www.binance.com/favicon.ico',
      'Coinbase': 'https://www.coinbase.com/favicon.ico',
      'FTX': 'https://ftx.com/favicon.ico',
      'KuCoin': 'https://www.kucoin.com/favicon.ico',
      
      // DEX
      'PancakeSwap': 'https://pancakeswap.finance/favicon.ico',
      'Uniswap': 'https://uniswap.org/favicon.ico',
      'Jupiter': 'https://jup.ag/favicon.ico',
      'Meteora': 'https://meteora.ag/favicon.ico',
      'Orca': 'https://www.orca.so/favicon.ico',
      'Raydium': 'https://raydium.io/favicon.ico',
      'Lp4-fun': 'https://lp4.fun/favicon.ico',
      'Cetus': 'https://www.cetus.zone/favicon.ico',
      'Turbos': 'https://turbos.finance/favicon.ico',
      
      // Stake
      'Aave': 'https://app.aave.com/favicon.ico',
      'Notional': 'https://notional.finance/favicon.ico',
      'SuiLend': 'https://suilend.com/favicon.ico',
      'Kamino': 'https://kamino.finance/favicon.ico',
      'Spectra': 'https://spectra.finance/favicon.ico',
      'Pendle': 'https://app.pendle.finance/favicon.ico',
      'Hyperliquid': 'https://app.hyperliquid.xyz/favicon.ico',
      
      // Analysis
      'DeFi Station': 'https://www.defistation.xyz/favicon.ico',
      'Poolfish': 'https://poolfish.xyz/favicon.ico',
      'DeFiLlama': 'https://defillama.com/favicon.ico',
      'CoinGecko': 'https://www.coingecko.com/favicon.ico',
      'CoinMarketCap': 'https://coinmarketcap.com/favicon.ico',
      'Dexscreener': 'https://dexscreener.com/favicon.ico',
      
      // DAO
      'UniswapGovernance': 'https://gov.uniswap.org/favicon.ico',
      'DeepDao': 'https://deepdao.io/favicon.ico'
    };

    // Fallback para o Google Favicon Service se não encontrar no mapa
    return iconMap[name] || `https://www.google.com/s2/favicons?domain=${name.toLowerCase().replace(/\s+/g, '')}.com&sz=${size}`;
  };

  return (
    <Image
      src={getIconUrl(siteName)}
      alt={`${siteName} icon`}
      width={size}
      height={size}
      className="inline-block mr-2"
      unoptimized // Para evitar problemas com o carregamento de ícones externos
    />
  );
};

export default SiteIcon; 