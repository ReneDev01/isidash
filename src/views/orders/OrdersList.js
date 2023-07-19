import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

function OrdersList(){
      return (
         <div>
            <Header/>
            <Sidebar/>
                  <div>
                        Orders List
                  </div>
            <Footer/>
         </div>   
      );
}

export default OrdersList;