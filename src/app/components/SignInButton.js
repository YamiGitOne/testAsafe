"use client"
import { getProviders, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function SignInButton() {
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }

    fetchProviders()
  }, [])

  if (!providers) return <div>Loading...</div>

  return (
    <div>
      <h1>Sign in</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
    </div>
  )
}
