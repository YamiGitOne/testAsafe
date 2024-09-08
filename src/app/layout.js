import "./globals.css"
import SessionLayout from '../../SessionLayout'

export const metadata = {
  title: "Asafe project",
  description:
    "Esta es una aplicación que de forma gráfica muestra datos de los empleados",
}

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
