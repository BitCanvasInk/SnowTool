import { Route, Routes } from "react-router"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <p className="text-5xl">SnowBall Finance</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <Login /> */}
    </>
  )
}

export default App
