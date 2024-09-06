import { getProviders } from 'next-auth/react'
import SignInButton from '@/app/components/SignInButton'

export default async function SignIn() {
  const providers = await getProviders()
  const providersList = providers ? Object.values(providers) : []
  return (
    <div>
      <h1>Sign in</h1>
      {providersList.map((provider) => (
        <div key={provider.name}>
          <SignInButton provider={provider} />
        </div>
      ))}
    </div>
  )
}
