import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import Layout from "./pages/Layout";

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Layout />}>
    <Route path="/add-user" element={<AddUser />} />
    <Route path="/" element={<Home />} />
    </Route>
   </Routes>
   </BrowserRouter>
  )
}