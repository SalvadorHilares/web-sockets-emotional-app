import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CardDetail from "./Components/CardDetail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<CardDetail/>} />
    </Routes>
  )
}

export default App;