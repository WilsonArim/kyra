import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pawMenu = [
  { icon: '/images/icons/casa.png', label: 'Casa', path: '/' },
  { icon: '/images/icons/iniciante.png', label: 'Iniciante', path: '/iniciante' },
  { icon: '/images/icons/glossario.png', label: 'Glossário', path: '/glossario' },
  { icon: '/images/icons/cursos.png', label: 'Cursos', path: '/cursos' },
  { icon: '/images/icons/videos.png', label: 'Dicas rápidas e Notícias Cripto', path: '/videos' },
];

const pawFooter = [
  { icon: '/images/icons/referencias.png', label: 'Referências', path: '/referencias' },
  { icon: '/images/icons/missao.png', label: 'Missão', path: '/missao' },
  { icon: '/images/icons/definicoes.png', label: 'Definições', path: '/definicoes' },
  { icon: '/images/icons/suporte.png', label: 'FAQ', path: '/faq' },
  { icon: '/images/icons/suporte.png', label: 'Suporte', path: '/suporte' },
];

const socialIcons = [
  { icon: '/images/icons/instagram.png', label: 'Instagram', url: 'https://www.instagram.com/kyrakrypto/' },
  { icon: '/images/icons/x.png', label: 'X' },
  { icon: '/images/icons/youtube.png', label: 'Youtube' },
];

export default function PawPopover() {
  return (
    <div className="fixed top-20 left-4 z-[9999] w-[340px] h-[90vh] bg-[#18162A]/90 rounded-3xl backdrop-blur-md flex flex-col justify-between shadow-2xl border border-white/10">
      <div className="pt-8 px-8">
        <ul className="space-y-4">
          {pawMenu.map((item) => (
            <li key={item.label}>
              <Link href={item.path} legacyBehavior>
                <a className="flex items-center gap-3 text-white text-lg font-semibold cursor-pointer hover:bg-white/10 rounded-xl px-2 py-2 transition">
                  <Image src={item.icon} alt={item.label} width={26} height={26} className="shrink-0" />
                  <span>{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 pb-8">
        <ul className="space-y-3 mb-6">
          {pawFooter.map((item) => (
            <li key={item.label}>
              <Link href={item.path} legacyBehavior>
                <a className="flex items-center gap-3 text-white text-base cursor-pointer hover:bg-white/10 rounded-xl px-2 py-2 transition">
                  <Image src={item.icon} alt={item.label} width={22} height={22} className="shrink-0" />
                  <span>{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 mb-2">
          {socialIcons.map((item) => (
            item.url ? (
              <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <Image src={item.icon} alt={item.label} width={28} height={28} />
              </a>
            ) : (
              <span key={item.label} className="opacity-50 cursor-not-allowed">
                <Image src={item.icon} alt={item.label} width={28} height={28} />
              </span>
            )
          ))}
        </div>
        <div className="text-white/80 text-xs mt-2">© 2025 Kyra Crypto. Todos os direitos reservados</div>
      </div>
    </div>
  );
} 