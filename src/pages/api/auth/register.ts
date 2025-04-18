import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, password, companyName, nip, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Użytkownik o podanym adresie email już istnieje' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        companyName,
        nip,
        firstName,
        lastName,
      },
    });

    res.status(201).json({ message: 'Konto zostało utworzone pomyślnie' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Wystąpił błąd podczas rejestracji' });
  }
} 