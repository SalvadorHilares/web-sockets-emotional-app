import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import CardDetail from "./Components/CardDetail";

//import {io} from 'socket.io-client'
//const socket = io('http://localhost:3001')

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<CardDetail/>} />
    </Routes>
  )
}

export default App;