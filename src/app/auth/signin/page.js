import { getProviders, signIn } from 'next-auth/react'
import authOptions from '@/app/api/auth/[...nextauth]/authOptions'

export default async function SignInPage() {
  let providers = {}
  
  try {
    providers = await getProviders();
  } catch (error) {
    console.error('Error fetching providers:', error);
  }

  return (
    <div className="container">
      <h1>Sign In</h1>
      {providers ? (
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
