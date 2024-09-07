'use client'
import SessionLayout from '../../SessionLayout'
import './global.css'
import Link from 'next/link'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
      <SessionLayout>
          <main>{children}</main>
        </SessionLayout>
      </body>
    </html>
  )
}
