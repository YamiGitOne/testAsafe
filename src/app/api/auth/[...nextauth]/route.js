import NextAuth from 'next-auth'
import { authOptions } from './authOptions'

export const GET = async (req) => {
  try {
    console.log('GET request received');
    const response = await NextAuth(req, authOptions);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error handling GET request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

export const POST = async (req) => {
  try {
    console.log('POST request received');
    const response = await NextAuth(req, authOptions);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
