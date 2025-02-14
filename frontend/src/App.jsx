import { useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <div className="left">
        <div className="code"></div>
        <div className="review">Evaluate</div>
      </div>
      <div className="right"></div>
    </main>
    </>
  )
}

export default App
