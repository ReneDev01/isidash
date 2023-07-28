import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

function AddCategory() {
  const initialState = {
    name: "",
  };
  const navigate = useNavigate();

  const [data, setCategoriesData] = useState([]);
  const [state, setState] = useState(initialState);

  const { id } = useParams();

  const handleCategoryClick = (category) => {
    setState(category);
  };

  useEffect(() => {
    if (id) {
      getSingleCategory();
    }
  }, [id]);

  const getSingleCategory = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:8090/api/category/${id}`
      );
      if (response.status === 200) {
        setState({ ...setState(response.data.data[0]) });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async (category) => {
    try {
      const response = await axios.post(
        "http://localhost:8090/api/create-category",
        category
      );
      if (response.status === 200) {
        toast.success("Category added successfully.");
        // Clear the form after successful submission
        setState(initialState);
        // Refresh the list of categories after adding a new one
        getCategories();
      } else {
        toast.error("Failed to add category.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the category.");
    }
  };

  const updateCategory = async (name, id) => {
    try {
      const response = await axios.patch(
        `http://localhost:8090/api/category/update/${id}`,
        name
      );
      if (response.status === 200) {
        toast.success("Category update successfully.");
        // Clear the form after successful submission
        setState(initialState);
        // Refresh the list of categories after adding a new one
        getCategories();
        navigate("/categories");
      } else {
        toast.error("Failed to update category.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the category.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.name) {
      toast.error("Category name is required.");
    } else {
      if (!id) {
        addCategory(state);
      } else {
        updateCategory(state, id);
      }
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    getCategories();
  }, []);

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

  const deleteCategory = async (id) => {
    if (window.confirm("Vous Voulez vraiment supprimer cette categorie?")) {
      const response = await axios.delete(
        `http://localhost:8090/api/category/${id}`
      );
      if (response.status === 200) {
        toast.success("Category delete successfull");
        setState(initialState);
        getCategories();
        navigate("/categories");
      }
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <ToastContainer position="top-right" />
        <section className="content-header">{/* ... */}</section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Categories</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Nom de la categorie
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Entrer la categorie"
                          onChange={handleInputChange}
                          value={state.name}
                        />
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        {" "}
                        {id ? "Mettre à jour" : "Enrégistrer"}{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Categories List</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th style={{ width: 10 }}>#</th>
                          <th>Category name</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          Array.isArray(data) &&
                          data.map((item, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row"> {index + 1} </th>
                                <td> {item.name} </td>
                                <td>
                                  <div className="row ">
                                    <Link
                                      to={`/category/edit/${item._id}`}
                                      onClick={() => handleCategoryClick(item)}
                                    >
                                      <button className=" btn btn-warning mr-2">
                                        Mettre à jour
                                      </button>
                                    </Link>
                                    <Link
                                      to={`/delete/category/${item._id}`}
                                      onClick={() => deleteCategory(item._id)}
                                    >
                                      <button className=" btn btn-danger">
                                        Delete
                                      </button>
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
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

export default AddCategory;
