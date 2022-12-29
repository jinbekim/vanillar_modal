import { useAlert } from "./Alert"
import "./App.css"
import Content from "./Content"

function App() {
  const alert = useAlert()
  return (
    <div className="app">
      <button onClick={() => alert.show(<Content />)}>open Modal</button>
    </div>
  )
}

export default App
