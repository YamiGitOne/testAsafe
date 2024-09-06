import { getProviders } from 'next-auth/react'
import SignInButton from '@/app/components/SignInButton'

export default async function SignIn() {
  const providers = await getProviders()

  return (
    <div>
      <h1>Sign in</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <SignInButton />
        </div>
      ))}
    </div>
  )
}
