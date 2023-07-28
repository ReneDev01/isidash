import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ProductList() {
  const navigate = useNavigate();
  const [data, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/products");
      if (response.status === 200) {
        setProductList(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      toast.error("Failed to fetch products.");
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Vous Voulez vraiment supprimer ce produit?")) {
      const response = await axios.delete(
        `http://localhost:8090/api/product/${id}`
      );
      if (response.status === 200) {
        toast.success("Product delete successfull");
        getProducts();
        navigate("/productLits");
      }
    }
  };
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
                <h1>Our Product list</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div container-fluid>
            <div className="row">
              {data &&
                Array.isArray(data) &&
                data.map((item, index) => {
                  return (
                    <div className="col-md-4">
                      <div className="card">
                        <img
                          className="card-img-top"
                          style={{ height: "300px" }}
                          src={'http://localhost:8090/api/postImages/'+item.image}
                        />
                        <div className="card-body">
                          <h5 className="card-title"> {item.name} </h5>
                          <p className="card-text">
                            {item.description}
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="row justify-content-center">
                            <div className="col-auto">
                              <Link
                              /* to={`/category/edit/${item._id}`}
                              onClick={() => handleCategoryClick(item)} */
                              >
                                <button className="btn btn-warning mr-2">
                                  Mettre à jour
                                </button>
                              </Link>
                            </div>
                            <div className="col-auto">
                              <Link
                              to={`/delete/product/${item._id}`}
                              onClick={() => deleteProduct(item._id)}
                              >
                                <button className="btn btn-danger">
                                  Supprimer
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
