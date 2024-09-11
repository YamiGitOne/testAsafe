'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'

export default function SessionComponent() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center space-x-2">
        <FaUser className="text-xl text-blue-500" />
        <span>Iniciar sesión como {session.user.email}</span>
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-1 text-red-500 hover:text-red-700"
        >
          <FaSignOutAlt />
          <span>Sign out</span>
        </button>
      </div>
    );
  }

  return (
    <div className="lg:flex items-start space-x-2 lg:text-sm text-xs">
      <FaUser className="text-sm text-white" />
      <span className='text-md text-white'>No haz iniciado sesión</span>
      <button
        onClick={() => signIn()}
        className="flex items-center space-x-1 text-blue-200 hover:text-blue-500"
      >
        <FaSignInAlt />
        <span>Iniciar sesión</span>
      </button>
    </div>
  )
}