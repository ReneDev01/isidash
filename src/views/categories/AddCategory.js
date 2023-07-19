import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"

function AddCategory(){
      return (
         <div>
            <Header/>
            <Sidebar/>
                  <div>
                        New Category
                  </div>
            <Footer/>
         </div>   
      );
}

export default AddCategory;