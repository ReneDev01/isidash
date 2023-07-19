import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

function AddNewProduct(){
      return (
         <div>
            <Header/>
            <Sidebar/>
                  <div>
                        New Product
                  </div>
            <Footer/>
         </div>   
      );
}

export default AddNewProduct;