
import "./globals.css"
import BarChart from "../components/BarChart"
import { fetchData } from '../hooks/useFetchData'
import LineChart from "../components/LineChart"
import Title from "../components/Title"
import DataTable from "../components/DataTable"
import Header from "../components/Header"
import Hero from "../components/Hero"

export default async function Home() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://randomuser.me/api/'
    const randomUserApiUrl = process.env.RANDOM_USER_API_URL || 'https://randomuser.me/api/?results=10'
    
    const dataTable = await fetchData(apiUrl, 1000)
  
    const res = await fetch(randomUserApiUrl)
    if (!res.ok) throw new Error('Error fetching data from randomuser.me')
    
    const result = await res.json()
    const data = result.results.map(user => user.dob.age)

  return (
    <div className="dark:bg-gray-900">
    <Header />
    <Hero />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pl-4 pr-4 pb-20 gap-16">
    <main className="flex flex-col gap-8 row-start-2 items-center">
      
      <div className="lg:w-full w-fit lg:p-12 p-4 border shadow-md rounded-lg dark:bg-gray-200">
        <Title text="Edad de los participantes"/>
        <BarChart data={data} />
      </div>
      <div className="lg:w-full w-fit lg:p-12 p-4 border shadow-md rounded-lg dark:bg-gray-200">
        <Title text="Edad en Gráfico de Linea" />
        <LineChart data={data} />
      </div>

      <div className="w-full">
        <h1 className="text-center text-2xl font-bold mb-4 dark:text-white">Detalle de usuarios</h1>
        <DataTable dataTable={dataTable}/>
      </div>
    </main>
    </div>
    <footer className="bg-dark mt-5 py-5">
      <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Todos los derechos Reservados</p>
      </div>
  </footer>
  </div>
  
  )
} catch (error) {
  console.error('Error loading data:', error)
  return <div>Error loading data</div>
}
}
