import React, { useState } from 'react';
import Image from 'next/image';
import AuthModal from './Auth/AuthModal';

const Header: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#0B0B2B] border-b border-gray-800 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <Image
            src="/images/kyra.png"
            alt="kyra Crypto Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="ml-2 text-xl font-bold text-white">Kyra Crypto</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href="/sobre" className="text-white/70 hover:text-white transition-colors">
            Sobre
          </a>
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            Login
          </button>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
};

export default Header; 