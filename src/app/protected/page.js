'use client'

import { useSession, signIn } from 'next-auth/react'

export default function ProtectedPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (!session) {
    signIn()
    return null
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Hola, {session.user.email}!</p>
    </div>
  )
}
