import './App.css';
import Home from "./views/Home";
import ProductList from './views/products/ProductList';
import AddNewProduct from './views/products/AddNew';
import AddCategory from './views/categories/AddCategory';
import OrdersList from './views/orders/OrdersList';
import TransactionList from './views/transactions/TransactionList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from './views/users/userList';
import SellerList from './views/sellers/SellerList';
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
          <Route path='/users' element={<UserList/>}></Route>
          <Route path='/sellers' element={<SellerList/>}></Route>
          <Route path='/transactions' element={<TransactionList/>}></Route>
          <Route path='/delete/category/:id' element={<AddCategory/>}></Route>
          <Route path='/category/edit/:id' element={<AddCategory/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
