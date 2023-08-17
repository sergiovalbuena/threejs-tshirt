import { Canvas } from "./canvas"
import Customizer from "./pages/Customizer"
import { Home } from "./pages/Home"


function App() {
  return (
    <>
      <div className="bg-gray-100">


        <Canvas />
        <Customizer />
        <Home />
      </div>
    </>
  )
}

export default App
