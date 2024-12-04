import Header from "@/components/Header"
import NewOrders from "@/components/NewOrders"
import TopCards from "@/components/TopCards"
import LineChart from "@/components/LineChart"

export default function Home() {
  return (

    <>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards/>
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <LineChart/>
          <NewOrders/>
        </div>
      </main>
    </>
  )
}