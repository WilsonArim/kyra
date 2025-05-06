import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'kyracrypto@kyracrypto.com', // Seu e-mail Zoho
    pass: process.env.ZOHO_MAIL_PASS,  // Defina a senha no .env
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = new formidable.IncomingForm({ multiples: true });

  form.parse(req, async (err: any, fields: any, files: any) => {
    if (err) return res.status(500).json({ error: 'Erro ao processar formulário.' });

    const { email, tipo, wallet, descricao } = fields;
    let anexos: any[] = [];
    if (files.anexos) {
      const fileArray = Array.isArray(files.anexos) ? files.anexos : [files.anexos];
      anexos = fileArray.map((file: any) => ({
        filename: file.originalFilename,
        path: file.filepath,
      }));
    }

    try {
      await transporter.sendMail({
        from: 'kyracrypto@kyracrypto.com',
        to: 'kyracrypto@kyracrypto.com',
        subject: `Novo pedido de suporte: ${tipo}`,
        text: `Email: ${email}\nTipo: ${tipo}\nWallet: ${wallet}\nDescrição: ${descricao}`,
        html: `<b>Email:</b> ${email}<br/><b>Tipo:</b> ${tipo}<br/><b>Wallet:</b> ${wallet}<br/><b>Descrição:</b><br/>${descricao}`,
        attachments: anexos,
      });
      res.status(200).json({ ok: true });
    } catch (e) {
      res.status(500).json({ error: 'Erro ao enviar e-mail.' });
    }
  });
} 