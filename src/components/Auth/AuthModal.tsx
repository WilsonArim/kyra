import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de autenticação aqui
    console.log(isLogin ? 'Login' : 'Registro', { email, password, name });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-[#1a1a3a] p-6 shadow-xl">
          <Dialog.Title className="text-xl font-bold text-white mb-4">
            {isLogin ? 'Login' : 'Registro'}
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-[#2a2a4a] border-gray-600 text-white"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md bg-[#2a2a4a] border-gray-600 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md bg-[#2a2a4a] border-gray-600 text-white"
                required
              />
            </div>

            {!isLogin && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-white">
                  Li e aceito os{' '}
                  <a href="/termos-de-uso" className="text-blue-400 hover:text-blue-300" target="_blank">
                    Termos de Uso
                  </a>{' '}
                  e a{' '}
                  <a href="/politica-de-privacidade" className="text-blue-400 hover:text-blue-300" target="_blank">
                    Política de Privacidade
                  </a>
                </label>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isLogin ? 'Entrar' : 'Registrar'}
            </button>

            <div className="text-center text-sm text-white">
              {isLogin ? (
                <>
                  Não tem uma conta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Registre-se
                  </button>
                </>
              ) : (
                <>
                  Já tem uma conta?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Faça login
                  </button>
                </>
              )}
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AuthModal; 