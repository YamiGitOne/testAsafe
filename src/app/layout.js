import "./globals.css"
import SessionLayout from '../../SessionLayout'
import ThemeSwitcher from "@/components/ThemeSwitcher"

export const metadata = {
  title: "Asafe project",
  description:
    "Esta es una aplicación que de forma gráfica muestra datos de los empleados",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:w-full w-fit">
        <SessionLayout>
        <ThemeSwitcher />
          <main>{children}</main>
        </SessionLayout>
      </body>
    </html>
  )
}
