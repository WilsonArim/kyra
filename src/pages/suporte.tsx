import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const initialState = {
  email: '',
  tipo: 'Geral',
  wallet: '',
  descricao: '',
  anexos: [] as File[],
};

export default function Suporte() {
  const [form, setForm] = useState(initialState);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setForm((prev) => ({ ...prev, anexos: Array.from(files) }));
    } else {
      setForm((prev) => ({ ...prev, anexos: [] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensagem('');
    const data = new FormData();
    data.append('email', form.email);
    data.append('tipo', form.tipo);
    data.append('wallet', form.wallet);
    data.append('descricao', form.descricao);
    form.anexos.forEach((file) => data.append('anexos', file));
    try {
      const res = await fetch('/api/suporte', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setMensagem('Solicitação enviada com sucesso!');
        setForm(initialState);
      } else {
        setMensagem('Erro ao enviar. Tente novamente.');
      }
    } catch {
      setMensagem('Erro ao enviar. Tente novamente.');
    }
    setEnviando(false);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-6">Suporte</h1>
        <div className="flex items-center justify-center w-full max-w-6xl min-h-[600px]">
          <div className="flex-shrink-0 flex items-center justify-center h-full mr-8">
            <Image src="/images/icons/suporte.png" alt="Suporte" width={600} height={600} />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-[#dde6fae6] rounded-lg shadow-lg p-8 w-full max-w-xl flex flex-col gap-4">
              <div className="bg-blue-100 border-l-4 border-blue-600 text-blue-700 p-4 mb-2 rounded">
                Procure incluir o máximo de detalhes para agilizar o atendimento.
              </div>
              <label className="font-semibold text-blue-700">Seu e-mail
                <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full mt-1 p-2 rounded border text-blue-700 placeholder-blue-400" />
              </label>
              <label className="font-semibold text-blue-700">Como podemos ajudar?
                <select name="tipo" value={form.tipo} onChange={handleChange} className="w-full mt-1 p-2 rounded border text-blue-700">
                  <option>Geral</option>
                  <option>Dúvida</option>
                  <option>Problema Técnico</option>
                  <option>Parceria</option>
                  <option>Outro</option>
                </select>
              </label>
              <label className="font-semibold text-blue-700">Endereço da sua wallet (opcional)
                <input type="text" name="wallet" value={form.wallet} onChange={handleChange} className="w-full mt-1 p-2 rounded border text-blue-700 placeholder-blue-400" />
              </label>
              <label className="font-semibold text-blue-700">Descrição
                <textarea name="descricao" required value={form.descricao} onChange={handleChange} className="w-full mt-1 p-2 rounded border min-h-[100px] text-blue-700 placeholder-blue-400" />
              </label>
              <label className="font-semibold text-blue-700">Anexos (opcional)
                <input type="file" name="anexos" multiple onChange={handleFileChange} className="w-full mt-1 text-blue-700 file:text-blue-700" />
              </label>
              <button type="submit" disabled={enviando} className="bg-blue-600 text-white px-4 py-2 rounded font-bold mt-2 hover:bg-blue-700 disabled:opacity-60">
                {enviando ? 'Enviando...' : 'Enviar'}
              </button>
              {mensagem && (
                <div className="bg-blue-100 border-l-4 border-blue-600 text-blue-700 p-4 mt-2 rounded">
                  {mensagem}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
} 