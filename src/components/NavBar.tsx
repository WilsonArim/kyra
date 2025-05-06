import React, { useState, useRef } from 'react';
import Link from 'next/link';

type MenuLink = {
  label: string;
  url?: string;
  path?: string;
  external?: boolean;
};

type MenuItem = {
  label: string;
  path?: string;
  url?: string;
  external?: boolean;
  submenu?: MenuItem[];
};

const MENU: MenuItem[] = [
  {
    label: 'PORTFÓLIO',
    path: '/portfolio',
    submenu: [
      {
        label: 'EVM',
        submenu: [
          { label: 'DeBank', url: 'https://debank.com/', external: true },
        ],
      },
      {
        label: 'SOL',
        submenu: [
          { label: 'Step Finance', url: 'https://app.step.finance/pt', external: true },
        ],
      },
    ],
  },
  {
    label: 'ANÁLISE',
    path: '/analise',
    submenu: [
      { label: 'Defistation', url: 'https://www.defistation.xyz/pools', external: true },
      { label: 'DefiLlama', url: 'https://defillama.com/', external: true },
      { label: 'Poolfish', url: 'https://poolfish.xyz/', external: true },
    ],
  },
  {
    label: 'DEX',
    path: '/dex',
    submenu: [
      {
        label: 'EVM',
        submenu: [
          { label: 'PancakeSwap', url: 'https://pancakeswap.finance/liquidity/positions', external: true },
          { label: 'Uniswap', url: 'https://app.uniswap.org/swap', external: true },
        ],
      },
      {
        label: 'SOL',
        submenu: [
          { label: 'Jupiter', url: 'https://jup.ag/pt', external: true },
          { label: 'Meteora', url: 'https://app.meteora.ag/', external: true },
          { label: 'Orca', url: 'https://www.orca.so/', external: true },
          { label: 'Raydium', url: 'https://raydium.io/portfolio/', external: true },
        ],
      },
    ],
  },
  {
    label: 'STAKE',
    path: '/stake',
    submenu: [
      {
        label: 'EVM',
        submenu: [
          { label: 'Aave', url: 'https://app.aave.com/', external: true },
          { label: 'Hyperliquid', url: 'https://app.hyperliquid.xyz/portfolio', external: true },
          { label: 'Notional', url: 'https://www.notionaI.finance/portfolio/mainnet/welcome/earn', external: true },
          { label: 'Pendle', url: 'https://app.pendle.finance/trade/markets', external: true },
          { label: 'Spectra', url: 'https://app.spectra.finance/portfolio', external: true },
        ],
      },
      {
        label: 'SOL',
        submenu: [
          { label: 'Kamino', url: 'https://app.kamino.finance/?filter=all', external: true },
        ],
      },
      {
        label: 'SUI',
        submenu: [
          { label: 'Suilend', url: 'https://suilend.fi/', external: true },
        ],
      },
    ],
  },
  {
    label: 'POOLS',
    path: '/pools',
    submenu: [
      {
        label: 'EVM',
        submenu: [
          { label: 'PancakeSwap', url: 'https://pancakeswap.finance/pools', external: true },
          { label: 'Uniswap', url: 'https://app.uniswap.org/positions', external: true },
        ],
      },
      {
        label: 'SOL',
        submenu: [
          { label: 'Meteora', url: 'https://app.meteora.ag/', external: true },
          { label: 'Orca', url: 'https://www.orca.so/pools', external: true },
          { label: 'Raydium', url: 'https://raydium.io/liquidity-pools/', external: true },
        ],
      },
    ],
  },
  {
    label: 'CEX',
    path: '/cex',
    submenu: [
      { label: 'Binance', url: 'https://accounts.binance.com/pt/login', external: true },
      { label: 'Coinbase', url: 'https://login.coinbase.com/signin', external: true },
      { label: 'Mercado Bitcoin', url: 'https://platform.mercadobitcoin.com.pt/login', external: true },
    ],
  },
  {
    label: 'DAO',
    path: '/dao',
    submenu: [
      {
        label: 'EVM',
        submenu: [
          { label: 'Uniswap Governance', url: 'https://gov.uniswap.org/login', external: true },
        ],
      },
      {
        label: 'SOL',
        submenu: [
          { label: 'Jupiter DAO', url: 'https://vote.jup.ag/', external: true },
        ],
      },
      { label: 'DeepDAO', url: 'https://deepdao.io/organizations', external: true },
    ],
  },
];

export default function NavBar() {
  const [open, setOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(null), 150);
  };

  return (
    <nav className="flex items-center justify-center gap-8 pt-6 pb-2 relative z-50">
      {MENU.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={item.path || ''} legacyBehavior>
            <a className="text-white font-bold tracking-wide text-base px-2 cursor-pointer hover:text-[#00BFFF] select-none">
              {item.label}
            </a>
          </Link>
          {open === item.label && (
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#18162A] rounded-xl shadow-lg py-2 px-4 min-w-[200px] flex flex-col items-center border border-white/10 z-50"
            >
              {item.submenu && item.submenu.map((sub) => (
                sub.submenu ? (
                  <div key={sub.label} className="relative group w-full">
                    <span className="text-white font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition flex items-center justify-between">
                      {sub.label}
                      <span className="ml-2">▶</span>
                    </span>
                    <div className="absolute left-full top-0 mt-0 ml-2 bg-[#18162A] rounded-xl shadow-lg py-2 px-4 min-w-[200px] flex flex-col items-center border border-white/10 z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      {sub.submenu.map((link) => (
                        link.external ? (
                          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition underline">
                            {link.label === 'Step Finance' && (
                              <img src="/images/barra_de_navegacao/step-finance.jpg" alt="Step Finance" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Hyperliquid' && (
                              <img src="/images/barra_de_navegacao/hyperliquid.png" alt="Hyperliquid" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'DeBank' && (
                              <img src="/images/barra_de_navegacao/debank.jpg" alt="DeBank" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'DefiLlama' && (
                              <img src="/images/barra_de_navegacao/defillama.jpg" alt="DefiLlama" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'PancakeSwap' && (
                              <img src="/images/barra_de_navegacao/pancakeswap.jpg" alt="PancakeSwap" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Uniswap' && (
                              <img src="/images/barra_de_navegacao/uniswap.jpg" alt="Uniswap" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Jupiter' && (
                              <img src="/images/barra_de_navegacao/jupiter.jpg" alt="Jupiter" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Poolfish' && (
                              <img src="/images/barra_de_navegacao/poolfish.jpg" alt="Poolfish" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Meteora' && (
                              <img src="/images/barra_de_navegacao/meteora.jpg" alt="Meteora" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Raydium' && (
                              <img src="/images/barra_de_navegacao/raydium.jpg" alt="Raydium" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Orca' && (
                              <img src="/images/barra_de_navegacao/orca.png" alt="Orca" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Aave' && (
                              <img src="/images/barra_de_navegacao/aave.png" alt="Aave" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Notional' && (
                              <img src="/images/barra_de_navegacao/notional.jpg" alt="Notional" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Pendle' && (
                              <img src="/images/barra_de_navegacao/pendle.jpg" alt="Pendle" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Spectra' && (
                              <img src="/images/barra_de_navegacao/spectra.jpg" alt="Spectra" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Kamino' && (
                              <img src="/images/barra_de_navegacao/kamino.jpg" alt="Kamino" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Suilend' && (
                              <img src="/images/barra_de_navegacao/suilend.png" alt="Suilend" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Binance' && (
                              <img src="/images/barra_de_navegacao/binance.jpg" alt="Binance" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Mercado Bitcoin' && (
                              <img src="/images/barra_de_navegacao/mercado-bitcoin.jpg" alt="Mercado Bitcoin" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Coinbase' && (
                              <img src="/images/barra_de_navegacao/coinbase.png" alt="Coinbase" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Uniswap Governance' && (
                              <img src="/images/barra_de_navegacao/uniswap-governance.png" alt="Uniswap Governance" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Jupiter DAO' && (
                              <img src="/images/barra_de_navegacao/jupiter.jpg" alt="Jupiter DAO" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label === 'Defistation' && (
                              <img src="/images/barra_de_navegacao/defistation.jpg" alt="Defistation" className="inline-block w-5 h-5 mr-2 align-middle" />
                            )}
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.url || link.path || ''} key={link.label} legacyBehavior>
                            <a className="text-white font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition">
                              {link.label}
                            </a>
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : sub.external ? (
                  <a key={sub.label} href={sub.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition underline">
                    {sub.label === 'DefiLlama' && (
                      <img src="/images/barra_de_navegacao/defillama.jpg" alt="DefiLlama" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Poolfish' && (
                      <img src="/images/barra_de_navegacao/poolfish.jpg" alt="Poolfish" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Meteora' && (
                      <img src="/images/barra_de_navegacao/meteora.jpg" alt="Meteora" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Raydium' && (
                      <img src="/images/barra_de_navegacao/raydium.jpg" alt="Raydium" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Orca' && (
                      <img src="/images/barra_de_navegacao/orca.png" alt="Orca" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Binance' && (
                      <img src="/images/barra_de_navegacao/binance.jpg" alt="Binance" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Mercado Bitcoin' && (
                      <img src="/images/barra_de_navegacao/mercado-bitcoin.jpg" alt="Mercado Bitcoin" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Coinbase' && (
                      <img src="/images/barra_de_navegacao/coinbase.png" alt="Coinbase" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'Defistation' && (
                      <img src="/images/barra_de_navegacao/defistation.jpg" alt="Defistation" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label === 'DeepDAO' && (
                      <img src="/images/barra_de_navegacao/deepdao.png" alt="DeepDAO" className="inline-block w-5 h-5 mr-2 align-middle" />
                    )}
                    {sub.label}
                  </a>
                ) : (
                  <Link href={sub.url || sub.path || ''} key={sub.label} legacyBehavior>
                    <a className="text-white font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition">
                      {sub.label}
                    </a>
                  </Link>
                )
              ))}
              <div className="border-t border-white/10 my-2 w-full" />
              <Link href={item.path || ''} legacyBehavior>
                <a className="text-[#00BFFF] text-sm py-1 px-2 rounded hover:bg-[#232136] w-full text-left cursor-pointer font-bold transition">
                  Ir para página
                </a>
              </Link>
            </div>
          )}
        </div>
      ))}
      <button className="ml-8 px-4 py-1 rounded-full bg-[#232136] text-white text-sm font-semibold">CONECTAR</button>
    </nav>
  );
} 