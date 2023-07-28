import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

function TransactionList(){
      return (
         <div>
            <Header/>
            <Sidebar/>
                  <div>
                        Transactions List
                  </div>
            <Footer/>
         </div>   
      );
}

export default TransactionList;