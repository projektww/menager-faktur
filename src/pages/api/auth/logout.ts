import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    res.setHeader('Set-Cookie', 'token=; HttpOnly; Path=/; Max-Age=0');
    res.status(200).json({ message: 'Wylogowano pomyślnie' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Wystąpił błąd podczas wylogowywania' });
  }
} 