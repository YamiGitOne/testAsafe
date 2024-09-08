import NextAuth from 'next-auth'
import { authOptions } from './authOptions'

export const GET = async (req) => {
  const response = await NextAuth(req, authOptions)
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export const POST = async (req) => {
  const response = await NextAuth(req, authOptions);
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
