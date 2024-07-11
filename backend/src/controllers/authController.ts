// authController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users, tokens } from '../mockDB';

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Simulate database query to find user by username
    const user = users.find(user => user.username === username);

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      // Increment failed attempts and potentially lock account
      user.failedAttempts++;

      if (user.failedAttempts >= 3) {
        user.locked = true;
        return res.status(401).json({ error: 'Account locked. Please contact support.' });
      }

      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Save token to mock database
    tokens.push({ id: tokens.length + 1, userId: user.id, token, expiration: new Date(Date.now() + 3600000) });

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const generateOneTimeLink = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    // Simulate link generation logic
    const oneTimeLink = `https://example.com/login?token=generated_token`;

    res.json({ link: oneTimeLink });
  } catch (error) {
    console.error('One-time link error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTime = (req: Request, res: Response) => {
  // This should only be accessible with a valid token
  const token = req.headers.authorization?.split(' ')[1];

  try {
    if (!token) {
      throw new Error('No token provided');
    }

    const decodedToken = jwt.verify(token, 'your_jwt_secret') as { userId: number };
    const currentTime = new Date().toLocaleString();

    res.json({ time: currentTime });
  } catch (error) {
    console.error('Get time error:', error);
    res.status(401).json({ error: 'Unauthorized. Invalid or expired token.' });
  }
};

export default {
  login,
  generateOneTimeLink,
  getTime
};
