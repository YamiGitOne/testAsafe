'use client'

import { useEffect, useState } from 'react'
import { getProviders, signIn } from 'next-auth/react'

export default function SignInPage() {
  const [providers, setProviders] = useState({})

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await fetch('/api/auth/providers')
      const data = await response.json()
      setProviders(data)
    };

    fetchProviders()
  }, [])

  const handleSignIn = (providerId) => {
    signIn(providerId)
  }

  return (
    <div className="container">
      <h1>Sign In</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => handleSignIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}
