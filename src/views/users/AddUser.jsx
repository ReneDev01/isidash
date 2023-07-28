import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

function AddUser(){
      return (
         <div>
            <Header/>
            <Sidebar/>
                  <div>
                        New User
                  </div>
            <Footer/>
         </div>   
      );
}

export default AddUser;