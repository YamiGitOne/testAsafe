import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth].js/route'
import Title from '../../components/Title'
import SignInButton from '../../components/SignInButton'

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Title text="Acceso denegado"/>
        <p className="text-center md:tracking-wider mb-8 text-lg md:text-lg lg:text-2xl">
        Debes iniciar sesión para ver esta página.
        </p>
        <SignInButton />
      </div>
    )
  }

  return (
    <div>
      <h1>Página protegida</h1>
      <p>Bienvenido, {session.user.name}!</p>
    </div>
  )
}
