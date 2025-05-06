import React from 'react';
import Link from 'next/link';
import SiteIcon from './Icons/SiteIcon';

interface MenuItem {
  name: string;
  items?: {
    name: string;
    items?: {
      name: string;
      url?: string;
    }[];
  }[];
}

const handleExternalLink = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
  const confirmNavigation = window.confirm('Você está saindo do KyraCrypto. Deseja continuar?');
  if (!confirmNavigation) {
    e.preventDefault();
  }
};

const menuItems: MenuItem[] = [
  {
    name: 'PORTFOLIO',
    items: [
      {
        name: 'EVM',
        items: [
          { name: 'DeBank', url: 'https://debank.com' }
        ]
      },
      {
        name: 'SOL',
        items: [
          { name: 'Step Finance', url: 'https://step.finance' }
        ]
      }
    ]
  },
  {
    name: 'CEX',
    items: [
      {
        name: 'EVM',
        items: [
          { name: 'Binance', url: 'https://www.binance.com' },
          { name: 'Coinbase', url: 'https://www.coinbase.com' }
        ]
      },
      {
        name: 'SOL',
        items: [
          { name: 'FTX', url: 'https://ftx.com' },
          { name: 'KuCoin', url: 'https://www.kucoin.com' }
        ]
      },
      {
        name: 'SUI',
        items: []
      }
    ]
  },
  {
    name: 'DEX',
    items: [
      {
        name: 'EVM',
        items: [
          { name: 'PancakeSwap', url: 'https://pancakeswap.finance' },
          { name: 'Uniswap', url: 'https://uniswap.org' },
          { name: 'DeBank', url: 'https://debank.com' },
          { name: 'Step Finance', url: 'https://step.finance' }
        ]
      },
      {
        name: 'SOL',
        items: [
          { name: 'Jupiter', url: 'https://jup.ag' },
          { name: 'Meteora', url: 'https://meteora.ag' },
          { name: 'Orca', url: 'https://www.orca.so' },
          { name: 'Raydium', url: 'https://raydium.io' },
          { name: 'Lp4-fun', url: 'https://lp4.fun' },
          { name: 'Revert', url: '#' }
        ]
      },
      {
        name: 'SUI',
        items: [
          { name: 'Cetus', url: 'https://www.cetus.zone' },
          { name: 'Turbos', url: 'https://turbos.finance' }
        ]
      }
    ]
  },
  {
    name: 'STAKE',
    items: [
      {
        name: 'Lending',
        items: [
          { name: 'Aave', url: 'https://app.aave.com' },
          { name: 'Notional', url: 'https://notional.finance' },
          { name: 'SuiLend', url: 'https://suilend.com' }
        ]
      },
      {
        name: 'Staking',
        items: [
          { name: 'Kamino', url: 'https://kamino.finance' },
          { name: 'Spectra', url: 'https://spectra.finance' }
        ]
      },
      {
        name: 'Yield Farming',
        items: [
          { name: 'Pendle', url: 'https://app.pendle.finance' }
        ]
      },
      {
        name: 'Derivatives',
        items: [
          { name: 'Hyperliquid', url: 'https://app.hyperliquid.xyz' }
        ]
      }
    ]
  },
  {
    name: 'POOL',
    items: []
  },
  {
    name: 'ANÁLISE',
    items: [
      {
        name: 'Pools',
        items: [
          { name: 'DeFi Station', url: 'https://www.defistation.xyz/pools' },
          { name: 'Poolfish (EVM)', url: 'https://poolfish.xyz' }
        ]
      },
      {
        name: 'Monitorização',
        items: [
          { name: 'DeFiLlama', url: 'https://defillama.com' },
          { name: 'CoinGecko', url: 'https://www.coingecko.com' },
          { name: 'CoinMarketCap', url: 'https://coinmarketcap.com' },
          { name: 'Dexscreener', url: 'https://dexscreener.com' }
        ]
      }
    ]
  },
  {
    name: 'DAO',
    items: [
      {
        name: 'EVM',
        items: [
          { name: 'UniswapGovernance', url: 'https://gov.uniswap.org' }
        ]
      },
      {
        name: 'SOL',
        items: [
          { name: 'Jupiter', url: 'https://vote.jup.ag' }
        ]
      },
      {
        name: 'DeepDao',
        items: [
          { name: 'Organizations', url: 'https://deepdao.io/organizations' }
        ]
      }
    ]
  }
];

const TabNavigation: React.FC = () => {
  return (
    <nav className="fixed top-20 left-0 right-0 bg-[#0B0B2B] border-b border-gray-800 z-50">
      <div className="container mx-auto">
        <ul className="flex items-center justify-center h-14">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              <button className="px-6 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors">
                {item.name}
              </button>
              
              {item.items && item.items.length > 0 && (
                <ul className="absolute left-0 hidden group-hover:block min-w-[160px] bg-[#1a1a3a] rounded-lg shadow-xl">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative group/sub">
                      <button className="w-full text-left px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-[#2a2a4a] transition-colors">
                        {subItem.name}
                      </button>

                      {subItem.items && subItem.items.length > 0 && (
                        <ul className="absolute left-full top-0 hidden group-hover/sub:block min-w-[160px] bg-[#1a1a3a] rounded-lg shadow-xl">
                          {subItem.items.map((subSubItem, subSubIndex) => (
                            <li key={subSubIndex}>
                              <Link
                                href={subSubItem.url || '#'}
                                className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-[#2a2a4a] transition-colors flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => handleExternalLink(e, subSubItem.url || '#')}
                              >
                                <SiteIcon siteName={subSubItem.name} />
                                {subSubItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TabNavigation; 