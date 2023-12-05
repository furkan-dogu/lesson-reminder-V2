import { useState } from "react"
import LessonCard from "../components/LessonCard/LessonCard"

const Lesson = () => {
  
  const [sayi, setSayi] = useState(6)
  const [cards, setCards] = useState(true)

  const handleClear = () => {
    setCards(false)
    setSayi(0)
  }
  
  return (
    <main>
        
        <div className="container">
            <h2>{sayi} lessons today</h2>
            <div className="card-container">
            {cards && <LessonCard />}
            </div>
            
            <button onClick={handleClear}>Clear List</button>
        </div>
    </main>
  )
}

export default Lesson