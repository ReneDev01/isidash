import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddNewProduct() {
  const navigate = useNavigate();
      const initialState = {
            name: '',
            price: '',
            category_id: '',
            image: null,
            description: '',
          };
        
      const [formData, setFormData] = useState(initialState);
        

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const category_id = e.target.value;
    setFormData({ ...formData, category_id });
  };

  const handleFileChange = (e) => {
    const image = e.target.files[0];
    setFormData({ ...formData, image });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // For file upload, you can use the FormData API
    const formDataWithFile = new FormData();
    formDataWithFile.append("name", formData.name);
    formDataWithFile.append("price", formData.price);
    formDataWithFile.append("category_id", formData.category_id);
    formDataWithFile.append("description", formData.description);
    formDataWithFile.append("image", formData.image); // The image file will be appended as a file

    // Now you can use formDataWithFile to send the form data, including the image, to the server
    console.log(formDataWithFile);
    try {
      const response = await axios.post(
        "http://localhost:8090/api/create-product",
        formDataWithFile
      );
      if (response.status === 200) {
        toast.success("Product added successfully.");
        // Clear the form after successful submission
        setFormData(initialState);
        navigate("/productLits");
        // Refresh the list of categories after adding a new one
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
    }
    // Perform your form submission logic here
    // For example, you can make an API call to send the form data with the image to the server
  };

  

  const [categories, setCategoriesData] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/categories");
      if (response.status === 200) {
        setCategoriesData(response.data.data);
      }
    } catch (error) {
      toast.error("Failed to fetch categories.");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <ToastContainer position="top-right" />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add new product</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add Products</h3>
                  </div>
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="name">Nom le nom</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Entrer le nom du produit"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="price">Nom de la categorie</label>
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          id="price"
                          placeholder="Entrer le prix du produit"
                          value={formData.price}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Category</label>
                        <select
                          className="form-control select2"
                          onChange={handleCategoryChange}
                          name="category_id"
                          style={{ width: "100%" }}
                          value={formData.category_id}
                        >
                          <option value="">Select a category</option>
                          {categories
                            ? categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.name}
                                </option>
                              ))
                            : null}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputFile">Product image</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              name="image"
                              className="custom-file-input"
                              id="exampleInputFile"
                              onChange={handleFileChange}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="exampleInputFile"
                            >
                              Choose file
                            </label>
                          </div>
                          <div className="input-group-append">
                            <span className="input-group-text">Upload</span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Une petite ligne de text (Slug)</label>
                        <textarea
                          className="form-control"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Enregistrer
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AddNewProduct;
