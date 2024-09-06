
import BarChart from "./components/BarChart"
import { fetchData } from '../hooks/useFtchData'
import LineChart from "./components/LineChart"
import Title from "./components/Title"
import "./global.css"
import DataTable from "./components/DataTable"
import Header from "./components/Header"
import Hero from "./components/Hero"

export default async function Home() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com/users'
    
    const dataTable = await fetchData(apiUrl)
    
    const res = await fetch('https://randomuser.me/api/?results=10')
    if (!res.ok) throw new Error('Error fetching data from randomuser.me')
    
    const result = await res.json()
    const data = result.results.map(user => user.dob.age)

  return (
    <>
    <Header />
    <Hero />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full max-w-4xl p-12 border shadow-md rounded-lg">
          <Title text="Gráfico de Barras"/>
          <BarChart data={data} />
        </div>
        <div className="w-full max-w-4xl p-12 border shadow-md rounded-lg">
        <Title text="Gráfico de Linea" />
          <LineChart data={data} />
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-bold mb-4">Data Table</h1>
          <DataTable dataTable={dataTable}/>
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">mi carrito Yamii - Todos los derechos Reservados</p>
        </div>
    </footer>
    </div>
    </>
  )
} catch (error) {
  console.error('Error loading data:', error)
  return <div>Error loading data</div>
}
}
