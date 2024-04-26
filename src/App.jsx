import { BrowserRouter,Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import { Land } from "./pages/main_path/Land"
import "./styles/main.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Land/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
