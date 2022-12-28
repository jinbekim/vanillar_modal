import { useState } from "react"
import "./App.css"
import Content from "./Content"
import Alert from "./Alert"

function App() {
  const [hidden, setHidden] = useState(true)
  return (
    <div className="app">
      <button onClick={() => setHidden(false)}>open Modal</button>
      <Alert
        content={<Content></Content>}
        hidden={hidden}
        setHidden={setHidden}
      ></Alert>
    </div>
  )
}

export default App
