'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const router = useRouter()

  const handleSignIn = async (provider) => {
    try {
      console.log('Attempting to sign in with provider:', provider);
      // Iniciar sesión con el proveedor
      const result = await signIn(provider, { redirect: false });

      console.log('Sign-in result:', result);

      if (result?.ok) {
        // Redirigir a la página principal o a otra página después del inicio de sesión exitoso
        router.push('/');
      } else {
        // Manejar el error si el inicio de sesión falla
        console.error('Error during sign in:', result?.error);
      }
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  }

  return (
    <div className="container">
      <h1>Sign In</h1>
      <button onClick={() => handleSignIn('google')}>Sign in with Google</button>
      {/* Puedes agregar más botones para otros proveedores aquí */}
    </div>
  )
}
