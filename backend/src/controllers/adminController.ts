// adminController.ts

import { Request, Response } from 'express';
import { users, tokens, Token } from '../mockDB';

const kickoutUser = (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    // Find the user by username
    const user = users.find(user => user.username === username);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Invalidate tokens for the user
    const userId = user.id;
    const updatedTokens = tokens.filter((token: Token) => token.userId !== userId);

    // Update the mock tokens
    tokens.length = 0;
    tokens.push(...updatedTokens);

    res.json({ message: 'User kicked out successfully.' });
  } catch (error) {
    console.error('Kickout error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default {
  kickoutUser
};
