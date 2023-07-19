import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

function ProductList(){
      return (
         <div>
            <Header/>
            <Sidebar/>
                  <div>
                        Products List
                  </div>
            <Footer/>
         </div>   
      );
}

export default ProductList;