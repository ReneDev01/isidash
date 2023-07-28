import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

function AddSeller(){
      return (
         <div>
            <Header/>
            <Sidebar/>
                  <div>
                        New Seller
                  </div>
            <Footer/>
         </div>   
      );
}

export default AddSeller;