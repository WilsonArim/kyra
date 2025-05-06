import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PawPopover from './PawPopover';
import NavBar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#0A0720] overflow-hidden">
      {/* Fundo fixo com pilha de moedas e ossos */}
      <div
        className="fixed top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundImage: 'url(/images/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Kyra no topo esquerdo */}
      <div className="fixed top-4 left-4 z-10">
        <Image src="/images/kyra.png" alt="Kyra" width={80} height={80} />
      </div>
      {/* buggy no canto inferior direito */}
      <div className="fixed bottom-4 right-4 z-10">
        <Image src="/images/buggy.png" alt="Buggy" width={60} height={60} />
      </div>
      {/* Ícone de pata no lado esquerdo */}
      <div className="fixed top-28 left-8 z-20" onMouseEnter={() => setShowPopover(true)} onMouseLeave={() => setShowPopover(false)}>
        <button className="bg-transparent w-14 h-14 flex items-center justify-center">
          <Image src="/images/paw.png" alt="Pata" width={40} height={40} />
        </button>
        {showPopover && <PawPopover />}
      </div>
      {/* Conteúdo da página */}
      <div className="relative z-10 pt-24">
        <div className="fixed top-0 left-0 w-full z-30">
          <NavBar />
        </div>
        <div className="max-w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout; 