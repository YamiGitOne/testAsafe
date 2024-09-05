'use client'
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SecurePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push('/api/auth/signin');
    return null;
  }

  return (
    <div>
      <h1>Hola, {session.user.name}!</h1>
      <p>Esta es una página protegida.</p>
    </div>
  );
}
