import { Canvas } from "./canvas"
import { Customizer } from "./pages/Customizer"
import { Home } from "./pages/Home"


function App() {
  return (
    <>
      <div className="bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Hello, ThreeJS!</h1>

        <Home />
        <Canvas />
        <Customizer />
      </div>
    </>
  )
}

export default App
