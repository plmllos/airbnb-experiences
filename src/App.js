import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data"
import "./style.css"



function App() {
  const cards = data.map(item => {
    return <Card 
        key={item.id}
        item={item}
      />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App