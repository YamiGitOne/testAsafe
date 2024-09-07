'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
export default function Navigation() {
  const { data: session } = useSession()

  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        {session ? (
          <>
            <span>Welcome, {session.user.name}</span>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </nav>
    </header>
  )
}
