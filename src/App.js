import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import AddOrder from "./pages/AddOrder";
import AllOrders from "./pages/AllOrders";
import UpdateOrder from "./pages/UpdateOrder";
import Layout from "./components/shared/Layout";
function App() {
  return (
   <Layout>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AllOrders />}></Route>
    <Route path="/add-order" element={<AddOrder />}></Route>
    <Route path="/update-order/:id" element={<UpdateOrder />}></Route>
    </Routes>
  </BrowserRouter>
  </Layout> 
    
  );
}
export default App;