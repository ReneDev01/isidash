import './App.css';


import Home from "./views/Home";
import ProductList from './views/products/ProductList';
import AddNewProduct from './views/products/AddNew';
import AddCategory from './views/categories/AddCategory';
import OrdersList from './views/orders/OrdersList';
import AddUser from './views/users/AddUser';
import AddSeller from './views/sellers/AddSeller';
import TransactionList from './views/transactions/TransactionList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/productLits' element={<ProductList/>}></Route>
          <Route path='/newProduct' element={<AddNewProduct/>}></Route>
          <Route path='/categories' element={<AddCategory/>}></Route>
          <Route path='/orders' element={<OrdersList/>}></Route>
          <Route path='/users' element={<AddUser/>}></Route>
          <Route path='/sellers' element={<AddSeller/>}></Route>
          <Route path='/transactions' element={<TransactionList/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
