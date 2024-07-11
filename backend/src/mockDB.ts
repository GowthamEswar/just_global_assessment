// mockDB.ts

export interface User {
    id: number;
    username: string;
    password: string;
    failedAttempts: number;
    locked: boolean;
  }
  
  export interface Token {
    id: number;
    userId: number;
    token: string;
    expiration: Date;
  }
  
  export let users: User[] = [
    { id: 1, username: 'test@example.com', password: '$2a$12$bVRQNukZYACj0D8mMcG8QevDtm3593EyvUqrYdFInwm0yskJUsOMi', failedAttempts: 0, locked: false }
  ];
  
  export let tokens: Token[] = [
    { id: 1, userId: 1, token: 'example_token', expiration: new Date('2024-07-12T00:00:00') }
  ];
  